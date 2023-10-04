$(document).ready(function () {

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

// Модальное окно


$('.but').click(function () {
    $('.se1').fadeIn();
});

$('.close').click(function () {
    $('.se1').fadeOut();
});

// Галлерея

$('.sm a').click(function (e) {
    e.preventDefault();

    if ($('.big img').attr('src') != $(this).attr('href')) {

        $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
            width: '100%',
            heidth: '100%',
        })
    }
});

$('.sma a').click(function (e) {
    e.preventDefault();

    if ($('.big img').attr('src') != $(this).attr('href')) {

        $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
            width: '100%',
            heidth: '100%',
        })
    }
});

$('.button').click(function () {
    $('.gal').slideToggle();

    if($('.button').text() == '😀') {
        $('.button').text('🙂')
    } else{
        $('.button').text('😀')
    }
   });


//    наведение мыши при проявлении картинок

$('.sm a').mouseover(function (e) {
    e.preventDefault();

    if ($('.big img').attr('src') != $(this).attr('href')) {

        $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
            width: '100%',
            heidth: '100%',
        })
    }
});

$('.sma a').mouseover(function (e) {
    e.preventDefault();

    if ($('.big img').attr('src') != $(this).attr('href')) {

        $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
            width: '100%',
            heidth: '100%',
        })
    }
});

});