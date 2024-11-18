import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom'

import { logout } from '../../services/operations/authAPI';

import ConfirmModal from './ConfirmModal';
import Profile from "./Profile"


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import { Button } from '../ui/moving-border';
import { NavbarDemo } from './Navbar-Redesigned';

const firebaseConfig = {
    apiKey: "AIzaSyBP8CDB8GSlsrWzdh4v7v3Yg0mliOnOKvk",
    authDomain: "todo-web-application-1e5e8.firebaseapp.com",
    projectId: "todo-web-application-1e5e8",
    storageBucket: "todo-web-application-1e5e8.appspot.com",
    messagingSenderId: "91785028349",
    appId: "1:91785028349:web:4bd691d0870781db9cd494"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useSelector((state) => state.profile);
    const matchRoute = (route) => {
        return matchPath(route, location.pathname)
    }

    const [modalData, setModalData] = useState(null);

    function logoutBTNHandler() {
        setModalData({
            text1: 'Are you Sure',
            text2: 'You will be logged out of your account',
            btn1Text: "Yes",
            btn1CustomCSS: "bg-red-500 text-white",
            btn2CustomCSS: "",
            btn1Handler: () => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        signOut(auth)
                            .then(() => {
                                console.log('signed out :)');
                                dispatch(logout(navigate));
                                setModalData(null);
                            })
                    }
                    else {
                        dispatch(logout(navigate));
                        setModalData(null);
                    }
                });

            },
            btn2Text: "No",
            btn2Handler: () => setModalData(null)
        })
    }
    return (
        <div className='relative'>
            <div className=' absolute w-11/12 max-w-[1320px] mx-[50%] -translate-x-[50%] bg-transparent z-50'>
                <div className=' flex justify-between items-center lg:min-h-[5rem]'>

                
                    <div className='flex lg:flex-row '>
                        <Link to={"/"}>
                            <div className=' bg-black w-fit pt-5 px-2 pb-3'>
                                <img alt='logo' width={300} src='https://www.badakar.com/assets/img/Badakar-Logo-White22.png?h=04655e753af57c3db82f224ad33ac8bb' />
                            </div>
                        </Link>
                        {/* <div className='self-end'>
                            <menu className='flex gap-10 text-white text-xs opacity-70'>
                                <Link to={"/"}><li>HOME</li></Link>
                                <li>ABOUT</li>
                                <li><p>INTEGRATED<p>SOLUTIONS</p></p></li>
                                <li>APPLICATION</li>
                                <li>PROJECT</li>
                                <li>CAREER</li>
                                <li>CONTACT</li>
                            </menu>
                        </div> */}
                        {
                            NavbarDemo()
                        }

                    </div>

                    {/* buttons */}
                    <div>
                        {
                            user ? <div className='flex gap-4 items-center'><Profile /><button className={`rounded-lg border p-2 px-3 text-richblack-50 "} `}
                                onClick={logoutBTNHandler}
                            >Logout</button></div> :
                                <div className='flex gap-4 items-center text-richblack-50' >
                                    <Link to="/login">

                                        <Button
                                            borderRadius="1.75rem"
                                            containerClassName={`${matchRoute("/login") && "bg-richblue-400"}`}
                                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                                        >
                                            Login
                                        </Button>
                                    </Link>
                                    <Link to="/signup">
                                        <HoverBorderGradient
                                            containerClassName="rounded-full"
                                            as="button"
                                            className={`dark:bg-black rounded-[1.75rem] bg-white text-black dark:text-white flex items-center space-x-2 ${matchRoute("/signup") && "dark:bg-richblack-800"}`}
                                        >
                                            <span>Sign up</span>
                                        </HoverBorderGradient>

                                    </Link>
                                </div>
                        }
                    </div>
                </div>
                {/* modal */}
            </div>
            {
                modalData && <ConfirmModal modalData={modalData} />
            }
        </div>
    )
}

export default Navbar