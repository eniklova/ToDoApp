import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; 
import logo from './images/logo.png';
import { FaPlusCircle } from 'react-icons/fa';

const Header = ({ onOpenModal }) => {
  return (
    <header className="header-custom p-3"> 
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <img src={logo} alt="Logo" style={{ height: '150px' }} />    

         <button
          onClick={onOpenModal}
          className="btn btn-link p-0 mt-4" 
          aria-label="Pridať úlohu"
          style={{ fontSize: '70px' }} 
        >
          <FaPlusCircle />
        </button>
      </div>
    </header>
  );
};

export default Header;

