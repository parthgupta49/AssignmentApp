import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import SideBar from '../components/dashboard/SideBar';

const Dashboard = () => {
    const { loading: authLoading } = useSelector((store) => store.auth);
    const { loading: profileLoading } = useSelector((store) => store.profile);
    if (profileLoading || authLoading) {
        return (
            <div className='mt-10'>
                Loading...
            </div>
        )
    }

    return (
        <div className='relative flex overflow-x-hidden '>
            <SideBar />
            {/* <div className='absolute left-[15%] text-white w-full'>Home / </div> */}
            <div className='bg-richblack-700 overflow-x-hidden w-full min-h-screen' >
                <div className=' w-11/12 max-w-[1300px] py-[5%] px-[5rem] overflow-x-hidden'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard