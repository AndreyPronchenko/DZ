let butCol = document.querySelector('.but_col');
let col = document.querySelector('.col');
let pCol = document.querySelector('.form1');

butCol.onclick = () => {
    console.log(col.value);
    butCol.style.backgroundColor = col.value;
    pCol.style.backgroundColor = col.value;
}


let button = document.querySelector('.btn');
let number = document.querySelector('.number');
let name = document.querySelector('.name');
let expiry = document.querySelector('.expiry');
let number1 = document.querySelector('.number1');
let CVV = document.querySelector('.CVV');


button.onclick = (e) => {
    e.preventDefault();
    console.log('Номер карты:' + ' ' + one.value);
    console.log('Имя пользователя:' + ' ' + two.value);
    console.log('Месяц:' + ' ' + three.value);
    console.log('Год:' + ' ' + four.value);
    console.log('CVV / CVN:' + ' ' + five.value);
}