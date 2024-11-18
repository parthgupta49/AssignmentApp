import React from 'react'
import HeadPoints from '../common/HeadPoints'
import ImageGallary from '../common/ImageGallary'
import { LampContainer } from '../ui/lamp'
import { motion } from 'framer-motion'


const Section4 = () => {
    return (
        <div className='lg:flex lg:flex-row w-11/12 max-w-[1320px] mx-auto lg:gap-9 py-[4%]'>
            {/* <HeadPoints
            subHeading={"OUR EXPERTISE"}
            mainHeading={"PASSION INTO INTERIOR SERVICES."}
            customCSSMainHeading={"lg:max-w-[70%] text-white"}
            customCSSBOX={"lg:gap-4"}
            >
                <div className='lg:flex lg:flex-col lg:gap-7 text-white'>
                    <p>The Elegance meets efficiency in Professional projects.</p>
                    <div>
                        <p>- Fresh Commercial & Residential Interiors.</p>
                        <p>- Renovation / Restructure / Remodelling.</p>
                        <p>- Electronics / Electricals.</p>
                        <p>- Interior Fitouts.</p>
                        <p>- Complete MEP Services.</p>
                        <p>- Home Automation.</p>
                        <p>- Security Surveillance.</p>
                        <p>- Fire Protection.</p>
                    </div>
                </div>

            </HeadPoints> */}

            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: -50 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    The Elegance meets efficiency <br /> in Professional projects.
                </motion.h1>

                {/* <motion.div

                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center  font-medium tracking-tight text-transparent "

                >
                    <p>- Fresh Commercial & Residential Interiors.</p>
                    <p>- Renovation / Restructure / Remodelling.</p>

                </motion.div> */}
            </LampContainer>
        </div>
    )
}

export default Section4