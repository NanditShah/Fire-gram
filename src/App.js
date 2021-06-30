import React, { useState } from 'react';
import ImgaeGrid from './comps/ImageGrid.js';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Modal from './comps/Modal'
function App() {
  const [selectedImage,setSelectedImage] = useState(null)
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImgaeGrid setSelectedImage={setSelectedImage} />
      {selectedImage && <Modal selectedImage = {selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
