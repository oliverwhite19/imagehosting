import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import styled from '@emotion/styled';


const Dropzone = styled.div`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
  width: 100vw;
  height: 100vh;
`

function App() {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})
  return (
    <Dropzone {...getRootProps()}>
      <input {...getInputProps()} />
      <header>
        <h1>
          Let's upload some images!!
        </h1>
      </header>
      <p>
        Drag and drop or select a file.
      </p>
    </Dropzone>
  );
}

export default App;
