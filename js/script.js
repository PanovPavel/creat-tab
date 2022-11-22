"use strict";
const blockWhithItems = document.querySelector(".tabheader__items");
//Элементы меню
const tabItem = document.querySelectorAll(".tabheader__item");

//Функция возвращает номер активного элемента
let indexActiveItem = function numberActiveItem() {
    let indexActive = -1;
    tabItem.forEach((item, num) => {
        if (item.classList.contains("tabheader__item_active")){
            indexActive = num;
            return num;
        }
    })
    return indexActive;
}

//Изменить контент
function changeContent() {
    const tabContent = document.querySelectorAll(".tabcontent");
    tabContent.forEach((item, num) => {
        console.log(indexActiveItem());
        if (num === indexActiveItem()) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}
changeContent();

//Изменяет состояние класса item на active
blockWhithItems.addEventListener("click", (event)=>{
    if(event.target && event.target.classList.contains("tabheader__item")){
        console.log("click");
        tabItem.forEach((item)=>{
           item.classList.remove("tabheader__item_active", "fade", "show");
        });
        event.target.classList.add("tabheader__item_active", "fade", "show");
        changeContent();
    }
})

