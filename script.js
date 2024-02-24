const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
})

function pageAnim() {
    var elemCon = document.querySelector(".elem-container")
    var fixed = document.querySelector(".fixed-image")

    elemCon.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })

    elemCon.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (value) {
        value.addEventListener("mouseenter", function () {
            var images = value.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${images})`
        })
    })

}

function swiperElem() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
    });
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}


function menuAnim() {
    var menu = document.querySelector(".nav h3")

    var full = document.querySelector(".fullscr")
    var navimg = document.querySelector(".nav img")
    var flag = 0;


    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        }
        else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })

}

function loaderAnim() {
    var loader = document.querySelector(".loader");

    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

pageAnim()
swiperElem()
menuAnim()
loaderAnim()

