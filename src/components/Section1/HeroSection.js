import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className='w-11/12 max-w-[1250px] ml-[12rem] flex flex-col gap-10'>
            <h1 className='text-5xl font-extrabold font-sans text-white pt-[30rem] leading-tight'><p>The Modern</p> Designs and Furnishing</h1>
            <p className='-mt-8 text-white bg-white bg-opacity-30 font-normal'>A comprehensive range of modern designs and Furnishing are available which outcompetes the peers globally</p>
            <div>
                <button className=' bg-[#ffc107] px-3 py-1 text-white'>Download Business Profile</button>
                <div className='hero-section1-button w-[230px] float-end flex text-white justify-end py-2 gap-3 items-center'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaInstagram />
                </div>
            </div>
        </div>
    )
}

export default HeroSection