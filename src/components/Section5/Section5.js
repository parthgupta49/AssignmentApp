import React from 'react'
import HeadPoints from '../common/HeadPoints'
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from 'react-router-dom';

import HighlightText from '../common/HighlightText';
import CodeBlocks from '../common/CodeBlocks';

// import ImageGallary from '../common/ImageGallary'


const Section5 = () => {
    return (
        <div className='lg:flex lg:flex-row w-11/12 max-w-[1320px] mx-auto lg:gap-40 lg:justify-center py-[5%] items-start'>
            {/* image */}
            <div className='lg:max-w-[40%]'>
                {ThreeDCardDemo()}
            </div>

            {/* HeadPoints */}
            {/* <HeadPoints
                subHeading={"WHY US"}
                boxCustomCSS = {"bg-white"}
                mainHeading={"We focus on utilizing the static limitations to the fullest. Our team has expertise in all types of architectural designs and decoration be it a multi-location offices, farmhouse, residence, restaurants, industrial & commercial complex."}
                customCSSBOX={"bg-black py-4 px-6 lg:gap-4 text-white"}
                customCSSMainHeading={" text-[1.25rem] text-white "}
            >
                <div className='lg:flex lg:flex-col  text-white'>
                    <p><span className='font-bold'>• </span>Modern designs and furnishing</p>
                    <p><span className='font-bold'>• </span>End-to-End from concept, creation, planning to execution.</p>
                    <p><span className='font-bold'>• </span>Proactive-Project Management.</p>
                    <p><span className='font-bold'>• </span>Professional & Product expertise.</p>
                </div>
            </HeadPoints> */}

            <div className='lg:w-[50%]'><CodeBlocks
                            position={"lg:flex-row-reverse"}
                            heading={
                                <div className='text-4xl font-semibold'>Start <HighlightText text={"coding in seconds "} />
                                </div>
                            }
                            subHeading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                            ctabtn1={{
                                text: "Continue Lesson",
                                linkTo: "/signup",
                                active: true
                            }}
                            ctabtn2={{
                                text: "Learn More",
                                linkTo: "/login",
                                active: false
                            }}

                            codeblock={`\t\t\t\t\tWHY US?\nWe focus on utilizing the static limitations to the fullest.\n\tOur team has expertise in all types of architectural designs and decoration be it a multi-location offices, farmhouse, residence, restaurants, industrial & commercial complex.\n\n• Modern designs and furnishing\n• End-to-End from concept, creation, planning to execution.\n• Proactive-Project Management.\n• Professional & Product expertise.`}
                            codeColor={"text-yellow-25 font-bold"}

                            backgroundGradient={<div className='absolute w-[50%] h-[40%] left-[3rem] top-3' style={{
                                backgroundImage: 'radial-gradient(farthest-corner at 50% 50%, #1fa2ff -3.62%, #12d8fa 50.44%, #a6ffcb 104.51%)',
                                filter: 'blur(100px)'
                            }}></div>}

                        >

                        </CodeBlocks></div>
            
        </div>
    )
}

export default Section5



export function ThreeDCardDemo() {
    return (
        (<CardContainer className="inter-var">
            <CardBody
                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-richblack-800 dark:border-white/[0.2] border-black/[0.1]  h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white text-center mx-auto">
                    Make things in no time
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center mx-auto">
                    <span className='font-medium text-lg text-pink-200'>Hover</span> over this card to start your own
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src="https://www.badakar.com/assets/img/mainpage2.png?h=d29841b4c1025050ad54a9dc40fc026e"
                        // height="1000"
                        // width="1000"
                        className="h-[90%] w-[90%] object-cover rounded-xl group-hover/card:shadow-xl mx-auto"
                        alt="thumbnail" />
                </CardItem>
                {/* <div className="flex justify-between items-center mt-20">
                    <Link to={"/login"}><CardItem
                        translateZ={20}
                        href="/"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-sm font-bold dark:text-richblack-800 bg-pink-300">
                        Try now →
                    </CardItem></Link>
                    <Link to={"/signup"}><CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold">
                        Sign up
                    </CardItem></Link>
                </div> */}
            </CardBody>
        </CardContainer>)
    );
}
