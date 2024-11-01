"use client"
import React, { useState } from 'react';
import './footer.scss';
// import { FaTwitter } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
// import { BsTwitterX } from "react-icons/bs";
import { RiTwitterFill } from "react-icons/ri";
import { FaTelegramPlane } from 'react-icons/fa';
import Image from 'next/image';
import Dex from '../../../public/dex-screener-seeklogo.png'

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const code = "2mN3yfFwanRmgLVpLWcCskUuyhTr8zKoBw6nwiivpump";

  const handleCopy = () => {
    console.log('clicked');
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    });
  };

  return (
    <div className='footer-section' id='contact'>
      <header className='footer-header'>Get some RETARDIO here</header>
      <span>Ready to do this? Let&apos;s get WHIMSICAL</span>
      <button className='copy-button' onClick={handleCopy}>CONTACT ADDRESS</button>
      <div className="footer-icons">
          <div className="links">
              <a href="https://x.com/RetardioZACK" className="">
                  <RiTwitterFill/>
              </a>
          </div>
          <div className="links">
              <a href="" className="">
                  <FaTelegramPlane />
              </a>
          </div>
          <div className="links">
              <a href="" className="">
                  <Image src={Dex} alt=''/>
              </a>
          </div>
      </div>

      <span className={`tooltip ${copied ? 'show' : ''}`}>Copied to clipboard</span>
    </div>
  );
};

export default Footer;
