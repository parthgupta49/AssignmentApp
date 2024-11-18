import React from 'react'
import HeadPoints from '../common/HeadPoints'
import ImageGallary from '../common/ImageGallary'

const Section4 = () => {
    return (
        <div className='lg:flex lg:flex-row w-11/12 max-w-[1320px] mx-auto lg:gap-9 py-[4%]'>
            <HeadPoints
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

            </HeadPoints>

            <div className='lg:w-[70%]  flex flex-row flex-wrap lg:gap-20 lg:gap-y-6'>
                <ImageGallary imageSource={"https://www.badakar.com/assets/img/f8a2c9d5-2a51-4dc7-a954-245a3839ec46Design%20and%20build,%20a%20superior%20method%20for%20corporate%20fitouts.jpg?h=9119516b4398422daebb1cac6c5ad1e4"}/>
                <ImageGallary imageSource={"https://www.badakar.com/assets/img/mep-service-mechanicaleng.jpg?h=1b3deea851cba2807370e14da898087a"}/>
                <ImageGallary imageSource={"https://www.badakar.com/assets/img/Home-automation.jpeg?h=f014769c2f861274e96d8e26b6ffa639"}/>
                <ImageGallary imageSource={"https://www.badakar.com/assets/img/PTZ%20camera.jpg?h=105ec69c618b9831626a20c3a7610b1a"}/>
                <ImageGallary imageSource={"https://www.badakar.com/assets/img/commercial%20ceiling.jpg?h=7ffedbafa5fea2d86d0ffbc786956947"}/>
                <ImageGallary imageSource={"https://www.badakar.com/assets/img/FFS.jpg?h=cdc7a25ff140774a41c33933eee481c8"}/>


            </div>
        </div>
    )
}

export default Section4