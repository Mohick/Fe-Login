import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCallInfoUser } from "../Store/Repository User";
import FrameLayout from "../Model CSS/Frame Layout/Frame Layout";
import Title from "../Model CSS/Title/Title";
import Button from "../Model CSS/Button/Button";
import { handleButtonEditAccount, handleBuuttonLogOut } from "./Handle Button Home Page";
import Label from "../Model CSS/Info Input/Label/Label";
import ListUl from "../Model CSS/List Ul/List Ul";
import { listData } from "../Login/Handle Dom Sign Up/List Data";
import "./Home Page.css"
import InfoInput from "../Model CSS/Info Input/Info Input";
import EndLoading from "../Loading/End Loading";
import InitLoading from "../Loading/Start Loading";
const HomePage = () => {
    const navigation = useNavigate();
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


        if (!infoUser.haveData) return;


        switch (true) {
            case !infoUser.login:
                navigation("/sign-in");

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
    return <div className="flex justify-center items-center min-h-screen min-w-screen">
        <EndLoading />
        <FrameLayout className="w-[90%] sm:w-[600px]  flex flex-col gap-2">
            <Title>
                Trang Chủ
            </Title>

            <div className="relative">
                <Label>Tên Người Dùng</Label>
                <div className="home__page__alert--username valid text-xs">
                    Vui lòng nhập 6-30 ký tự, chỉ gồm chữ cái, số, dấu chấm hoặc gạch dưới .
                </div>
                <div id="home__page__info__username" className="text-base  outline-none min-h-[1.5rem] max-h-[1.5rem]">
                    {infoUser.username}
                </div>
                <div className="home__page__info--unline">

                </div>
            </div>
            <div className="relative">
                <Label>email</Label>
                <div className="home__page__alert--email valid text-xs">
                    Vui lòng Nhập Email Mới Hoặc Dữ Nguyên !
                </div>
                <div id="home__page__info__email" className="text-base outline-none min-h-[1.5rem] max-h-[1.5rem]">
                    {infoUser.email}
                </div>
                <div className="home__page__info--unline ">

                </div>
            </div>
            <div className="relative">
                <Label>Mật Khẩu </Label>
                <div className="home__page__alert--password text-yellow-500 text-xs">
                    Vui lòng Nhập Mật Khẩu Mới Hoặc Dữ Nguyên !
                </div>
                <div id="home__page__info__password" className="text-base outline-none min-h-[1.5rem] max-h-[1.5rem]">
                    {infoUser.password}
                </div>
                <div className="home__page__info--unline">

                </div>
            </div>
            <div id="home__page__edit" className="relative ">
                <ListUl className="grid grid-cols-1 sm:grid-cols-2 justify-between mt-2 " classItems="list-item" listData={listData} />
                <div className="mt-2">
                    <InfoInput id="home__page__current__password" typeInput="password" nameLabel="Mật Khẩu Hiện Tại">
                        Nhập Mật Khẩu Hiện Tại Của Bạn !
                    </InfoInput>

                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 gap-3">
                <Button name="disable" className="button__edit" onClick={() => {
                    handleButtonEditAccount(
                        infoUser.username,
                        infoUser.email,
                        infoUser.password
                    )
                }}>
                    Chỉnh Sửa
                </Button>
                <Button className="button__logout" name="logout" onClick={() => {
                    handleBuuttonLogOut(navigation,
                        infoUser.username,
                        infoUser.email,
                        infoUser.password
                    )
                }}>
                    Đăng Xuất
                </Button>
            </div>
        </FrameLayout>
    </div>;
};

export default HomePage;
