class Menu{
    constructor(imgSrc, title, description, price) {
        this.imgSrc = imgSrc;
        this.title = title;
        this.description = description;
        this.price = price;
        this.tranfer = 60;
        this.changeToPrice();
        this.redner();
    }
    changeToPrice(){
        this.price = Math.floor(this.price / 60);
    }
    redner(){
        const container = document.querySelector("[data-containerMenu]");
        const menu = document.createElement("div");
        menu.classList.add("menu__item")
        menu.innerHTML =
            `                    <img src="${this.imgSrc}" alt="vegy">
                    <h3 class="menu__item-subtitle">${this.title}"</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> $</div>
                    </div>`;
        container.append(menu);
    }
}
let menu = new Menu(
    `img/tabs/vegy.jpg`,
    `Меню "Фитнес"`,
    `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруков`,
    5000
);
