import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiFillGoogleCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
    <p>2022 ABZZ TECH Store All rights reserved</p> 
    <p className='icons'>
      <AiFillInstagram />
      <AiOutlineTwitter />
      <AiFillFacebook />
      <AiFillGoogleCircle />
    </p> 
    </div>
  )
}

export default Footer
