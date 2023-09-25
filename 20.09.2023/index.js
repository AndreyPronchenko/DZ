// Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена)

let name_1 = document.querySelector('#nam_1');
let but_1 = document.querySelector('#but_nam_1');

but_1.onclick = () => {

    let rectangle = {x1: 15, y1: 20, x2: 30, y2: 45}
    console.log(rectangle);
}

// Функция принимает объект-прямоугольник и возвращает его ширину

let name_2 = document.querySelector('#nam_2');
let but_2 = document.querySelector('#but_nam_2');

but_2.onclick = function () {

    // let rect_x1 = name_2;
let rectangle = {x1: 15, y1: 20, x2: 30, y2: 45}
        rectangle.x = rectangle.x2 - rectangle.x1;
        // rect.bottomRight.y = rect.topLeft.y + height;
        

console.log('Ширина прямоугольника:', rectangle.x, 'см.');
}

// Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину

let name_3 = document.querySelector('#nam_3');
let but_3 = document.querySelector('#but_nam_3');

but_3.onclick = function () {

let rect_x1 = name_3;
let rectangle = {x1: 15, y1: 20, x2: 50, y2: 45}
        rectangle.x = rectangle.x2 - rect_x1.value;
        console.log('Ширина прямоугольника:', rectangle.x, 'см.');
}

// Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоту.

let name_4 = document.querySelector('#nam_4');
let but_4 = document.querySelector('#but_nam_4');

but_4.onclick = function () {

let rect_y1 = name_4;
let rectangle = {x1: 15, y1: 20, x2: 50, y2: 45}

rectangle.y = rectangle.y2 - rect_y1.value;
console.log('Высота прямоугольника:', rectangle.y, 'см.');
}

// Функция смещения прямоугольник по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть

let name_5 = document.querySelector('#nam_5');
let but_5 = document.querySelector('#but_nam_5');

but_5.onclick = function () {
    let rect_x1 = name_5;
    let rectangle = {x1: 15, y1: 20, x2: 50, y2: 45}
    rectangle.x = rectangle.x2 + +rect_x1.value;
    console.log('Прямоугольник смещен по оси X:', rectangle.x, 'см.');
          }


    //   Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки

    let name_6 = document.querySelector('#nam_6');
    let name_7 = document.querySelector('#nam_7');
    let but_6 = document.querySelector('#but_nam_6');

    but_6.onclick = function () {
    let x1 = name_6;
    let y1 = name_7;
    let rectangle = {x1: 50, y1: 50}
          
    rectangle.x = rectangle.x1 <= +name_6.value;
    rectangle.y = rectangle.y1 <= +name_7.value;
    for(let i = 0; i < rectangle.x; i++){
    if(rectangle.x == +name_6.value){
    (rectangle.x == +name_6.value)
    }
    if(rectangle.y == +name_7.value){
    (rectangle.y == +name_7.value)
    }
    else if(rectangle.x < +name_6.value){
    (rectangle.y < +name_7.value)

    alert("Точка НЕ внутри прямоугольника");
    }
    }
    console.log("Точка внутри прямоугольника"); 
}
