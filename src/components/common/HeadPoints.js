import React from 'react'

const HeadPoints = ({
    subHeading,
    mainHeading,
    body,
    boxCustomCSS,
    children,
    customCSSBOX,
    customCSSMainHeading
}) => {
    return (
        <div className={`lg:flex lg:flex-col ${customCSSBOX}`}>
            <div className='flex items-center gap-5'>
                <div className={`w-[15px] h-[2px] ${boxCustomCSS}`}></div>
                <p className=' opacity-60 tracking-widest'>{subHeading}</p>
            </div>

            <h4 className={`text-[1.5rem] font-bold leading-7 ${customCSSMainHeading}`}>
                {mainHeading}
            </h4>

            <div className={``}>
                {children}
            </div>

        </div>
    )
}

export default HeadPoints