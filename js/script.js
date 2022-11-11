let array = [0, 1, 2, 3, 4, 5, 6, 8, 9, 15, 16, 18,22];
let middle = Math.ceil(array.length / 2);
function findNumber(x){
    middle = Math.ceil(middle);
    if(x === array[middle]){
        console.log(middle);
    }else if(x > array[middle]){
        middle = middle*1.5;
        findNumber(x);
    }else if(x < array[middle]){
        middle = middle*0.75;
        findNumber(x);
    }
}
findNumber(2);