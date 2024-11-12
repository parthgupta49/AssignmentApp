import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../services/operations/authAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { loading } = useSelector(store => store.auth);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        newPassword: "",
        confirmPassword: "",
    })

    const handleFormChange = (e) => {
        console.log(e);
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
        console.log(formData)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split("/").at(-1);
        dispatch(resetPassword(formData.newPassword, formData.confirmPassword, token, navigate));
    }

    return (
        <div className='grid min-h-screen bg-richblack-800 place-items-center'>
            {
                loading ? <div className="spinner"></div> :
                    <div className='max-w-[500px] p-4 lg:p-8'>
                        <h1 className='text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5'>Choose New Password</h1>
                        <p className='my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100'>Almost done. Enter your new password and you are all set</p>
                        <form onSubmit={handleFormSubmit} className='flex lg:flex-col lg:gap-5'>
                            <label>
                                <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>New Password <sup className="text-pink-200">*</sup></p>
                                <div className='relative'>
                                    <input
                                        required
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter new password"
                                        onChange={handleFormChange}
                                        name='newPassword'
                                        value={formData.newPassword}
                                        className="form-style w-full !pr-10"
                                    />
                                    <span className='text-white absolute top-[50%] right-5 -translate-y-[50%]' onClick={() => { setShowPassword(prev => !prev) }}>
                                        {
                                            showPassword ? <AiFillEyeInvisible /> : <AiFillEye />
                                        }
                                    </span>
                                </div>
                            </label>
                            <label className=''>
                                <p className='text-white'> Confirm New Password <sup className='text-pink-200'>*</sup></p>
                                <div className='relative'>
                                    <input
                                        required
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm password"
                                        onChange={handleFormChange}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        className="form-style w-full !pr-10"
                                    />
                                    <span className='text-white absolute top-[50%] right-5 -translate-y-[50%]' onClick={() => { setShowConfirmPassword(prev => !prev) }}>
                                        {
                                            showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />
                                        }
                                    </span>
                                </div>
                            </label>
                            <button type='submit' className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900">
                                Reset Password
                            </button>
                        </form>
                        <div>
                            <Link to="/login">
                                <p>Back to Login</p>
                            </Link>
                        </div>
                    </div>
            }
        </div>
    )
}

export default UpdatePassword