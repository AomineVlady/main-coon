document.querySelectorAll('.accordion-button').forEach(item=>{
    item.addEventListener('click', function(){
        this.classList.toggle('accordion-button--active')
    })
})