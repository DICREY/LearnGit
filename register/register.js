document.addEventListener("DOMContentLoaded",() => {
    const iconLock = document.querySelectorAll(".icon-lock")
    const inputPassword = document.querySelector(".input-password")
    const inputPasswordCon = document.querySelector(".input-password-con")
    const iconPass = document.querySelector(".i-lock-p")
    const iconPassCon = document.querySelector(".i-lock-p-c")

    iconLock.forEach((icon) => {
        icon.addEventListener("click", () => {
        const newName = "lock-alt"
        let changeName = icon.getAttribute("name") === newName ? "lock-open-alt"  : newName
        icon.setAttribute("name",changeName)
        if (icon.classList.contains(".i-lock-p")){
            const newType = "text"
            let changeType = inputPassword.getAttribute("type") === newType ? "password" : newType
            inputPassword.setAttribute("type",changeType)
        }
        })
    })
})