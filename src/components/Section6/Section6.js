import React from 'react'
import HeadPoints from '../common/HeadPoints'

const Section6 = () => {
    return (
        <div className='lg:flex lg:flex-row w-11/12 max-w-[1320px] mx-auto lg:gap-9 px-10 pb-10'>
            <HeadPoints
                subHeading={"PROFESSIONAL SERVICES"}
                mainHeading={"We cover a broad spectrum of Commercial Interior Design, HVAC & Home Automation."}
                customCSSBOX={"lg:gap-5 py-4"}
            >
                <div>
                    <p>Badakar Interiors & Automation offers a various commercial, Residential Interiors  & Home Automation, offering a tailored approach to complement your vision.</p>
                </div>

            </HeadPoints>

            <div className='lg:min-w-[50%]'>
                <form className='lg:flex lg:flex-col lg:max-w-[45%] mx-auto lg:gap-3' onSubmit={(e) => { e.preventDefault(); console.log("form submitted"); }}>
                    <h2 className='font-bold'>BOOK A FREE <span className='font-normal'>CONSULTATION</span></h2>
                    <input required className=' focus:bg-yellow placeholder:text-gray-600 outline-none border-b px-3 py-1 border-black' type='text' placeholder='Name' />
                    <input required className=' focus:bg-yellow placeholder:text-gray-600 outline-none border-b px-3 py-1 border-black' type='tel' placeholder='Mobile Number' />
                    <input required className=' focus:bg-yellow placeholder:text-gray-600 outline-none border-b px-3 py-1 border-black' type='text' placeholder='Email' />
                    <textarea required className=' focus:bg-yellow placeholder:text-gray-600 outline-none border-b px-3 py-1 border-black' rows={1} placeholder='Message' />

                    <button className='border border-gray-700 text-btn-bg px-2 py-1 tracking-wider hover:text-btn-color hover:bg-btn-bg transition-all duration-300 w-fit text-sm '>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Section6