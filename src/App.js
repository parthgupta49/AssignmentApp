import './App.css';
import OpenRoute from "./components/core/Auth/OpenRoute"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/core/Auth/ProtectedRoute";
import VerifyEmail from "./pages/VerifyEmail";
import Home from "./pages/Home";
import MyProfile from "./components/dashboard/MyProfile";
import Settings from "./components/dashboard/Settings/index";
import Error from "./pages/Error"
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';

function App() {
  return (

    <div className='relative w-screen min-h-screen overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<OpenRoute><Login /></OpenRoute>} />
        <Route path="/signup" element={<OpenRoute><Signup /></OpenRoute>} />
        <Route path="/verify-email" element={<OpenRoute><VerifyEmail /></OpenRoute>} />
        <Route path="/forgotpassword" element={<OpenRoute><ForgotPassword /></OpenRoute>} />
        <Route path="/update-password/:id" element={<OpenRoute><UpdatePassword /></OpenRoute>} />
        <Route element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;