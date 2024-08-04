import Button from "../Model CSS/Button/Button"
import FrameLayout from "../Model CSS/Frame Layout/Frame Layout"
import InfoInput from "../Model CSS/Info Input/Info Input"
import Title from "../Model CSS/Title/Title"



const ForgotPassword = () => {
    // đang phát triễn , during process develop
    return <div className="min-w-screen min-h-screen flex justify-center items-center">
        <FrameLayout className="w-[500px]">
            <Title>Forgot Password</Title>
            <InfoInput id="forgoss__password" nameLabel="Your Email" typeInput="email">
                Nhập Email của bạn để đặt lại mật khẩu!
            </InfoInput>
            <Button className="mt-5 ">
                Xác Nhận
            </Button>
        </FrameLayout>
    </div>
}



export default ForgotPassword