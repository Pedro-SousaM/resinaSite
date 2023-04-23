let arrowContainer = document.querySelector(".arrow-container")
let Aclickcount = 0
let Sclickcount = 0
let arrow = document.querySelectorAll(".arrow")
let sidebar = document.querySelector(".side-menu")
let searchico = document.querySelector(".c3")
let inputS = document.querySelector(".search")
let Pbody = document.querySelector(".Pbody")
let switch1 = document.querySelector(".switch1")
let switch2 = document.querySelector(".switch2")
let canexec = true
let category = document.querySelectorAll(".category")
arrow.forEach(element => {
    arrowContainer.addEventListener("mouseenter", () => {
        element.style.animationName = "none"
    })
    arrowContainer.addEventListener("click", () => {
        if (Aclickcount % 2 == 0) {
            element.style.animationName = "none"
            element.style.left = "33vw"
            sidebar.style.width = "28vw"
            element.style.transform = "rotate(-135deg)"
            Pbody.style.filter = "blur(7px)"
            category.forEach(element => {
                element.style.opacity = "1"
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

