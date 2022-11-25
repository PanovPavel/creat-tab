import 'promise-polyfill/src/polyfill';
import timerScript from './timerScript';
import calculatorCalorie from './calculatorCalorie';
import difficultSlider from './difficultSlider';
import generationMenu from './generationMenu';
import modaleBlock from './modaleBlock';
import script from './script';

window.addEventListener(`DOMContentLoaded`, ()=>{
    new Promise(resolve => {
        calculatorCalorie();
        resolve();
    })
        .finally(()=>{
        difficultSlider();
    })
        .finally(()=>{
        generationMenu();
    })
        .finally(()=>{
        modaleBlock();
    })
        .finally(()=>{
        timerScript();
    })
    script();
})


