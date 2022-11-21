const sliderImg = document.querySelectorAll(".offer__slide"),
      currentNumber = document.querySelector("#current"),
      totalNumber = document.querySelector("#total"),
      lastSliderButton = document.querySelector(".offer__slider-prev"),
      nextButton = document.querySelector(".offer__slider-next"),
      sliderInto = document.querySelector(".offer__slider_into"),
    sliderWrapper = document.querySelector(".offer__slider-wrapper");

let currentSlide = 1;
currentNumber.textContent = "0" + currentSlide;
totalNumber.textContent = "0" + sliderImg.length;

sliderInto.style.display = `flex`;
sliderInto.style.width = `${sliderImg.length * 650}px`
sliderInto.style.transition = `0.5s all`;
sliderWrapper.style.overflow = `hidden`;

nextButton.addEventListener(`click`, ()=>{
    nextSlide();
})

new Hammer(sliderInto)
    .on(`swipe`, (event)=>{
        if(event.deltaX > 5){
           lastSlide();
        }else if(event.deltaX < -5){
            nextSlide();
        }
        console.log(event.deltaX);
    });
lastSliderButton.addEventListener("click", ()=>{
    lastSlide();
})

// changeSlide();
// function changeSlide() {
//
// }
function nextSlide(){
    if(currentSlide < sliderImg.length) {
        ++currentSlide;
        currentNumber.textContent = "0" + currentSlide;
        sliderInto.style.transform = `translateX(-${650*(currentSlide-1)}px)`;
        console.log(sliderInto.style.transform + `значение: ${currentSlide}`)
    }else{
        currentSlide = 1;
        currentNumber.textContent = "0" + currentSlide;
        sliderInto.style.transform = `translateX(-${650*(currentSlide-1)}px)`;
    }
}
function lastSlide(){
    if(currentSlide > 1){
        --currentSlide;
        currentNumber.textContent = "0" + currentSlide;
        sliderInto.style.transform = `translateX(-${650*(currentSlide-1)}px)`;
        console.log(sliderInto.style.transform + `значение: ${currentSlide}`)
    }else {
        currentSlide = 4;
        currentNumber.textContent = "0" + currentSlide;
        sliderInto.style.transform = `translateX(-${650*(currentSlide-1)}px)`;
    }
}