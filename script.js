document.addEventListener("DOMContentLoaded",function(){
    const pictures = document.querySelector(".pictures")


    function createImgs(){
        const imgsList = [
            {
                url:"https://i.pinimg.com/564x/7d/9f/32/7d9f32927b16ffe2e6ac9725ba12b0d1.jpg",
            },
            {
                url:"https://i.pinimg.com/474x/d3/80/11/d38011e1660084c9250325bac26b12a4.jpg"
            },
            {
                url:"https://i.pinimg.com/236x/dd/1d/6f/dd1d6f974f0da21ee05bf083a0ebbd38.jpg"
            },
            {
                url:"https://i.pinimg.com/236x/d4/65/e3/d465e300473d648efb9914f29cb68e17.jpg"
            },
            {
        
                url:"https://i.pinimg.com/236x/d6/c7/6f/d6c76fea72d3a68fce9746a53fd3c4cc.jpg"
            },
            {
                url:"https://i.pinimg.com/236x/1e/36/6a/1e366a3ed60784214c43a06ca388853f.jpg"
            }
        ]
        for (img of imgsList){
            const image = document.createElement("img")
            pictures.appendChild(image)
            image.setAttribute("src",img.url)
            image.className = "card"
            image.addEventListener("click",expand)
            function expand(){
                image.classList.toggle("expand")
            }
        }
    }   
    createImgs()
    
})