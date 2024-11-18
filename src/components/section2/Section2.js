import React from 'react'

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from "react-router-dom";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { MaskContainer } from "../ui/svg-mask-effect";

import {
    TextRevealCard,
} from "../ui/text-reveal-card";



const Section2 = () => {
    return (
        <div className='w-full py-4 bg-black '>
                <TextHoverEffect text="BADA" />
            <div className='w-11/12 max-w-[1420px] mx-auto flex  items-center gap-20'>
                <div className=' flex flex-col gap-5 -ml-[6rem]'>
                    <div className='flex items-center gap-5'>
                        <div className='w-[15px] h-[2px] bg-richblack-200'></div>
                        <p className=' opacity-60 tracking-widest text-white'>WELCOME</p>
                    </div>
                    <h2 className=' font-extrabold text-3xl'>
                        <TextRevealCard
                            text="You know the business?"
                            revealText="Badakar, Helps You Build!"
                        ></TextRevealCard>
                    </h2>
                    <div className=' text-center tracking-wide flex flex-col gap-5'>
                            <MaskContainer revealText={"Experts in Commercial & Industrial interior design services encompass a wide range of interior decorators who offers designs of a highly professional nature."}
                            className="h-[25rem] border rounded-md">
                                <p className='max-w-4xl mx-auto text-white text-center  text-4xl font-bold'>
                                Experts in <span className=' text-pink-200'>Commercial & Industrial interior</span> design services encompass a wide range of <span className='text-yellow-25'>interior decorators</span> who offers designs of a highly <span className=' text-red-200'>professional</span> nature.
                                </p>
                            </MaskContainer>
                        
                    </div>

                    {/* <div className='self-end flex items-center gap-2 bg-[#424649] text-[#fff] px-3 py-2'> */}
                        {/* <div className='w-[15px] h-[2px] bg-[#fff]'></div> */}
                        <button className="w-fit self-end px-1 py-1 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                Read More
                            </span>
                        </button>
                    {/* </div> */}
                </div>
                <div className='h-full'>





                    {/* <img alt='badakar' src='https://www.badakar.com/assets/img/main-banner1.png?h=9d0b17ac6336de30e5da6be0b7870a4b' className='h-[90%] w-[90%] ' /> */}
                    {ThreeDCardDemo()}
                </div>

            </div>
        </div>
    )
}

export default Section2






export function ThreeDCardDemo() {
    return (
        (<CardContainer className="inter-var">
            <CardBody
                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white text-center mx-auto">
                    Make things in no time
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center mx-auto">
                    Hover over this card to start your own
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src="https://www.badakar.com/assets/img/main-banner1.png?h=9d0b17ac6336de30e5da6be0b7870a4b"
                        // height="1000"
                        // width="1000"
                        className="h-[90%] w-[90%] object-cover rounded-xl group-hover/card:shadow-xl mx-auto"
                        alt="thumbnail" />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
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
                </div>
            </CardBody>
        </CardContainer>)
    );
}
