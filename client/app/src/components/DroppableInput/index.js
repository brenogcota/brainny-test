import React from 'react';
import { Upload, message } from 'antd';

const { Dragger } = Upload;

function DroppableInput({ onInput }) {

    const props = {
        name: 'file',
        multiple: true,
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            onInput(info.fileList);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          onInput(e.dataTransfer.files);
        },
    };


    return (
        <div className="my-3">
            <Dragger {...props}>
                <p className="text-sm text-gray-600 p-2">Drag & Drop files or <a className="text-sm text-blue-600" href="#">Browse</a></p>
            </Dragger>
        </div>
    );
}

export default DroppableInput;