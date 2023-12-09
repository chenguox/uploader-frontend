import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { UploadOutlined } from '@ant-design/icons';
import { Card, Button, Upload, Slider } from 'antd';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import uploader from './../utils/index';

const Uploader: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  console.log(setUploading, setProgress);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', fileList[0]);

    uploader.setFile(fileList[0]);
    uploader.startCutFile();
    // 规定每次切片的文件大小
    // const CHUNK_SIZE = 1024 * 1024 * 5; // 5MB
    // const DefaultChunkSize = 1024 * 5; // 5kb
    // startCutFile(fileList[0], CHUNK_SIZE);
    // fileList.forEach((file) => {
    //   formData.append('files[]', file as RcFile);
    // });
    // console.log(fileList);
    // setUploading(true);
    // uploadFile(formData)
    // You can use any AJAX library you like
    // fetch('http://localhost:8888/login/', {
    //   method: 'GET',
    // }).then((res) => {
    //   console.log(res);
    // });
    // fetch('http://localhost:8888/upload/', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then(() => {
    //     setFileList([]);
    //     message.success('upload successfully.');
    //   })
    //   .catch(() => {
    //     message.error('upload failed.');
    //   })
    //   .finally(() => {
    //     setUploading(false);
    //   });
  };

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  return (
    <PageContainer>
      <Card>
        <Slider defaultValue={progress} tooltip={{ open: true }} disabled={true} />
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>选择文件</Button>
        </Upload>
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : '开始上传'}
        </Button>
      </Card>
    </PageContainer>
  );
};
export default Uploader;
