import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";



const SignUp = lazy(() => import("../Login/Sign Up"))
const HomePage = lazy(() => import("../Home Page/Home Page"))
const VerifyAccount = lazy(() => import("../Verify Account/Verify Account"))
const SignIn = lazy(() => import("../Login/Sign In"))
const ForgotPassword = lazy(() => import("../Forgot Password/Forgot Password"))

const ControllerRouter = () => {


    console.log(import.meta.env.VITE_CONFIG_GG_KEY);
    
    // Define routes for your controllers here
    return <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

    </Routes>
}




export default ControllerRouter;