document.addEventListener("DOMContentLoaded",function(){
    const pictures = document.querySelector(".pictures")
    const btnAll = document.querySelector(".btn-all")
    const btnShip = document.querySelector(".btn-ship")
    const btnSpaceman = document.querySelector(".btn-spaceman")
    const imgUser = document.querySelector(".img-user")

    imgUser.src = "../imgs/user.jpg"

    btnAll.addEventListener("click",createAllImgs)
    btnShip.addEventListener("click",createShipImgs)
    btnSpaceman.addEventListener("click",createSpacemanImgs)

    imgsList = [
        {
            categoria:"spaceman",
            url:"https://i.pinimg.com/564x/7d/9f/32/7d9f32927b16ffe2e6ac9725ba12b0d1.jpg",
        },
        {
            categoria:"spaceman",
            url:"https://i.pinimg.com/474x/d3/80/11/d38011e1660084c9250325bac26b12a4.jpg"
        },
        {
            name:"Saturno V",
            categoria:"ship",
            url:"https://i.pinimg.com/236x/dd/1d/6f/dd1d6f974f0da21ee05bf083a0ebbd38.jpg"
        },
        {
            categoria:"spaceman",
            url:"https://i.pinimg.com/236x/d4/65/e3/d465e300473d648efb9914f29cb68e17.jpg"
        },
        {
            categoria:"spaceman",
            url:"https://i.pinimg.com/236x/d6/c7/6f/d6c76fea72d3a68fce9746a53fd3c4cc.jpg"
        },
        {
            categoria:"spaceman",
            url:"https://i.pinimg.com/236x/1e/36/6a/1e366a3ed60784214c43a06ca388853f.jpg"
        },
        {   
            name:"Atlantis",
            categoria:"ship",
            url:"https://i.pinimg.com/564x/94/81/62/948162e70f09f0142b51d641724380c8.jpg"
        },
        {
            name:"Orion",
            categoria:"ship",
            url:"https://i.pinimg.com/564x/cc/c8/d6/ccc8d6b670da57fd924de76efd1be923.jpg"
        }
    ]

    function createAllImgs(){
        while (pictures.firstChild) {
            pictures.removeChild(pictures.firstChild)
        }

        for (let img of imgsList){
            const image = document.createElement("img")
            pictures.appendChild(image)
            image.src = img.url
            image.title = img.name
            image.alt = img.name
            image.className = "card"
        }
    }   

    createAllImgs()

    function createShipImgs() {
        while (pictures.firstChild) {
            pictures.removeChild(pictures.firstChild)
        }

        for (let img of imgsList){
            if (img.categoria === "ship") {
                const image = document.createElement("img")
                pictures.appendChild(image)
                image.src = img.url
                image.title = img.name
                image.alt = img.name
                image.className = "card"
            }
        }
    }
    
    function createSpacemanImgs() {
        while (pictures.firstChild) {
            pictures.removeChild(pictures.firstChild)
        }

        for (let img of imgsList) {
            if (img.categoria === "spaceman") {
                const image = document.createElement("img")
                pictures.appendChild(image)
                image.src = img.url
                image.title = img.name
                image.alt = img.name
            }
        }
    }
})