function difficultSlider(){
    console.log("dddddddddddddddddddddddd")
    const sliderImg = document.querySelectorAll(".offer__slide"),
        sliderBox = document.querySelector(`.offer__slider`),
        currentNumber = document.querySelector("#current"),
        totalNumber = document.querySelector("#total"),
        lastSliderButton = document.querySelector(".offer__slider-prev"),
        nextButton = document.querySelector(".offer__slider-next"),
        sliderInto = document.querySelector(".offer__slider_into"),
        sliderWrapper = document.querySelector(".offer__slider-wrapper");

    let currentSlide = 1;
    if (localStorage.getItem(`currentSlide`) != null) {
        currentSlide = +localStorage.getItem(`currentSlide`);
    }

    currentNumber.textContent = "0" + currentSlide;
    totalNumber.textContent = "0" + sliderImg.length;
    sliderWrapper.style.overflow = `hidden`;
    sliderInto.style.display = `flex`;
    sliderInto.style.width = `${sliderImg.length * 650}px`
    sliderInto.style.transform = `translateX(-${650 * (currentSlide - 1)}px)`;
    sliderInto.style.transition = `0.5s all`;
    dotsArray = creatDonts();

//событие нажатия на кнопку next
    nextButton.addEventListener(`click`, () => {
        showNextSlide();
    })
//событие нажатия на кнопку last
    lastSliderButton.addEventListener("click", () => {
        showLastSlide();
    })
//событие свайпа по слайдеру
    new Hammer(sliderInto)
        .on(`swipe`, (event) => {
            if (event.deltaX > 5) {
                showLastSlide();
            } else if (event.deltaX < -5) {
                showNextSlide();
            }
            console.log(event.deltaX);
        });
//событие нажатия на точки
    dotsArray.forEach(dot => {
        dot.addEventListener(`click`, (event) => {
            currentSlide = event.target.getAttribute(`data-slide-to`);
            changeStyleTransformAndTextContent();
            console.log(dotsArray);
            changeOpacityDot(dotsArray);
        })
    })

    function creatDonts() {
        //Блок хранения точек
        sliderBox.style.position = `relative`;
        const dots = document.createElement("ol");
        dots.classList.add(`carousel-indicators`);
        sliderBox.append(dots);

        //массив точек
        const dotsArray = [];

        for (let i = 0; i < sliderImg.length; i++) {
            const dot = document.createElement('li');
            dot.setAttribute(`data-slide-to`, i + 1);
            dot.classList.add("dot");
            if (i + 1 == currentSlide) {
                dot.style.opacity = `1`;
            }
            //добавление точек в массив, и блок dots
            dots.append(dot);
            //Возвращает массив элементов, точек
            dotsArray.push(dot);
        }
        return dotsArray;
    }

//Изменить стили всех точек в массиве
    function changeOpacityDot(arrayDots) {
        arrayDots.forEach(item => {
            item.style.opacity = `.5`;
        })
        arrayDots[currentSlide - 1].style.opacity = `1`;
    }

    function showNextSlide() {
        if (currentSlide < sliderImg.length) {
            ++currentSlide;
            changeStyleTransformAndTextContent();
            changeOpacityDot(dotsArray);
            localStorage.setItem(`currentSlide`, `${currentSlide}`);
        } else {
            currentSlide = 1;
            changeStyleTransformAndTextContent();
            changeOpacityDot(dotsArray);
            localStorage.setItem(`currentSlide`, `${currentSlide}`);
        }
    }

    function showLastSlide() {
        if (currentSlide > 1) {
            --currentSlide;
            changeStyleTransformAndTextContent();
            changeOpacityDot(dotsArray);
            localStorage.setItem(`currentSlide`, `${currentSlide}`);
        } else {
            currentSlide = sliderImg.length;
            changeStyleTransformAndTextContent();
            changeOpacityDot(dotsArray);
            localStorage.setItem(`currentSlide`, `${currentSlide}`);
        }
    }

    function changeStyleTransformAndTextContent() {
        currentNumber.textContent = "0" + currentSlide;
        sliderInto.style.transform = `translateX(-${650 * (currentSlide - 1)}px)`;
        console.log(sliderInto.style.transform + `значение: ${currentSlide}`)
    }
}
module.exports = difficultSlider;