
import { containerRegex } from "../../Regex/Manager Regex";
import { rulePasswords } from "./List Data";



class HandleDomSignUp {

    usename() {
        const input = document.getElementById(`signUp-usename`) as HTMLInputElement;
        const alert = document.querySelector(`.signUp-usename-alert`) as HTMLDivElement;
        if (containerRegex.username(input.value.trim())) {
            alert.classList.add("valid");
            alert.classList.remove("invalid")
            return true

        } else {
            alert.classList.remove("valid");
            alert.classList.add("invalid")
            return false
        }

    }
    email() {
        const input = document.getElementById(`signUp-email`) as HTMLInputElement;
        const alert = document.querySelector(`.signUp-email-alert`) as HTMLDivElement;
        if (containerRegex.email(input.value.trim())) {
            alert.classList.add("valid");
            alert.classList.remove("invalid")
            return true
        } else {
            alert.classList.remove("valid");
            alert.classList.add("invalid")
            return false
        }

    }
    password() {
        const input = document.getElementById(`signUp-password`) as HTMLInputElement;
        const alert: NodeListOf<HTMLLIElement> = document.querySelectorAll('.list-item');

        alert.forEach((element) => {
            const getName: string | any = element.getAttribute("data-name");
            const getRegex:any = rulePasswords[`${getName}`]
            if (getRegex.test(input.value.trim())) {
                element.classList.add("valid");
                element.classList.remove("invalid")
            } else {
                element.classList.remove("valid");
                element.classList.add("invalid")
            }

        })
        const checkPasswords: boolean = containerRegex.password(String(input.value))
        return checkPasswords
    }
    confirmPassword() {
        const input = document.getElementById(`signUp-confirmPassword`) as HTMLInputElement;
        const password = document.getElementById(`signUp-password`) as HTMLInputElement;
        const alert = document.querySelector(`.signUp-confirmPassword-alert`) as HTMLDivElement;

        if (password.value.trim() == input.value.trim() && input.value.trim().length > 7) {
            alert.classList.add("valid");
            alert.classList.remove("invalid")
            return true
        } else {
            alert.classList.remove("valid");
            alert.classList.add("invalid")
            return false
        }

    }
}





export default new HandleDomSignUp