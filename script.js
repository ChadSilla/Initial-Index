let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

window.addEventListener('load', adjustProfileStyles);
window.addEventListener('resize', adjustProfileStyles);

document.addEventListener("mouseup", function (e) {
    var subMenu = document.getElementById("subMenu");
    if (!subMenu.contains(e.target)) {
      subMenu.classList.remove("open-menu");
    }
  });
  
  document.addEventListener("mouseup", function (e) {
    var subMenu = document.getElementById("subMenu");
    if (!subMenu.contains(e.target)) {
      subMenu.classList.remove("open-menu");
    }
  });
  
  function toggleMenu() {
    var subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("open-menu");
  }

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 100, 'swing', function () {
            window.location.hash = target;
        });
    });
});
document.addEventListener("DOMContentLoaded", function(){
    updateYear();
    const changeColorButton = document.getElementById("changeColorButton");
    changeColorButton.addEventListener("click", changeColor);
});
function updateYear(){
    const yearElement = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

function changeColor() {
    var footer = document.getElementById('footer')
    footer.style.backgroundColor = getRandomColor();
}

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 1)];
    }
    return color;

}


function scrollToContent() {
    const contactElement = document.getElementById('contact');
    contactElement.classList.add('fade-in');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactElement.classList.add('fade-in');
        } else {
          contactElement.classList.remove('fade-in');
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    observer.observe(contactElement);
  }
