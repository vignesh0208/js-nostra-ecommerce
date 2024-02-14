const openSideNavMenu = document.getElementById('open-side-navbar');
const closeSideNav = document.getElementById('close-side-nav');
const sideNavbar = document.getElementById('side-navbar');
const sliderImage = document.getElementById('image-slider');
const sliderLeft = document.getElementById('image-slider-left-activate');
const sliderRight = document.getElementById('image-slider-right-activate');
var sliderDuration = 0;

// Side Navigation Bar
openSideNavMenu.addEventListener('click', function () {
  sideNavbar.style.transform = 'translateX(0)';
});

closeSideNav.addEventListener('click', () => {
  sideNavbar.style.transform = 'translateX(-500px)';
});

// Image Silder
sliderRight.addEventListener('click', function () {
  sliderDuration = sliderDuration + 100;
  if (sliderDuration > 100) {
    sliderDuration = 0;
    sliderImage.style.marginLeft = 0;
  } else {
    sliderImage.style.marginLeft = '-' + sliderDuration + 'vw';
  }
});

sliderLeft.addEventListener('click', function () {
  if (sliderDuration == 0) {
    sliderDuration = 100;
    sliderImage.style.marginLeft = '-' + sliderDuration + 'vw';
  } else {
    sliderDuration = sliderDuration - 100;
    sliderImage.style.marginLeft = '-' + sliderDuration + 'vw';
  }
});
