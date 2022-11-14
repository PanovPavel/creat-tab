const modaleBlock = document.querySelector(".modal");
const btnOpenModal = document.querySelectorAll("[data-openModal]");
const btnCloseModal = document.querySelectorAll("[data-closeModal]");


function openModal(){
    modaleBlock.style.display = "block";
    //Запретить сколл
    document.body.style.overflow = "hidden";
    clearTimeout(watchModalSecond);
}
function closeModal(){
    modaleBlock.style.display = "none";
    //Разрешить скролл
    document.body.style.overflow = "";
}

btnOpenModal.forEach((item)=>{
    item.addEventListener("click", (event)=>{
        openModal();
    })
})

btnCloseModal.forEach((item)=>{
    item.addEventListener("click", (event)=>{
        closeModal();
    })
})

//Скрывать блок, если пользователь кликает не на него, а на класс modal
modaleBlock.addEventListener("click", (event)=>{
    if(event.target === modaleBlock){
        closeModal();
    }
})
//Закрытие блока с клавиатуры
document.addEventListener("keyup", (event)=>{
    if(event.code == "Escape"){
        closeModal();
    }
})

//Появления modal через 5 секунд
let watchModalSecond = setTimeout(openModal, 5000);

window.addEventListener("scroll", function showModal(){
    if (((document.documentElement.scrollHeight - document.documentElement.clientHeight) - document.documentElement.scrollTop) == 0) {
        //Удалить обработчик после исполнения
        window.removeEventListener("scroll", showModal);
        openModal();

    }
});
