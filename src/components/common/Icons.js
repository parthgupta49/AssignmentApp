import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedin,FaInstagram } from 'react-icons/fa'
const Icons = ({
    customCSS
}) => {
    return (
        <div className={`flex py-2 gap-3 items-center ${customCSS}`}>
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
        </div>
    )
}

export default Icons