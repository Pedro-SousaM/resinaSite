
let arrowContainer = document.querySelector(".arrow-container")
let Aclickcount = 0
let Sclickcount = 0
let x = 0
let arrow = document.querySelectorAll(".arrow")
let sidebar = document.querySelector(".side-menu")
let searchico = document.querySelector(".c3")
let inputS = document.querySelector(".search")
let Pbody = document.querySelector(".Pbody")
let photos = document.querySelectorAll(".home-photo")
let switch1 = document.querySelector(".switch1")
let switch2 = document.querySelector(".switch2")
let canexec = true
let category = document.querySelectorAll(".category")
let InstaContainer = document.querySelectorAll(".r")
let serverContent = undefined
let column = document.querySelectorAll(".column")
let freteText = document.querySelector(".freteText")
let freteCheck = document.querySelector(".freteCheck")
let checkbox = document.querySelector('.checkingbox')
let resposta = document.querySelector(".resposta")
let pets = document.querySelector(".pets")
let columcount = 0
let videocount = 0
let mobileFix = 20
let mobileFixNumber = 5 

document.querySelectorAll(".refreshbutton").forEach(button=>button.addEventListener("click",()=>{location.reload()})) 
if (window.matchMedia("(max-width: 950px)").matches) {
    mobileFixNumber = 3
} 
//end variables 
//arrows scripts
arrow.forEach(element => {
    arrowContainer.addEventListener("mouseenter", () => {
        element.style.animationName = "none"
    })
    arrowContainer.addEventListener("click", () => {
        let currentTop = document.documentElement.scrollTop
        if (Aclickcount % 2 == 0) {

            element.style.animationName = "none"
            if (window.matchMedia("(max-width: 950px)").matches) {
                element.style.left = "73vw"
                sidebar.style.width = "68vw"
                category.forEach(category => category.style.fontSize = "9.7vw")
            } else {
                element.style.left = "33vw"
                sidebar.style.width = "28vw"
                category.forEach(category => category.style.fontSize = "3.3vw")
            }

            element.style.transform = "rotate(-135deg)"
            Pbody.style.filter = "blur(7px)"
            category.forEach(element => {
                element.style.opacity = "1"
                setTimeout(() => { document.documentElement.scrollTop = currentTop }, 1)
                element.addEventListener('click', () => { document.querySelector("html").style.scrollBehavior = 'none', document.documentElement.scrollTop = 0 })
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
            setTimeout(() => { document.documentElement.scrollTop = currentTop }, 1)
        }
        setTimeout(() => { Aclickcount++ }, 20)
    })
})
/* searchico.addEventListener("click", () => {
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

})*/
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
//photo script 
photos.forEach(photo => {
    photo.addEventListener("mouseover", () => {
        let px950 = window.matchMedia("(max-width: 950px)").matches
        if (px950) {
            photo.style.transform = "translate(-28.4vmax, 51vmax)"
        }
    })
    photo.addEventListener("mouseout", () => {
        let px950 = window.matchMedia("(max-width: 950px)").matches
        if (px950) {
            photo.style.transform = "translate(-16vmax, 51vmax)"
        }
    })
})
//midia animation
function columanimation(home) {
    let px950 = window.matchMedia("(max-width: 950px)").matches
    console.log(document.querySelectorAll("video"))
    document.querySelectorAll("video").forEach(element => {
        let current = 0
        if (!home) {
            let check = setInterval(() => {
                if (element.duration != NaN) {
                    element.currentTime = parseFloat(element.duration) - 1
                    clearInterval(check)
                    console.log(element.duration, element.currentTime)
                }
            }, 100)
        }
        element.addEventListener("mouseover", () => {
            element.play()
            element.currentTime = current
        }
        )
        element.addEventListener("mouseout", () => {
            element.pause()
            current = element.currentTime
            setTimeout(() => { element.currentTime = parseInt(element.duration) - 1 }, 10)
        })
    })
    document.querySelectorAll(".r").forEach(container => {
        let containerID = container.className.split(' ')[1]
        let thisColum = document.querySelector(`.N${Math.ceil(containerID / mobileFixNumber)}`)
        container.addEventListener("mouseout", () => {
            if (containerID % mobileFixNumber == 0 && containerID != 0) {
                document.querySelector(`.N${Math.ceil(containerID / mobileFixNumber)}`).style.transform = "translateX(0px)"
            }
            if (px950) {
                container.style.margin = "2px"
                container.style.marginTop = "0px"
            } else {
                container.style.margin = "10px"
                container.style.marginTop = "10px"
            }
            document.querySelectorAll(".column").forEach(colum => {
                if (px950) {
                    colum.style.margin = "2px"
                    colum.style.marginTop = "1px"
                }
                else { colum.style.margin = "13px" }
            })
        }
        )
        container.addEventListener("mouseover", () => {
            console.log(containerID)
            if (containerID % mobileFixNumber == 0 && containerID != 0) {
                if (px950) { thisColum.style.transform = "translateX(-10vw)" } else {
                    thisColum.style.transform = "translateX(-110px)"
                }
            }
            if (px950) {
                container.style.margin = "40px"
                container.style.marginTop = "0px"
                thisColum.style.marginBottom = "20px"
                thisColum.style.marginTop = "20px"
            } else {
                container.style.margin = "50px"
                container.style.marginTop = "10px"
                thisColum.style.margin = "50px"
            }

        })
    })
    document.querySelectorAll("video").forEach(element => {
        element.first = true
        element.current = 0
        element.addEventListener("mouseover", () => {
            element.play()
            element.currentTime = element.current
            element.first = false
        }
        )
        element.addEventListener("mouseout", () => {
            element.pause()
            element.current = element.currentTime
            element.currentTime = parseInt(element.duration) - 1
        })
    })
}
function setBottom(top) {
    document.querySelector(".bottom-container").style.top = top + "vh"
}
//page builders  
async function buildcontainers() {
    columcount = 0
    let containerIMG = document.querySelector(".news")
    containerIMG.innerHTML = ""
    for (x = 0; x < 15; x++) {
        if (x % 3 == 0) {
            columcount++
            containerIMG.innerHTML += `<div class="column N${columcount}">`
            document.querySelector(`.N${columcount}`).innerHTML += `<img class="r ${x + 1}">`
        } else {
            document.querySelector(`.N${columcount}`).innerHTML += `<img class="r ${x + 1}">`
        }
    }
}
//build containers
if (window.matchMedia("(max-width: 950px)").matches) {
    mobileFix = 15
    buildcontainers()

}
async function getCategory(endpoint) {
    let response = await axios.get('https://testserver-lxpk.onrender.com/' + endpoint)
    serverContent = response.data
    console.log(response)
    columcount = 0
    Pbody.innerHTML = `<div class="news">`
    let containerIMG = document.querySelector(".news") 
    containerIMG.style.top = 4 + "vh" 
    containerIMG.style.height = `${40}vh`
    for (x = 0; x < response.data.length; x++) {
        if (x % mobileFixNumber == 0) {
            columcount++
            containerIMG.innerHTML += `<div class="column N${columcount}">`
            document.querySelector(`.N${columcount}`).innerHTML += `<img class="r ${x + 1}">`
            replaceTag(x)
        } else {
            document.querySelector(`.N${columcount}`).innerHTML += `<img class="r ${x + 1}">`
            replaceTag(x)
        }
        if (window.matchMedia("(max-width: 950px)").matches) {
            document.querySelectorAll(".column").forEach(column => column.style.height = "15vh")
            document.querySelectorAll(".r").forEach((column) => { column.style.height = "15vh", column.style.width = "29vw" })
        }
    }
    columanimation(false)
}

pets.addEventListener("click", () => {
    getCategory("cats")
})
//videotag
function replaceTag(X) {
    InstaContainer = document.querySelectorAll(".r")
    let that = InstaContainer[X]
    console.log(that)
    let video = document.createElement('video');
    video.setAttribute('class', that.getAttribute('class'));
    video.innerHTML = `<source type="video/MP4"src=${serverContent[X].url}>`
    video.volume = 0.1
    video.loop = true
    video.preload = "auto"
    while (that.firstChild) {
        video.appendChild(that.firstChild);
    }
    that.parentNode.replaceChild(video, that);

}

//frete function
function freteCalc() {
    axios.get('https://testserver-lxpk.onrender.com/frete', { params: { frete: freteText.value, giga: checkbox.checked } })
        .then((response) => {
            console.log(response.data)
            let responseType = response.data[4]
            if (checkbox.checked) { responseType = response.data[0] }
            resposta.innerHTML = `O valor do frete é ${responseType.price}R$, com um prazo de entrega de ${responseType.delivery_range.min}-${responseType.delivery_range.max} dias`

        })
}
freteCheck.addEventListener('click', freteCalc)
//insta function
async function a() {
    InstaContainer = document.querySelectorAll(".r")
    let response = await fetch('https://testserver-lxpk.onrender.com/instaURLS')
    serverContent = await response.json()
    for (x = 0; x < mobileFix; x++) {
        if (serverContent[x].type == "VIDEO") {
            replaceTag(x)
        } else {
            InstaContainer[x].setAttribute('src', serverContent[x].url)
        }
    }
    columanimation(false)
}
a()






