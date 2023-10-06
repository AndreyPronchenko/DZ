$(document).ready(function() {

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

// Маска ввода номера карты и даты

$('.card').mask("9999 9999 9999 9999", {autoclear: false });
$('.card2').mask("  99", {autoclear: false });
$('.card3').mask("  9999", {autoclear: false });
$('.card4').mask("  999", {autoclear: false });


// блокировка выбранных элементов

    $(function() {
            $('.btn').click(function(e) {
                e.preventDefault();
            if ($('.card').val() != '') {
            $('.card').attr('disabled', 'disabled');
            }
            if ($('.card1').val() != '') {
                $('.card1').attr('disabled', 'disabled');
            }
            if ($('.card2').val() != '') {
                $('.card2').attr('disabled', 'disabled');
            }
            if ($('.card3').val() != '') {
                $('.card3').attr('disabled', 'disabled');
            }
            if ($('.card4').val() != '') {
                $('.card4').attr('disabled', 'disabled');
            alert('Вы заполнили все поля');
            }
            else {
                alert('Вы не заполнили все поля');
            }
            })
        });

// });

// проверка заполнения полей

$(function() {
        $('.btn').click(function(e) {
            e.preventDefault();
            if($('.card').val() == '' || $('.card1').val() == '' || $('.card2').val() == '' || $('.card3').val() == '' || $('.card4').val() == ''){
                alert('Поля не заполнены');
            } 
            else {
                alert('Форма отправлена');
            }
        });
        })

});