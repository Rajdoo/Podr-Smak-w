const navMobile = document.querySelector('.nav-mobile__list');
const navBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
const footerYear = document.querySelector('.footer__year');


const handleNav = () => {
    navMobile.classList.toggle('nav-mobile__list--active');
}

const shadowNav = () => {
    if(window.scrollY >= 300){
        console.log('yooo')
    }else{
        
    }
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.textContent = year;
}


navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', shadowNav);

handleCurrentYear();