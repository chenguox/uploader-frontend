export interface FileChunkParams {
  /**
   * 上传源文件
   */
  file: File;
  /**
   * 分片大小
   */
  chunkSize: number;
}

export interface FileChunk {
  /**
   * 分片
   */
  chunk: Blob;
  /**
   * 下标
   */
  index: number;
  /**
   * 分片hash
   */
  chunkHash: string;
}

export interface UploadOptions {
  /**
   * 上传的文件
   */
  file?: File;
  /**
   * 分片的大小
   * @default 1024 * 1024 * 2
   */
  chunkSize?: number;
}

export interface UploadParams {
  chunk: File | Blob;
  index: number;
  chunkTotal: number;
  filename: string;
  chunkHash: string;
}

export type UploadRequest = (params: UploadParams) => Promise<boolean | void>;

export interface SliceUploadOptions {
  /**
   * 上传的文件
   */
  file?: File;
  /**
   * 分片大小
   * @default 1024 * 1024 * 2
   */
  chunkSize?: number;
  /**
   * 并发上传数
   * @default 3
   */
  poolCount?: number;
  /**
   * 请求超时时间（15s）
   * @default 15000
   */
  timeout?: number;
}
