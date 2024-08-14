import { Link, useNavigate } from "react-router-dom"
import Button from "../Model CSS/Button/Button"
import FrameLayout from "../Model CSS/Frame Layout/Frame Layout"
import InfoInput from "../Model CSS/Info Input/Info Input"
import Title from "../Model CSS/Title/Title"
import { handleSignIn } from "./Handle Sign In"
import './Sign In.css'
import { useCallInfoUser } from "../Store/Repository User"
import { useEffect } from "react"

import EndLoading from "../Loading/End Loading"
import InitLoading from "../Loading/Start Loading"
import { loginWithEmail } from "../Config API Thirty Party/Google/Google"
import { motion } from "framer-motion"




const SignIn = () => {
    const navigation = useNavigate()

    const { infoUser, callUser } = useCallInfoUser();

    
    useEffect(() => {
        let allow = true;
        if (allow) {
            callUser();
        }
        return () => {
            allow = false;
        };
    }, [callUser]);

    useEffect(() => {

        if (infoUser.length == 0) return;

        switch (true) {
            case infoUser.login:
                navigation("/");
                break;
            case !infoUser.verified:
                navigation("/verify-account");
                break;
            default:
                // Không cần điều hướng, người dùng đã đăng nhập và xác minh
                break;
        }

    }, [infoUser, navigation]);
    if (!infoUser.haveData) return <InitLoading />
    
    return <div className="min-h-screen flex justify-center items-center min-w-screen">
        <EndLoading />

        <motion.div
            initial={{
                opacity: 0,
                height: 0,
                overflow: 'hidden',
            }}
            animate={{
                opacity: 1,
                height: "auto",
            }}
            transition={{
                duration: 0.5,
                type: "just",
                delay: 0.3
            }}
        >
            <FrameLayout className="w-[90%] sm:w-[500px]">
                <Title>
                    Đăng Nhập
                </Title>
                <InfoInput typeInput="text" id="login__email" className="mb-2" nameLabel="email">
                    Email Hoặc Mật Khẩu Bị sai !
                </InfoInput>
                <InfoInput typeInput="password" className="" id="login__password" nameLabel="password" />
                <Link to={"/forgot-password"} className="text-xs block hover:text-gray-400 transition-all mt-1 text-end">
                    Quên Mật Khẩu !
                </Link>
                <div className=" grid-cols-1 mt-6 grid sm:grid-cols-2 gap-2">

                    <Button onClick={() => navigation("/sign-up")} className="w-full" backgroundColor={"success"}>
                        Đăng Ký
                    </Button>

                    <Button className="w-full" onClick={() => handleSignIn(navigation)}>
                        Đăng Nhập
                    </Button>
                </div>
                <div className="mt-4 text-center text-lg" >
                    Other
                </div>
                <div>
                    <Button className="flex gap-2" onClick={() => loginWithEmail(navigation)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-white " viewBox="0 0 488 512">
                            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                        Google
                    </Button>
                </div>
            </FrameLayout>
        </motion.div>
    </div>
}



export default SignIn