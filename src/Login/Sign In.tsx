import { Link, useNavigate } from "react-router-dom"
import Button from "../Model CSS/Button/Button"
import FrameLayout from "../Model CSS/Frame Layout/Frame Layout"
import InfoInput from "../Model CSS/Info Input/Info Input"
import Title from "../Model CSS/Title/Title"
import { handleSignIn } from "./Handle Sign In"
import './Sign In.css'





const SignIn = () => {
    const navigation = useNavigate()

    return <div className="min-h-screen flex justify-center items-center min-w-screen">
        <FrameLayout className="w-[500px]">
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
            <div className=" flex-wrap mt-6 grid grid-cols-2 gap-2">

                <Button onClick={() => navigation("/sign-up")} className="w-full" backgroundColor={"success"}>
                    Đăng Ký
                </Button>

                <Button className="w-full" onClick={() => handleSignIn(navigation)}>
                    Đăng Nhập
                </Button>
            </div>
        </FrameLayout>
    </div>
}



export default SignIn