const navMobile = document.querySelector('.nav-mobile__list');
const navBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');


const handleNav = () => {
    navMobile.classList.toggle('nav-mobile__list--active');
}

const shadowNav = () => {
    if(window.scrollY >= 300){
        console.log('yooo')
    }else{
        
    }
}


navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', shadowNav);