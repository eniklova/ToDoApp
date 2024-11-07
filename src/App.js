import React, { useState } from 'react';
import Header from './layouts/Header';
import Main from './layouts/Main';
import './Styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Header onOpenModal={handleOpenModal} />
      <Main showModal={showModal} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default App;


