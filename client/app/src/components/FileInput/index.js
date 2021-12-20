import React from 'react';

// import { Container } from './styles';

function FileInput({ id, Icon, text, onChange, multiple = false }) {
  return (
      <div>
          <label htmlFor={id} className="flex justify-center items-center p-1 cursor-pointer bg-gray-100 rounded hover:bg-gray-200">
              {Icon && <Icon className="mr-2" />}
              {text}
          </label>
          <input className="hidden" id={id} type="file" multiple={multiple} onChange={onChange} />
      </div>
  );
}

export default FileInput;