import { useNavigate } from "react-router-dom"
import FrameLayout from "../Model CSS/Frame Layout/Frame Layout"
import Title from "../Model CSS/Title/Title"
import InfoInput from "../Model CSS/Info Input/Info Input"
import Button from "../Model CSS/Button/Button"
import ListUl from "../Model CSS/List Ul/List Ul"
import HandleDomSignUp from "./Handle Dom Sign Up/Handle Dom Sign Up"
import { listData } from "./Handle Dom Sign Up/List Data"
import { sendFormSignup } from "./send form login"



const SignUp = () => {
    const navigation = useNavigate()
    return <div className="min-w-screen min-h-screen flex justify-center items-center">
        <FrameLayout className="w-[500px]" border={"bordered"}>

            <div className="container mx-auto mt-10">
                <Title>
                    Đăng Ký
                </Title>

                <div className="mb-4">
                    <InfoInput id="signUp-usename" onChange={HandleDomSignUp.usename} typeInput="text" required minLength={6} maxLength={30} nameLabel="Tên Tài Khoản" >
                        Tên Tài Khoản Phải Có Ít Nhất 6 ký tự và tối đa 30 ký và tự chỉ dùng bản chữ latinh!
                    </InfoInput>
                </div>
                <div className="mb-4">
                    <InfoInput id="signUp-email" required onChange={HandleDomSignUp.email} typeInput="email" nameLabel="email" >
                        Nhập Email Của Bạn  !
                    </InfoInput>
                </div>
                <div className="mb-4">
                    <InfoInput id="signUp-password" required onChange={HandleDomSignUp.password} typeInput="password" nameLabel="Mật Khẩu" >
                        <ListUl className="grid grid-cols-2" classItems="list-item" listData={listData} />
                    </InfoInput>
                </div>
                <div className="mb-4">
                    <InfoInput id="signUp-confirmPassword" required onChange={HandleDomSignUp.confirmPassword} typeInput="password" nameLabel="Nhập Lại Mật Khẩu" >
                        Nhập lại tương tự mật khẩu trên !
                    </InfoInput>
                </div>
                <div className="w-full flex justify-end">
                    <Button onClick={() => {
                        sendFormSignup(navigation)
                    }}>
                        Đăng Ký
                    </Button>
                </div>
            </div>

        </FrameLayout >
    </div >

}



export default SignUp