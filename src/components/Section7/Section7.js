import React, { useEffect, useState } from 'react'
import HeadPoints from '../common/HeadPoints'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const imageSourceLink = [
    "https://www.badakar.com/assets/img/carosel3.jpg?h=1708fc7bd9f3565ed489289f97a6b099",
    "https://www.badakar.com/assets/img/2-5.jpg?h=f9df3be2c5f7e11308e1b8432fb801a6",
    "https://www.badakar.com/assets/img/carosel2.jpg?h=a9e2c06810422a0996f15b98b8bc895f"
]
const Section7 = () => {
    const [imageSource, setImageSource] = useState(imageSourceLink[0]);

    const handleLeftClick = () => {
        const currentIndex = imageSourceLink.indexOf(imageSource);
        if (currentIndex === 0) {
            setImageSource(imageSourceLink[imageSourceLink.length - 1]);
            return
        }
        setImageSource(imageSourceLink[currentIndex - 1]);
        return;
    }
    const handleRightClick = () => {
        const currentIndex = imageSourceLink.indexOf(imageSource);
        if (currentIndex === imageSourceLink.length - 1) {
            setImageSource(imageSourceLink[0]);
        }
        else{
            setImageSource(imageSourceLink[currentIndex + 1]);
        }
        return;
    }
    const getCurrentIndexImageSource = (index) => {
        return index === imageSourceLink.indexOf(imageSource);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleRightClick();
        }, 4000);
        return () => clearInterval(intervalId);
// eslint-disable-next-line
    }, [imageSource])
    return (
        <div className='lg:flex lg:flex-row w-11/12 max-w-[1320px] mx-auto lg:gap-0 px-10 py-10 bg-gray-200'>
            <div className='lg:min-w-[60%] lg:pl-10 relative'>
                <img alt='badakar' src={imageSource} className='lg:w-[90%] lg:h-[95%] bg-cover object-center transition-all duration-200' />
                <RiArrowLeftSLine onClick={handleLeftClick} className='   cursor-pointer absolute top-[50%] left-[7%] -translate-y-[50%] text-gray-200 opacity-60 transition-opacity duration-150 hover:opacity-100' size={"2.5rem"} />
                <RiArrowRightSLine onClick={handleRightClick} className=' cursor-pointer absolute top-[50%] right-[12%] -translate-y-[50%] text-gray-200 opacity-60 transition-opacity duration-150 hover:opacity-100' size={"2.5rem"} />
                {
                    <div className='lg:flex lg:flex-row lg:gap-2 absolute bottom-[10%] left-[48%] -translate-x-[45%]'>
                        {imageSourceLink.map((imageSource, index) => (
                            <div key={index} onClick={() => { setImageSource(imageSourceLink[index]) }} className={` cursor-pointer w-[2rem] h-[4px] ${getCurrentIndexImageSource(index) ? 'bg-white' : 'bg-gray-400 opacity-70'} transition-all duration-200`}></div>
                        ))}
                    </div>
                }
            </div>

            <HeadPoints
                subHeading={"OUR SPECIALISATION"}
                mainHeading={"We provide End-to-End solutions in broad Interior Designing solutions."}
                customCSSMainHeading={"lg:max-w-[70%]"}
                customCSSBOX={"lg:gap-5"}
            >
                <div className=''>
                    <p>• Commercial Interior Designing</p>
                    <p>• Corporate Interior Designing</p>
                    <p>• HVAC System</p>
                    <p>• Fire Protection System</p>
                    <p>• Home Automation</p>
                    <p>• Security Surveillance</p>
                </div>
            </HeadPoints>
        </div>
    )
}

export default Section7