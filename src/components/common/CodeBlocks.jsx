import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import CTAButton from '../common/Button';
import { TypeAnimation } from 'react-type-animation';




const CodeBlocks = ({ position, heading, subHeading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codeColor }) => {
    return (
        <div className={`flex ${position}  my-20 justify-between gap-[5rem] codeBlocks`}>
           
            {/* CodeBlock */}
            <div className='flex w-full relative border border-richblack-800'>
                {backgroundGradient}
                {/* Lines */}
                <div className='text-center text-richblue-400 font-inter font-bold flex flex-col w-[10%]'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                </div>
                {/* Code */}
                <div className={`w-[90%] ${codeColor} flex flex-col gap-2 font-mono pr-2`}
                >
                    <TypeAnimation
                        sequence={[codeblock, 5000, ""]}
                        cursor={true}
                        repeat={Infinity}
                        omitDeletionAnimation={true}
                        style={{
                            whiteSpace: "break-spaces",
                            display: "block"
                        }}
                    />
                </div>
            </div>
        </div >
    )
}

export default CodeBlocks