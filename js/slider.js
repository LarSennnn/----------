const slider  = document.querySelector('.slider')
const sliderItem = Array.from(slider.children)
const btnNext = document.querySelector('.btnNext')
const btnPrev = document.querySelector('.btnPrev')

sliderItem.forEach(function(slide, index){
     

     if(index !==0 ){
        slide.classList.add('hidden')
     }

     slide.dataset.index = index

     sliderItem[0].setAttribute('data-active', "")

     slide.addEventListener('click',function(){
        slide.classList.add('hidden')
        slide.removeAttribute('data-active')


        let nextSlideIndex;
        if(index+1==sliderItem.length){
            nextSlideIndex=0
        }else{
            nextSlideIndex = index+1
        }
        // const nextSlideIndex = +slide.dataset.index+1

        const nextSlide = slider.querySelector(`[data-index ="${nextSlideIndex}"]`)
        nextSlide.classList.remove('hidden')
        nextSlide.setAttribute('data-active',"")
     })
})

btnNext.onclick = function(){
   const currentSlide = slider.querySelector('[data-active]')
   const currentSlideIndex = +currentSlide.dataset.index

   currentSlide.classList.add('hidden')
   currentSlide.removeAttribute('data-active')

   let nextSlideIndex;
        if(currentSlideIndex+1==sliderItem.length){
            nextSlideIndex=0
        }else{
            nextSlideIndex = currentSlideIndex+1
        }

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
        nextSlide.classList.remove('hidden')
        nextSlide.setAttribute('data-active',"")
}

btnPrev.onclick = function(){
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index
 
    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')
 
    let nextSlideIndex;
         if(currentSlideIndex==0){
             nextSlideIndex=sliderItem.length-1
         }else{
             nextSlideIndex = currentSlideIndex-1
         }
 
         const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
         nextSlide.classList.remove('hidden')
         nextSlide.setAttribute('data-active',"")
 }


