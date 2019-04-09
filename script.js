let playButton = document.getElementById("play-btn");
let thumbNail = document.getElementById("thumbnail");
let autoPlay = "autoplay;";
let videoUrl = document.getElementById("process-video").getAttribute("src");
const ogUrl = videoUrl;
let closeBtn = document.getElementById("close-btn");

playButton.addEventListener("click", (e) => {
    playButton.setAttribute("class", "disappear");
    thumbNail.setAttribute("class", "disappear");
    videoUrl = ogUrl + "?autoplay=1";
    document.getElementById("process-video").setAttribute("src", videoUrl);
    closeBtn.setAttribute("class", "");
});

closeBtn.addEventListener("click", (e) => {
    playButton.setAttribute("class", "");
    thumbNail.setAttribute("class", "");
    document.getElementById("process-video").setAttribute("src", ogUrl);
    closeBtn.setAttribute("class", "disappear");
});

/*Slider */
let sliderList = document.querySelector("#testimonials ul");
let sliderItems = document.getElementsByClassName("slide-btn");

for (let i = 0, leftDis = 0; i < sliderItems.length; i++, leftDis -= 100) {
    const element = sliderItems[i];
    element.addEventListener("click", (e) => {
        sliderList.setAttribute("style", "left: " + leftDis + "% !important;");
        for (let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].classList.remove("active");
        }
        e.target.classList.add("active");
    });
}


/*Change nav color on scroll */

$(function() {
    $(document).scroll(function() {
        var $nav = $("#nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

/*Toggle nav bar */
const hamburger = document.querySelector(".hamburger i");
const navBar = document.querySelector(".navigator .main-nav");
const mainNav = document.querySelector(".navigator");
hamburger.addEventListener("click", (e) => {
    if (navBar.classList.contains("expand")) {
        navBar.classList.remove("expand");
        mainNav.classList.remove("scrolled");
    } else {
        navBar.classList.add("expand");
        mainNav.classList.add("scrolled");
    }
});