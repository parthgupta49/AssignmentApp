import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';

const ForgotPassword = () => {
    const [emailSent,setEmailSent] = useState(false);
    const [email,setEmail] = useState("");
    const {loading} = useSelector((store)=>store.auth);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email,setEmailSent))
    }

    return (
        <div className='grid min-h-screen place-items-center bg-richblack-800'>
            {
                loading ? <div>loading...</div> : (
                    <div className='max-w-[500px] p-4 lg:p-8'>
                        <h1 className='text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5'>
                        {   
                            !emailSent ? "Reset Your Password" : "Check your Email"
                        }
                        </h1>
                        <p className=' my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100'>
                            {
                                !emailSent ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery" : `We have sent the reset email to ${email}`
                            }
                        </p>
                        <form onSubmit={handleSubmit}>
                            {
                                !emailSent && 
                                <label className='flex flex-col'>
                                    <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>Email Address</p>
                                    <input 
                                    type='email'
                                    required
                                    name='email'
                                    value={email}
                                    placeholder='Enter your Email Address'
                                    className="form-style w-full"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </label>
                            }
                            <button className='mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900'>
                                {
                                    !emailSent ? "Reset Password" : "Resend Email"
                                }
                            </button>
                        </form>
                        <div className='mt-6 flex items-center justify-between'>
                            <Link to = "/login">
                                <p className='flex items-center gap-x-2 text-blue-200 font-medium' >Back to Login</p>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ForgotPassword