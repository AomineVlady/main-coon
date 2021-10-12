document.querySelectorAll('.accordion-button').forEach(item=>{
    item.addEventListener('click', function(){
        this.classList.toggle('accordion-button--active');
    });
});

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu-list')
let menuOpen = false;
burger.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!menuOpen){
        burger.classList.add('burger--active');
        // burgerMenu.classList.add('burger__menu--active');
        menuOpen = true;
    }
    else{
        burger.classList.remove('burger--active');
        // burgerMenu.classList.remove('burger__menu--active');
        menuOpen = false;
    }
})
