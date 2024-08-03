import { containerRegex } from "../Regex/Manager Regex"



const handleForgetPasswords = (navigation: (string: string) => void) => {



    const email = document.getElementById("forgoss__password") as HTMLInputElement
    const alertEmail = document.querySelector(".forgoss__password-alert") as HTMLDivElement

    if (containerRegex.email(email.value.trim())) {
        
    } else {
        alertEmail.classList.remove("valid");
        alertEmail.classList.add("invalid")
        navigation('/')
    }
}





export {
    handleForgetPasswords
}