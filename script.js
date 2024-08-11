document.addEventListener("DOMContentLoaded",function(){
    const imgs = document.querySelectorAll(".card")

    imgs.addEventListener("click",expand)

    function expand() {
        imgs.forEach((img) => {
            img.classList.toggle("expand")
        })
    }
})