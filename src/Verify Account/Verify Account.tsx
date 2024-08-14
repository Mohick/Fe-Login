import { useNavigate } from "react-router-dom"
import { countDownCreateNewVerifyAccount, createNewVerifyAccount, sendVerifyAccount } from "./Send Verify Account"
import { useCallInfoUser } from "../Store/Repository User"
import { useEffect } from "react"
import FrameLayout from "../Model CSS/Frame Layout/Frame Layout"
import Title from "../Model CSS/Title/Title"
import InfoInput from "../Model CSS/Info Input/Info Input"
import Button from "../Model CSS/Button/Button"
import InitLoading from "../Loading/Start Loading"
import EndLoading from "../Loading/End Loading"
import { motion } from "framer-motion"




const VerifyAccount = () => {
    const navigation = useNavigate()
    const { infoUser, callUser } = useCallInfoUser()
    useEffect(() => {
        let allow = true;
        if (allow) {

            callUser()
        }
        return () => {
            allow = false;
        }
    }, [])
    useEffect(() => {

        if (infoUser.length == 0) return;
        let allow = true;

        switch (true) {
            case !infoUser.login:
                navigation("/sign-in");
                break;
            case infoUser.verified:
                navigation("/");
                break;
            default:
                if (allow) {
                    countDownCreateNewVerifyAccount()
                }
                break;
        }
        return () => {
            allow = false;
        }
    }, [
        infoUser
    ])

    if (!infoUser.haveData) return <InitLoading />
    return infoUser.verified == false &&
        <div className="flex min-w-screen min-h-screen justify-center items-center">
            <EndLoading />
            <motion.div
                initial={{
                    y: -1000,
                    scale: .6
                }}
                animate={{
                    y: 0,
                    scale: 1
                }}
                transition={{
                    delay: 0.1,
                    duration: .2
                }}
            >
                <FrameLayout className="w-[90%] sm:w-[auto]">
                    <Title>
                        Xác Minh Tài Khoản
                    </Title>
                    <InfoInput id="verify__account__code" minLength={6} maxLength={6} required typeInput="text" nameLabel="Nhập Mã Đã Được Gửi Tới Email Của Bạn !">
                        Mã Mời Có 6 Chữ Số
                    </InfoInput>
                    <div className="flex  mt-3 gap-2">
                        <Button onClick={() => {
                            sendVerifyAccount(navigation)
                        }}>
                            Xác Thực
                        </Button>
                        <Button onClick={createNewVerifyAccount} className="btn__re__send--verify disable">
                            <div >
                                <div>
                                    Nhận Xác Thực Mới
                                </div>
                                <div className="flex  gap-1 justify-center">
                                    (<span className="count__down--time">
                                        120
                                    </span>

                                    <span>
                                        s
                                    </span>
                                    )
                                </div>
                            </div>
                        </Button>
                    </div>
                </FrameLayout>
            </motion.div>
        </div>

}


export default VerifyAccount