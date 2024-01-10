const navMobile = document.querySelector('.nav-mobile__list');
const navBtn = document.querySelector('.burger-btn');


const handleNav = () => {
    navMobile.classList.toggle('nav-mobile__list--active');
}

navBtn.addEventListener('click', handleNav);