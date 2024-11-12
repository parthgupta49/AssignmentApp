import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

// authenticated users will not go to this route
const OpenRoute = ({ children }) => {
    const { user } = useSelector((store) => store.profile);
    const navigate = useNavigate();
    console.log("In open route the user is : ",user)     
    useEffect(() => {
        if (user !== null){
            navigate("/dashboard/my-profile")
        }
    }, [user, navigate])
    return user === null ? children : null
}

export default OpenRoute