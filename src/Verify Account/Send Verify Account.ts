import axios from "axios";
import { domainBE } from "../URL";




const sendVerifyAccount = (navigation: (string: string) => void) => {
    const verifyAccount = (document.getElementById("verify__account__code") as HTMLInputElement);
    const regex = /^\d{6}$/;
    const alert = document.querySelector(".verify__account__code-alert")
    if (regex.test(verifyAccount.value.trim())) {
        axios.put(`${domainBE.trim()}/verify-account`, {
            verificationCode: verifyAccount.value
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true // Đảm bảo r��ng cookie được gửi cùng với yêu cầu
        }).then(response => {
            if (response.data.valid) {
                navigation("/")
            } else {
                if (alert) {
                    alert.classList.remove("valid");
                    alert.classList.add("invalid");
                    alert.innerHTML = response.data.message
                }
            }
        })
    } else {
        if (alert) {
            alert.classList.remove("valid");
            alert.classList.add("invalid");
            return alert.innerHTML = `mã xác thực phải có ít nhất 6 số`
        }

    }
}

const createNewVerifyAccount = () => {

    const btnReSendVerifyAccount = document.querySelector(".btn__re__send--verify")

    if (!btnReSendVerifyAccount?.classList.contains("disable")) {
        axios.post(`${domainBE.trim()}/re-new-verify`, {}, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true // Đảm bảo r��ng cookie được gửi cùng với yêu cầu
        }).then(() => {
            countDownCreateNewVerifyAccount()
            btnReSendVerifyAccount?.classList.add("disable");
        })

    }
}

const countDownCreateNewVerifyAccount = () => {
    let time = 120; // Initialize time to 120 seconds
    const currentTime = document.querySelector(".count__down--time");

    const countDown = setInterval(() => {
        time--;
        if (currentTime) {
            currentTime.innerHTML = `${time}`;
        }
        if (time === 0) {
            clearCountDown();
        }
    }, 1000);

    function clearCountDown() {
        const btnReSendVerifyAccount = document.querySelector(".btn__re__send--verify");
        btnReSendVerifyAccount?.classList.remove("disable");
        clearInterval(countDown);
    }
};


export { sendVerifyAccount, createNewVerifyAccount, countDownCreateNewVerifyAccount }