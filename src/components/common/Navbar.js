import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom'

import { logout } from '../../services/operations/authAPI';

import ConfirmModal from './ConfirmModal';
import Profile from "./Profile"


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

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
            <div className='overflow-x-hidden absolute w-11/12 max-w-[1320px] mx-[50%] -translate-x-[50%] bg-transparent z-50'>
                <div className='overflow-x-hidden flex gap-8 justify-between items-center'>
                    <div className='flex lg:flex-row lg:gap-7 '>
                        <Link to={"/"}>
                            <div className=' bg-black w-fit pt-5 px-2 pb-3'>
                                <img alt='logo' height={40} width={140} src='https://www.badakar.com/assets/img/Badakar-Logo-White22.png?h=04655e753af57c3db82f224ad33ac8bb' />
                            </div>
                        </Link>
                        <div className='self-end'>
                            <menu className='flex gap-10 text-white text-xs opacity-70'>
                                <Link to={"/"}><li>HOME</li></Link>
                                <li>ABOUT</li>
                                <li><p>INTEGRATED<p>SOLUTIONS</p></p></li>
                                <li>APPLICATION</li>
                                <li>PROJECT</li>
                                <li>CAREER</li>
                                <li>CONTACT</li>
                            </menu>
                        </div>
                    </div>

                    {/* buttons */}
                    <div>
                        {
                            user ? <div className='flex gap-4 items-center'><Profile /><button className={`rounded-lg border p-2 px-3 text-richblack-50 "} `}
                                onClick={logoutBTNHandler}
                            >Logout</button></div> :
                                <div className='flex gap-4 items-center text-richblack-50' >
                                    <Link to="/login"><button
                                        className={`rounded-lg border p-2 px-3 ${matchRoute("/login") && "bg-richblue-400"}`}
                                    >Log in</button></Link>
                                    <Link to="/signup"><button className={`rounded-lg border p-2 px-3 ${matchRoute("/signup") && "bg-richblue-400"}`}
                                    >Sign up</button></Link>
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