import React from 'react'

const Section2 = () => {
    return (
        <div className='w-full py-4'>
            <div className='w-11/12 max-w-[1320px] mx-auto flex  items-center gap-0'>
                <h2 className=' text-gray-300 text-7xl font-bold -rotate-90'>BADAKAR</h2>
                <div className=' flex flex-col gap-5 -ml-[6rem]'>
                    <div className='flex items-center gap-5'>
                        <div className='w-[15px] h-[2px] bg-black'></div>
                        <p className=' opacity-60 tracking-widest'>WELCOME</p>
                    </div>
                    <h2 className='w-[80%] font-extrabold text-3xl'>
                        BADAKAR, HELPS YOU TO RENDER YOUR DREAMS AND IMAGINATION INTO REALITY.
                    </h2>
                    <div className='max-w-[85%] text-left tracking-wide flex flex-col gap-5'>
                        <p>
                            Experts in Commercial & Industrial interior design services encompass a wide range of interior decorators who offers designs of a highly professional nature.
                        </p>
                        <p>
                            Our clients receive the best smart & Modern interior design, all according to your the brand need of your company.
                        </p>
                    </div>

                    <div className='self-end flex items-center gap-2 bg-[#424649] text-[#fff] px-3 py-2'>
                        <div className='w-[15px] h-[2px] bg-[#fff]'></div>
                        <p className=' opacity-60 text-base font-medium'>READ MORE</p>
                    </div>
                </div>
                <div className='h-full'>
                    <img alt='badakar' src='https://www.badakar.com/assets/img/main-banner1.png?h=9d0b17ac6336de30e5da6be0b7870a4b' className='h-[90%] w-[90%] ' />
                </div>

            </div>
        </div>
    )
}

export default Section2