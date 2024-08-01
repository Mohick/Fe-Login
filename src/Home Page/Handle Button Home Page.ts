import axios from "axios"
import { checkFormInputFromUser } from "../Check Form Input Create Account/Check Form Input"
import HandleDomUpdate from "./Handle Update Account/Handle Update Account"
import { domainBE } from "../URL"


const handleButtonEditAccount = (oldUsename: string, oldEmail: string, oldPassword: string) => {
    const tagButton = document.querySelector(".button__edit") as HTMLButtonElement
    const tagButtonLogOut = document.querySelector(".button__logout") as HTMLButtonElement
    const divUsername = document.getElementById("home__page__info__username") as HTMLDivElement
    const divEmail = document.getElementById("home__page__info__email") as HTMLDivElement
    const divPassword = document.getElementById("home__page__info__password") as HTMLDivElement
    const moreInFoEdit = document.getElementById('home__page__edit')
    const alertUsername = document.querySelector('.home__page__alert--username')
    const alertEmail = document.querySelector('.home__page__alert--email')
    const alertPassword = document.querySelector(".home__page__alert--password")
    const alertCurrentPassword = document.querySelector('.home__page__current__password-alert')

    const unlineTextInput: NodeListOf<HTMLElement> = document.querySelectorAll(".home__page__info--unline")
    switch (tagButton.name) {
        case "disable":
            divUsername.setAttribute("contentEditable", "true")
            divEmail.setAttribute("contentEditable", "true")
            divPassword.setAttribute("contentEditable", "true")

            divPassword.innerHTML = ``

            tagButton.name = "active"
            tagButton.innerHTML = `Hủy`

            tagButtonLogOut.innerHTML = `Thay Đổi`
            tagButtonLogOut.name = "exchange"

            alertUsername?.classList.add("active--alert")
            alertEmail?.classList.add("active--alert")
            alertPassword?.classList.add("active--alert")
            alertCurrentPassword?.classList.add("active--alert")

            unlineTextInput.forEach(textInput => {
                textInput.classList.add("home__page__info--unline--set--width")
            })
            moreInFoEdit?.classList.add("home__page__edit--active")



            break;
        case "active":
            divUsername.removeAttribute("contentEditable")
            divEmail.removeAttribute("contentEditable")
            divPassword.removeAttribute("contentEditable")


            tagButton.name = "disable"

            tagButtonLogOut.innerHTML = `Đăng Xuất`
            tagButton.innerHTML = `Chinh Sửa`

            divUsername.innerHTML = `${oldUsename}`
            divEmail.innerHTML = `${oldEmail}`
            divPassword.innerHTML = `${oldPassword}`

            alertUsername?.classList.remove("active--alert")
            alertEmail?.classList.remove("active--alert")
            alertPassword?.classList.remove("active--alert")
            alertCurrentPassword?.classList.remove("active--alert")


            const alertRulePassword: NodeListOf<HTMLLIElement> = document.querySelectorAll('.list-item');

            alertRulePassword.forEach((element) => {
                element.classList.remove("invalid")
                element.classList.remove("valid")
            })
            unlineTextInput.forEach(textInput => {
                textInput.classList.remove("home__page__info--unline--set--width")
            })
            moreInFoEdit?.classList.remove("home__page__edit--active")
            break;

        default:
            // Không cần điều hướng, người dùng đã đăng nhập và xác minh
            tagButton.innerHTML = `Chinh Sửa`
            tagButton.name = "disable"

            tagButtonLogOut.innerHTML = `Đăng Xuất`
            tagButtonLogOut.name = "logout"
            break;
    }
}

const handleBuuttonLogOut = (navgation: (str: string) => void, oldUsename: string, oldEmail: string, oldPassword: string) => {

    const tagButtonLogOut = document.querySelector(".button__logout") as HTMLButtonElement
    const tagButton = document.querySelector(".button__edit") as HTMLButtonElement




    switch (tagButtonLogOut.name) {
        case "logout":
            navgation("/")
            break;
        case "exchange":
            const divCurrentPassword = document.getElementById("home__page__current__password") as HTMLInputElement
            const alertCurrentPassword = document.querySelector('.home__page__current__password-alert') as HTMLDivElement

            if (checkFormInputFromUser.password(divCurrentPassword.value.trim()).valid) {
                const divUsername = document.getElementById("home__page__info__username") as HTMLDivElement
                const divEmail = document.getElementById("home__page__info__email") as HTMLDivElement
                const divPassword = document.getElementById("home__page__info__password") as HTMLDivElement
                if (divPassword.innerHTML.trim().length > 0) {
                    if (HandleDomUpdate.usename() && HandleDomUpdate.email() && HandleDomUpdate.password()) {
                        axios.put(domainBE + "/update-account", {
                            newUsername: divUsername.innerHTML.trim(),
                            newEmail: divEmail.innerHTML.trim(),
                            newPassword: divPassword.innerHTML.trim(),
                            currentPassword: divCurrentPassword.value.trim()
                        }, {
                            withCredentials: true
                        }).then(response => {
                            const res = response.data
                            console.log(res.valid);

                            if (res.valid) {
                                navgation("/")
                                handleButtonEditAccount(
                                    oldUsename,
                                    oldEmail,
                                    oldPassword
                                )
                            } else {
                                alertCurrentPassword.innerHTML = res.message
                            }
                        })

                    }
                } else {
                    const alertRulePassword: NodeListOf<HTMLLIElement> = document.querySelectorAll('.list-item');
                    alertRulePassword.forEach((element) => {
                        element.classList.remove("invalid")
                        element.classList.remove("valid")
                    })
                    if (HandleDomUpdate.usename() && HandleDomUpdate.email()) {
                        if (divUsername.innerHTML.trim() !== oldUsename || divEmail.innerHTML.trim() !== oldEmail) {
                            axios.put(domainBE + "/update-account", {
                                newUsername: divUsername.innerHTML.trim(),
                                newEmail: divEmail.innerHTML.trim(),
                                newPassword: divPassword.innerHTML.trim(),
                                currentPassword: divCurrentPassword.value.trim()
                            }, {
                                withCredentials: true
                            }).then(response => {
                                const res = response.data
                                console.log(res.valid);
                                
                                if (res.valid) {
                                    navgation("/")
                                    handleButtonEditAccount(
                                        oldUsename,
                                        oldEmail,
                                        oldPassword
                                    )
                                } else {
                                    alertCurrentPassword.innerHTML = res.message
                                }
                            })
                            tagButtonLogOut.innerHTML = `Đăng Xuất`
                            tagButtonLogOut.name = "logout"
                            tagButton.innerHTML = `Chinh Sửa`
                            tagButton.name = "disable"
                            divUsername.removeAttribute("contentEditable")
                            divEmail.removeAttribute("contentEditable")
                            divPassword.removeAttribute("contentEditable")

                           
                        }
                    }
                }
            } else {
                
                if (alertCurrentPassword) return alertCurrentPassword.classList.add("invalid")
            }
            break;

        default:
            // Không cần điều hướng, người dùng đã đăng nhập và xác minh
            tagButton.innerHTML = `Chinh Sửa`
            tagButton.name = "disable"

            tagButtonLogOut.innerHTML = `Đăng Xuất`
            tagButtonLogOut.name = "logout"
            break;
    }
}


export { handleButtonEditAccount, handleBuuttonLogOut }