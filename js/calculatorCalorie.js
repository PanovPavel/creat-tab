{
    const result = document.querySelector(`.calculating__result span`);
    let sex, height, weight, age, ratio;

    function calcTotal(){
        console.log("******************************************************")
        console.log(sex + " sex");
        console.log(height + " height");
        console.log(weight + " weight");
        console.log(age + " age");
        console.log(ratio + " ratio");

        if(!sex || !height|| !weight|| !age || ratio){
            result.textContent = `_______`;
            return;
        }
        if(sex === `woman`){
             result.textContent = ((655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age)) * 1.5).toString();
        }else {
            result.textContent = ((66.5 + (13.75 * weight) + (5.003 * height) - (6.775 * age)) * 1.2).toString();
        }
    }
calcTotal();

    function getStaticInformatio(parentSelector, actionClass){
        const elementsChild = document
            .querySelectorAll(`${parentSelector} div`)
        document.querySelector(parentSelector).addEventListener(`click`, (e)=>{
            if(e.target.getAttribute(`data-ratio`)){
               ratio = e.target;
            }else{
                sex = e.target.getAttribute(`id`);
            }
            console.log(ratio, sex);
            calcTotal();
            elementsChild.forEach(elem=>{
                elem.classList.remove(actionClass);
            })
            e.target.classList.add(actionClass);
        })
    }
    // document.querySelector(".calculating__choose_big")
    getStaticInformatio("#gender", "calculating__choose-item_active");
    getStaticInformatio(".calculating__choose_big", "calculating__choose");

    function getDynamicIforamtion(selectorInforamation){
        const input = document.querySelector(selectorInforamation);
        input.addEventListener(`input`, (e)=>{
            switch (input.getAttribute('id')) {
                case `height`:
                    height = +input.value;
                    break;
                case `weight`:
                    weight = +input.value;
                    break;
                case `age`:
                    age = +input.value;
                    break;
            }
            calcTotal();
        })
    }
    getDynamicIforamtion(`#height`);
    getDynamicIforamtion(`#weight`);
    getDynamicIforamtion(`#age`);
}