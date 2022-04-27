import React from 'react';
import { AiFillInstagram, AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 © La caverne High-Tech de Bastien</p>
      <p className="icons">
        <a href="https://www.instagram.com/bastosnz74/">
          <AiFillInstagram className="icon" size={30} />
        </a>
        <a href="https://github.com/bastosnz74">
          <AiFillGithub className="icon" size={30} />
        </a>
      </p>
    </div>
  )
}

export default Footer