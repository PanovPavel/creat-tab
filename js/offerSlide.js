// const sliderWrapper = document.querySelectorAll(".offer__slide");
// const currentNumber = document.querySelector("#current");
// const totalNumber = document.querySelector("#total");
// const lastSlider = document.querySelector(".offer__slider-prev");
// const next = document.querySelector(".offer__slider-next");
//
// let currentSlide = 1;
//
// currentNumber.textContent = "0" + currentSlide;
// totalNumber.textContent = "0" + sliderWrapper.length;
//
// lastSlider.addEventListener("click", ()=>{
//     if(currentSlide > 1){
//         --currentSlide;
//         currentNumber.textContent = "0" + currentSlide;
//         changeSlide();
//     }
// })
// next.addEventListener(`click`, ()=>{
//     if(currentSlide < sliderWrapper.length){
//         ++currentSlide;
//         currentNumber.textContent = "0" + currentSlide;
//         changeSlide();
//     }
// })
//
//
// changeSlide();
// function changeSlide() {
//     sliderWrapper.forEach(item=>{
//         item.style.display = "none";
//     })
//     sliderWrapper.forEach((item, index) => {
//         if (+(currentSlide - 1) === index) {
//             item.style.display = "block";
//         }
//     })
// }