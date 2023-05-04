let arrowContainer = document.querySelector(".arrow-container")
let Aclickcount = 0
let Sclickcount = 0
let x = 0
let arrow = document.querySelectorAll(".arrow")
let sidebar = document.querySelector(".side-menu")
let searchico = document.querySelector(".c3")
let inputS = document.querySelector(".search")
let Pbody = document.querySelector(".Pbody")
let switch1 = document.querySelector(".switch1")
let switch2 = document.querySelector(".switch2")
let canexec = true
let category = document.querySelectorAll(".category")
let InstaContainer = document.querySelectorAll(".r")
let serverContent = undefined
let column = document.querySelectorAll(".column")
window.location.href= 'https://sandbox.melhorenvio.com.br/oauth/authorize?client_id=3818&redirect_uri=https://pj-homework.cloud/&response_type=code&state=teste&scope=cart-read cart-write companies-read companies-write coupons-read coupons-write notifications-read orders-read products-read products-write purchases-read shipping-calculate shipping-cancel shipping-checkout shipping-companies shipping-generate shipping-preview shipping-print shipping-share shipping-tracking ecommerce-shipping transactions-read users-read users-write'
arrow.forEach(element => {
    arrowContainer.addEventListener("mouseenter", () => {
        element.style.animationName = "none"
    })
    arrowContainer.addEventListener("click", () => { 
        let currentTop = document.documentElement.scrollTop
        if (Aclickcount % 2 == 0) { 
            
            element.style.animationName = "none"
            element.style.left = "33vw"
            sidebar.style.width = "28vw"
            element.style.transform = "rotate(-135deg)"
            Pbody.style.filter = "blur(7px)"
            category.forEach(element => {
                element.style.opacity = "1" 
               setTimeout(()=>{ document.documentElement.scrollTop = currentTop}, 1)
            })
        }
        else {
            sidebar.style.width = "5vw"
            element.style.left = "6vw"
            element.style.transform = "rotate(45deg)"
            Pbody.style.filter = "none"
            category.forEach(element => {
                element.style.opacity = "0" 
            }) 
            setTimeout(()=>{ document.documentElement.scrollTop = currentTop}, 1)
        }
        setTimeout(() => { Aclickcount++ }, 20)
    })
})
searchico.addEventListener("click", () => {
    console.log(Sclickcount % 2 == 0)
    if (Sclickcount % 2 == 0) {
        searchico.style.transform = "translate(-10vw, -50% ) rotate(90deg)"
        inputS.style.display = "block"
        inputS.style.opacity = "0.6"
        inputS.style.animationName = "Show"
    } else {
        searchico.style.transform = "translate(-100%, -50%)"
        inputS.style.transition = "0.7s"
        inputS.style.opacity = "0"
        inputS.style.animationName = "none"
        setTimeout(() => { inputS.style.display = "none" }, 650)
    }
    Sclickcount++

})
switch1.addEventListener("click", () => {
    if (canexec) {
        canexec = false
        let p1 = document.querySelector(".p1")
        let p2 = document.querySelector(".p2")
        let p3 = document.querySelector(".p3")
        let p4 = document.querySelector(".p4")

        p1.className = p1.className.split(" ")[0] + " p2 home-photo"
        p2.className = p2.className.split(" ")[0] + " p3 home-photo"
        p3.className = p3.className.split(" ")[0] + " p4 home-photo"
        p4.className = p4.className.split(" ")[0] + " p1 home-photo"
        setTimeout(() => { canexec = true }, 600)
    }
})
switch2.addEventListener("click", () => {
    if (canexec) {
        canexec = false
        let p1 = document.querySelector(".p1")
        let p2 = document.querySelector(".p2")
        let p3 = document.querySelector(".p3")
        let p4 = document.querySelector(".p4")
        p1.className = p1.className.split(" ")[0] + " p4 home-photo"
        p2.className = p2.className.split(" ")[0] + " p1 home-photo"
        p3.className = p3.className.split(" ")[0] + " p2 home-photo"
        p4.className = p4.className.split(" ")[0] + " p3 home-photo"
        setTimeout(() => { canexec = true }, 600)
    }
})

function replaceTag(X) {
    let that = InstaContainer[X]
    let video = document.createElement('video');

    video.setAttribute('class', that.getAttribute('class'));
    video.innerHTML = `<source type="video/MP4"src=${serverContent[X].url}>`
    video.volume = 0.3
    video.loop = true
    while (that.firstChild) {
        video.appendChild(that.firstChild);
    }
    that.parentNode.replaceChild(video, that);
}

async function a() {
    let response = await fetch('https://testserver-lxpk.onrender.com/instaURLS')
    serverContent = await response.json()
    console.log(serverContent[x].type)
    for (x; x < 20; x++) {
        if (serverContent[x].type == "VIDEO") {
            replaceTag(x)
        } else {
            InstaContainer[x].setAttribute('src', serverContent[x].url)
        }
    }
    document.querySelectorAll("video").forEach(element => {
        console.log(element)
        element.addEventListener("mouseover", () => { element.play() })
        element.addEventListener("mouseout", () => { element.pause() })
    })
    document.querySelectorAll(".r").forEach(container => {
        let containerID = container.className.split(' ')[1]
        let thisColum = document.querySelector(`.N${Math.ceil(containerID / 5)}`)
        container.addEventListener("mouseout", () => {
            if (containerID % 5 == 0 && containerID != 0) {
                document.querySelector(`.N${Math.ceil(containerID / 5)}`).style.transform = "translateX(0px)"
            }
            container.style.margin = "10px"
            container.style.marginTop = "10px"
            document.querySelectorAll(".column").forEach(colum => {
                colum.style.margin = "10px"
            })
        }
        )
        container.addEventListener("mouseover", () => {
            if (containerID % 5 == 0 && containerID != 0) {
                thisColum.style.transform = "translateX(-110px)"
            }
            container.style.margin = "50px"
            container.style.marginTop = "10px"
            thisColum.style.margin = "30px"
        })
    })

} 
function getScroll(){
    
} 

a()


