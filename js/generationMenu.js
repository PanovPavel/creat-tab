function generationMenu() {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
    "use strict";
// const container = document.querySelector("[data-containerMenu]");
// const menu = document.createElement("div");
// container.append(menu);
// menu.textContent = "Загрузка";
    const container = document.querySelector("[data-containerMenu]");

    const getMenu = async function () {
        let outMenu = {};
        await fetch("http://localhost:3000/menu")
            .then((request) => {
                return request.json();
            }).then(data => {
                return outMenu = data;
            })
        return outMenu;
    }
    getMenu()
        .then((data) => {
            data.forEach(dataItem => {
                console.log(dataItem)
                new Menu(dataItem.img, dataItem.altimg, dataItem.title, dataItem.descr, dataItem.price);
            })
        }).catch(() => {
        container.textContent = "Нет подключения к серверу";
    })

    class Menu {
        constructor(imgSrc, alt, title, description, price) {
            this.imgSrc = imgSrc;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.tranfer = 60;
            this.changeToPrice();
            this.redner();
        }

        changeToPrice() {
            this.price = Math.floor(this.price / this.tranfer);
        }

        redner() {
            const menu = document.createElement("div");
            menu.textContent = "";
            menu.classList.add("menu__item")
            menu.innerHTML =
                `                    <img src="${this.imgSrc}" alt=${this.alt}>
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
}
module.exports = generationMenu;