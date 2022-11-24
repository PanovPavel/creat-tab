import {timerScript} from './timerScript';

window.addEventListener("DOMContentLoaded", ()=> {
    const calculatorCalorie = require('./calculatorCalorie'),
        difficultSlider = require('./difficultSlider'),
        generationMenu = require('./generationMenu'),
        modaleBlock = require('./modaleBlock'),
        script = require('./script');

    calculatorCalorie();
    difficultSlider();
    generationMenu();
    modaleBlock();
    script();
    timerScript();
})

