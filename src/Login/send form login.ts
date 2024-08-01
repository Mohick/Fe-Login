import axios from "axios";
import HandleDomSignUp from "./Handle Dom Sign Up/Handle Dom Sign Up";
import { domainBE } from "../URL";



const sendFormSignup = (navigation: any) => {
    const email = document.getElementById(`signUp-email`) as HTMLInputElement;
    const password = document.getElementById(`signUp-password`) as HTMLInputElement;
    const username = document.getElementById(`signUp-usename`) as HTMLInputElement;

    if (
        HandleDomSignUp.usename() &&
        HandleDomSignUp.email() &&
        HandleDomSignUp.password() &&
        HandleDomSignUp.confirmPassword()
    ) {

        const dataFormUser = {
            email: email.value.trim(),
            password: password.value.trim(),
            username: username.value.trim() // corrected 'usename' to 'username'
        };

        axios?.post(domainBE + '/createUser', dataFormUser, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true // Đảm bảo rằng cookie được gửi cùng với yêu cầu
        }).then(response => {
            const res = response.data
            if (res.valid) {
                navigation("/");
            } else {
                const alert = document.querySelector(`.signUp-email-alert`) as HTMLDivElement;
                alert ? alert.innerHTML = res.message : undefined
                alert.classList.remove("valid");
                alert.classList.add("invalid")
                return
            }
        }).catch((error) => {
            console.error("There was an error creating the user!", error);
        });
    }


}

export { sendFormSignup };
