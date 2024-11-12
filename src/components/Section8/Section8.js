import React from 'react'
import { VscDash } from "react-icons/vsc";

const imageSourceLink = [
    "https://www.badakar.com/assets/img/array-about.jpg?h=d6fbb78c9e9fb49ff8d011b8cc79e381",
    "https://www.badakar.com/assets/img/grc-subhiksha-logo.png?h=58ca893a7320133e5fedd1f9b824ccd3",
    "https://www.badakar.com/assets/img/Prestige-Glenwood-Logo.png?h=9f5b56121bf0f3141ed09416f6ed3c3c",
    "https://www.badakar.com/assets/img/LOGO.gif?h=3b8a3c65167ff997de97813e7dc5d9d3",
    "https://www.badakar.com/assets/img/wurfel.jpeg?h=2dd31bf272f002ae094878d8a83146ff",
    "https://www.badakar.com/assets/img/Logo-Park-Plaza.jpg?h=fff8ab97a483155e6dcc27911eb9cd0f",
    "https://www.badakar.com/assets/img/logo.jpg?h=a2fb87db0b30fee6559548a6336f9cdd",
    "https://www.badakar.com/assets/img/IIMB%20Logo.jpg?h=afc45b6f7fb2200f9bb31da7fe510ad8",
    "https://www.badakar.com/assets/img/FORTIS%20HOSPITAL.png?h=2d904e7c8630e05ae1210423e9535a6b",
    "https://www.badakar.com/assets/img/3dots-logo.jpg?h=57f40ab8fe6c50334fdb10b3191ca0d8",
    "https://www.badakar.com/assets/img/brand.gif?h=92f68a77b2aab3fd63f29e58970a7542",
    "https://www.badakar.com/assets/img/ola.jpg?h=28c6e1b59a1053f9db4c0451d26a2186",
    "https://www.badakar.com/assets/img/kr-hospital.jpg?h=b3cb65e60eebc74d6553d068ab879620"
]


const Section8 = () => {
    return (
        <div className='lg:flex lg:flex-row w-11/12 max-w-[1320px] mx-auto lg:gap-10 pl-10 py-10'>

            <h2 className='text-2xl font-bold max-w-[20%] pt-5'>OUR PRESTIGIOUS CLIENTS</h2>

            <div className='lg:w-[70%] flex flex-col items-end'>
                <div className='grid lg:grid-cols-4 lg:w-full place-items-end   '>
                    {
                        imageSourceLink.map((imageSource, index) => {
                            return (
                                <div key={imageSource} className=' box-border lg:mx-2 lg:my-2 lg:w-[90%] lg:px-4 lg:py-6 lg:rounded-sm  lg:hover:scale-[106%] lg:transition-all lg:duration-700 lg:ease-in-out lg:flex lg:items-center lg:justify-center  lg:shadow-gray-500 lg:shadow-xl '>
                                    <img src={imageSource} alt="badakar-gallary" className='lg:w-fit lg:h-[45px] lg:rounded-lg  ' />
                                </div>

                            )
                        })
                    }

                </div>

                <div className='text-btn-color bg-btn-bg  text-sm hover:text-btn-hover-color hover:bg-btn-hover-bg px-3 py-2 flex items-center tracking-widest rounded-lg transition-colors duration-300'>
                <VscDash /> &nbsp; OUR CLIENTAL</div>


            </div>

        </div>
    )
}

export default Section8