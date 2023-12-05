import React from 'react';
import logo from "../../assets/images/logo.png";
import './anotherHeader.css';

export default function AnotherHeaderBar() {

  return (
    <div className='headerContainerNotFound'>
      <header className='header-ofNotFound'>
        <img className="headerLogoNotFound" src={logo} alt="Company Logo" />
      </header>
    </div >
  );
}