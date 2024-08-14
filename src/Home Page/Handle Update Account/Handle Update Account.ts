
import { rulePasswords } from "../../Login/Handle Dom Sign Up/List Data";
import { containerRegex } from "../../Regex/Manager Regex";


class HandleDomUpdate {

    usename() {
        const input = document.getElementById(`home__page__info__username`) as HTMLDivElement;
        const alert = document.querySelector(`.home__page__alert--username`) as HTMLDivElement;

        if (containerRegex.username(input.innerHTML.trim())) {
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
        const input = document.getElementById(`home__page__info__email`) as HTMLDivElement;
        const alert = document.querySelector(`.home__page__alert--email`) as HTMLDivElement;
        if (containerRegex.email(input.innerHTML.trim())) {
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
        const input = document.getElementById(`home__page__info__password`) as HTMLDivElement;
        const alert: NodeListOf<HTMLLIElement> = document.querySelectorAll('.list-item');

        alert.forEach((element) => {
            const getName: RegExp | any = element.getAttribute("data-name");
            const getRegex: any = rulePasswords[getName]
            if (getRegex.test(input.innerHTML.trim())) {
                element.classList.add("valid");
                element.classList.remove("invalid")
            } else {
                element.classList.remove("valid");
                element.classList.add("invalid")
            }

        })
        const checkPasswords: boolean = containerRegex.password(String(input.innerHTML.trim()))
        return checkPasswords
    }

}





export default new HandleDomUpdate