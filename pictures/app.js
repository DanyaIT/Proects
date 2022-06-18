const slides = document.querySelectorAll('.slide')
function addActiveClasses(){
slides.forEach((slide) => {
    slide.addEventListener('click',()=>{
    clearActiveClasses()
    slide.classList.add('active')
    })
       
})
  
};
function clearActiveClasses(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

addActiveClasses()