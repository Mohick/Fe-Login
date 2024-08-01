import { Route, Routes } from "react-router-dom";
import { lazy } from "react";



const SignUp = lazy(() => import("../Login/Sign Up"))
const HomePage = lazy(() => import("../Home Page/Home Page"))
const VerifyAccount = lazy(() => import("../Verify Account/Verify Account"))


const ControllerRouter = () => {

    // Define routes for your controllers here
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify-account" element={<VerifyAccount />} />

    </Routes>
}




export default ControllerRouter;