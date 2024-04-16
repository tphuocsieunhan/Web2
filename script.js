const header = document.querySelector("header")
window.addEventListener("scroll", function () {
    x = window.pageYOffset
    if (x > 0) {
        header.classList.add("sticky")
    }
    else {
        header.classList.remove("sticky")
    }
})
const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector('.aspect-ratio-169')
const dotItem = document.querySelectorAll(".dot")
let imgNuber = imgPosition.length
let index = 0
//console.log(imgPosition)
imgPosition.forEach(function (image, index) {
    image.style.left = index * 100 + "%"
    dotItem[index].addEventListener("click", function () {
    })
})
function imgSlide() {
    index++;
    console.log(index)
    if (index >= imgNuber) { index = 0 }
    slider(index)
}
function slider(index) {
    imgContainer.style.left = "-" + index * 100 + "%"
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgSlide, 5000)
//scroll button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// -Menu-item-
const top = document.querySelector(".top")
window.addEventListener("scroll", function () {
    const X = this.pageYOffset;
    if (x > 1) { top.classList.add("active") }
    else {
        top.classList.add("active")
    }
})
//menu-slidebar
// Lấy ra phần tử button để toggle menu
const menuToggle = document.getElementById('menu-toggle');

// Lắng nghe sự kiện click trên button
menuToggle.addEventListener('click', function() {
    // Lấy ra tất cả các menu con
    const subMenus = document.querySelectorAll('.cartegory-left ul ul');

    // Duyệt qua từng menu con và toggle lớp CSS 'active'
    subMenus.forEach(function(subMenu) {
        subMenu.classList.toggle('active');
    });
});
