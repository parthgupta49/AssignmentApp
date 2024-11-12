import React from 'react'

const ImageGallary = ({ imageSource }) => {
    return (
        <div className='relative lg:h-[220px] border-[10px] border-gray-400 border-solid lg:w-[25%] py-2'>
            <img src={imageSource} alt='badakar-gallary' className=' bg-cover object-center lg:w-full lg:h-full translate-x-7 my-auto ' />
        </div>
    )
}

export default ImageGallary