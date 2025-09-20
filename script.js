let links = document.querySelectorAll(".nav-link")
let nav = document.querySelector(".nav-links")
nav.addEventListener("click", function (event) {
    if (!event.target.classList.contains("nav-link")) return

    document.querySelector(".nav-link.active")?.classList.remove("active");

    event.target.classList.add("active")




})




window.onresize = function () {
    console.log("resize")
}

let classlink = "[href='#main']"

window.onscroll = function () {
    let h = document.documentElement.clientHeight;
    console.log(h)

    if (window.scrollY > h * 4) {
        classlink = "[href='#comments']"
    }
    else if (window.scrollY > h * 3) {
        classlink = "[href='#works']"
    }
    else if (window.scrollY > h * 2) {
        classlink = "[href='#skills']"
    }
    else if (window.scrollY > h) {
        classlink = "[href='#about']"
    }
    else {
        classlink = "[href='#main']"
    }
    let activeBtn = document.querySelector(".nav-link.active")
    let newActiveBtn = document.querySelector(classlink);
    if (!newActiveBtn.classList.contains("active")) {
        newActiveBtn.classList.add("active")
        activeBtn.classList.remove("active")
    }
}