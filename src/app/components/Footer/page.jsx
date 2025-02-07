import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#121212]'>
        <div className='container p-4 flex justify-between'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mr-2'>
               AW.
            </span>
            <p className='text-slate-600 text-sm text-center border-l-2 sm:border-gray-400 sm:ml-4 sm:pl-4 pt-1'>
                &copy; 2024 Aliya Waseem. All rights reserved.
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href={"facebook.com"} className="text-gray-500 w-5 h-5">
      <FaFacebookSquare />
      </Link>
      <Link href={"linkedin.com"} className="ml-2 text-gray-500 w-5 h-5">
      <FaLinkedinIn />
      </Link>
      <Link href={"github.com"} className="ml-2 text-gray-500 w-5 h-5">
      <FaGithubSquare />
      </Link>
      
    </span>
        </div>
    </footer>
  )
}

export default Footer;