import React from 'react'
import HeadPoints from '../common/HeadPoints'
// import ImageGallary from '../common/ImageGallary'

const Section5 = () => {
    return (
        <div className='lg:flex lg:flex-row w-11/12 max-w-[1320px] mx-auto lg:gap-0 lg:justify-center py-[5%]'>
            {/* image */}
            <div className='lg:min-w-[35%]'>
                <img alt='badakar' src='https://badakar.com/assets/img/mainpage2.png?h=d29841b4c1025050ad54a9dc40fc026e' className='' />
            </div>

            {/* HeadPoints */}
            <HeadPoints
                subHeading={"WHY US"}
                mainHeading={"We focus on utilizing the static limitations to the fullest. Our team has expertise in all types of architectural designs and decoration be it a multi-location offices, farmhouse, residence, restaurants, industrial & commercial complex."}
                customCSSBOX={"bg-gray-200 py-4 px-6 lg:gap-4"}
                customCSSMainHeading={" text-[1.25rem] "}
            >
                <div className='lg:flex lg:flex-col '>
                    <p><span className='font-bold'>• </span>Modern designs and furnishing</p>
                    <p><span className='font-bold'>• </span>End-to-End from concept, creation, planning to execution.</p>
                    <p><span className='font-bold'>• </span>Proactive-Project Management.</p>
                    <p><span className='font-bold'>• </span>Professional & Product expertise.</p>
                </div>
            </HeadPoints>
        </div>
    )
}

export default Section5