import request from './request';
import { chunkWorker } from './chunk';
import type { UploadOptions, FileChunk } from './type';

class Upload {
  private file: File | null;
  private fileName: string = '';
  private chunkSize: number;
  private fileChunks: FileChunk[] = [];
  private progressData: any[] = [];

  constructor(options: UploadOptions) {
    this.file = options?.file || null;

    const { chunkSize = 1024 ** 2 * 2 } = options || {};

    this.chunkSize = chunkSize;
  }

  /**
   * 设置上传文件（单个）
   * @param file
   * @returns
   */
  setFile(file: File) {
    this.file = file;
    return this;
  }

  setFileName(name: string) {
    this.fileName = name;
  }

  /**
   * 开始进行切片上传
   */
  async startCutFile() {
    if (this.file === null) return;

    this.setFileName(this.file.name);
    console.log(`开始对[${this.file.name}]文件进行切片`);

    const { file, chunkSize } = this;
    this.fileChunks = await chunkWorker({ file, chunkSize });

    // 3、上传分片
    this.uploadChunks();
  }

  uploadChunks() {
    // 处理成 formData 结构
    const requestList = this.fileChunks
      .map(({ chunk, hash }, index) => {
        const formData = new FormData();
        formData.append('chunk', chunk);
        formData.append('hash', hash);
        formData.append('suffix', 'mp4'); // 后缀
        formData.append('index', index); // 第几片
        formData.append('filename', `${hash}_${index}`);
        return formData;
      })
      .map((formData, index) => {
        return request({
          url: 'http://localhost:8888/upload/',
          data: formData,
          onprogress: this.handleProgress(this.progressData[index]),
        });
      });

    // 上传文件
    Promise.all(requestList).then(() => {
      // 延迟发送合并请求，方便观察服务器文件的步骤
      setTimeout(() => {
        this.mergeRequest();
      }, 1000);
    });
  }

  handleProgress(data) {
    return (e) => {
      data.presentage = ((e.loaded / e.tatal) * 100).toFixed(2);
      console.log(JSON.stringify(this.progressData));
    };
  }

  /**
   * 合并文件
   * @param fileName
   */
  mergeRequest() {
    request({
      url: 'http://localhost:8888/upload/merge',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: JSON.stringify({
        // 服务器存储的文件名: hash+文件后缀
        fileName: this.fileName,
        suffix: this.getFileSuffix(),
        // 用于服务器合并文件
        size: 1024 * 1024 * 5,
      }),
    });
  }

  /**
   * 获取文件名的后缀
   * @param fileName
   * @returns
   */
  getFileSuffix() {
    const arr = this.fileName.split('.');
    if (arr.length > 0) {
      return arr[arr.length - 1];
    }
    return '';
  }
}

export { Upload };
