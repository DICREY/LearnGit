document.addEventListener("DOMContentLoaded",() => {
    const iconLock = document.querySelector(".i-lock")
    const inputContrasena = document.querySelector(".contrasena")
    const inputCorreo = document.querySelector(".correo")
    const btnIngresar = document.querySelector(".ingresar")

    iconLock.addEventListener("click",viewPassword)

    function viewPassword(){
        const NewName = "bx bxs-lock-open"
        let changeName = iconLock.className === NewName ? "bx bxs-lock" : NewName
        iconLock.className = changeName
        
        let type = inputContrasena.getAttribute("type")
        let changePassword = type === "password" ? "text" : "password"
        inputContrasena.setAttribute("type",changePassword)
    }

    btnIngresar.addEventListener("click",() => {
        infoUser = [
            {
                correo: inputCorreo.value,
                contrasena: inputContrasena.value
            }
        ]
        for (let i of infoUser){
            alert(i.correo + "\n" + i.contrasena)
        }
    })
})