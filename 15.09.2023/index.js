// Функция принимает массив и выводит его на экран

let name_1 = document.querySelector('#nam_1');
let but_1 = document.querySelector('#but_nam_1');

but_1.onclick = () => {
let con = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(con);
}

// Функция принимает массив и выводит только четные элементы

let name_2 = document.querySelector('#nam_2');
let but_2 = document.querySelector('#but_nam_2');

but_2.onclick = () => {
let chet = [11, 23, 32, 46, 50, 67, 74, 85, 92, 100];

for (let i = 0; i < chet.length; i++){
    if (chet[i] % 2 == 0) {
        console.log(chet[i]);
    }
}
}

// Функция принимает массив и возвращает сумму всех элементов массив

let name_3 = document.querySelector('#nam_3');
let but_3 = document.querySelector('#but_nam_3');

but_3.onclick = () => {
let arr = [12, 23, 34, 45, 56, 67, 78, 89, 91, 100];

function arraySum(array){
let sum = 0;
for(let i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
}
arraySum(arr);
}

// Функция принимает массив и возвращает его максимальный элемент

let name_4 = document.querySelector('#nam_4');
let but_4 = document.querySelector('#but_nam_4');

but_4.onclick = () => {
let arr1 = [121, 24, 322, 456, 59, 61, 72, 85, 98, 200];

for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] > arr1[0]){
        arr1[0] = arr1[i];
    }
}
console.log('Max:', arr1[0]);
}
