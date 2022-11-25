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

    module: {
        rules: [
            {
                test: /\.m?js$/, //файлы JS (регулярное выражение)
                exclude: /node_modules/, //не преобразовывать мудли npx
                use: {
                    loader: 'babel-loader', //использовать bable
                    options: {
                        presets: [ //настройки пресета
                            ['@babel/preset-env', { //какой пресет настроек использовать (их несколько)
                                debug:true,
                                corejs: 3, // библиотека полифилов
                                useBuiltIns: 'usage'}]
                        ]
                    }
                }
            }
        ]
    }
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