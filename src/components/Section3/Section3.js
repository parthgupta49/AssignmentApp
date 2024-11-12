import React from 'react'
import HeadPoints from '../common/HeadPoints'
import Icons from '../common/Icons'

const Section3 = () => {
    return (
        <div className='w-full bg-[#e9ecef] flex lg:flex-row lg:gap-[5%] lg:items-center lg:pl-[7%] lg:py-[2%]'>
            <div className=' lg:flex lg:flex-col gap-3'>
                <div className='flex gap-3 items-center'>
                    <a  href="/" className=' font-source-sans text-btn-bg border-2 tracking-wider duration-300 transition-all px-2 py-1 border-btn-bg hover:text-btn-color hover:bg-btn-bg shadow-btn-hover-bg'>CALL US +91 9590953537</a>
                    <a  href="/" className='text-btn-color bg-btn-bg tracking-wider text-sm hover:text-btn-hover-color hover:bg-btn-hover-bg px-2 py-2'>EMAIL US</a>
                </div>

                <div className='flex gap-8 items-center lg:-ml-5'>
                    <p className=' text-gray-900 text-sm tracking-widest'>FOLLOW US ON</p>
                    <Icons customCSS={'text-gray-800 text-xs'} />
                </div>
            </div>

            <HeadPoints
                customCSSBOX={" lg:flex lg:flex-col lg:gap-3"}
                customCSSMainHeading={'lg:w-[91%]'}
                subHeading={"GET IN TOUCH"}
                mainHeading={"UNMATCHED COMMERCIAL INTERIORS, HOME AUTOMATION & SURVEILLANCE."}
                body={""}
            >Our corporate strategy and Project management, documentations states our clients satisfaction is most.</HeadPoints>
        </div>
    )
}

export default Section3