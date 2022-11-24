'use strict';

let path = require('path');

module.exports = {
    mode: 'development', //режим оптимизации, разработка, продакшен
    entry: './js/modulesImportAll.js', //файл принимающий все зависимости
    output: {
        filename: 'allScript.js',//название файла со всеми модулями
        path: __dirname + '/js/webpack' //директория где будет создан общий JS
    },
    watch: true, //отслеживать изменения файлов и пересобирать проект

    devtool: "source-map", //сохранять исходники

    module: {} //модули доп. насттроек
};
// module.exports = {
//     mode: 'development', //режим оптимизации, разработка, продакшен
//     entry: './js/test2.js', //файл принимающий все зависимости
//     output: {
//         filename: 'allTest.js',//название файла со всеми модулями
//         path: __dirname + '/js/webpack' //директория где будет создан общий JS
//     },
//     watch: true, //отслеживать изменения файлов и пересобирать проект
//
//     devtool: "source-map", //сохранять исходники
//
//     module: {} //модули доп. насттроек
// };