let lastScrollTop = 0
const navbar = document.getElementById("navbar")
let scrollThreshold = 300
const resetThreshold = 500

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        navbar.style.transform = "translateY(-150%)"

        scrollThreshold = scrollTop + 1000
    } else if (scrollTop < lastScrollTop) {
        navbar.style.transform = "translateY(0)"

        if (scrollTop < resetThreshold) {
            scrollThreshold = 300
        } else {
            scrollThreshold = scrollTop + 100
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
})