import axios from "axios";
import { containerRegex } from "../Regex/Manager Regex";
import { obEnv } from "../Evironment/Evironment";





const handleSignIn = (navigation: (string: string) => void) => {
    const email = document.getElementById("login__email") as HTMLInputElement;
    const password = document.getElementById("login__password") as HTMLInputElement;

    if (containerRegex.email(email.value.trim()) && containerRegex.password(password.value.trim())) {
        axios.post(obEnv.VITE_DOMAIN_BE + "/login", {
            email: email.value.trim(),
            password: password.value.trim()
        }, {
            withCredentials: true
        }).then((res) => {
            if (res.data.valid) {
                // Handle successful login (logic not provided in the snippet)
                navigation("/")
            } else {
                const alertSignIn = document.querySelector('.login__email-alert') as HTMLDivElement;
                if (alertSignIn) {
                    alertSignIn.classList.remove("valid");
                    alertSignIn.classList.add("invalid");
                    alertSignIn.classList.add("alert-signIn");
                    alertSignIn.innerHTML = res.data.message;
                } else {
                    console.error("Login alert element not found!"); // Handle missing element
                }
            }
        });
    } else {
        const alertSignIn = document.querySelector('.login__email-alert');
        alertSignIn?.classList.remove("valid");
        alertSignIn?.classList.add("invalid");
        alertSignIn?.classList.add("alert-signIn");

    }
}


export { handleSignIn } 