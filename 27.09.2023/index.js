$('h1').fadeOut(3000);
$('h1').fadeIn(3000);
$('h1').fadeOut(3000);



$(function() {
    $('.text').mouseover(function () {
        $('.text').animate({
        'font-size': '30pt',
         }, 3000)
    }).mouseout(function () {
        $('.text').animate({
        'font-size': '16pt',
        }, 3000);
    });
});

$('.but_1').click(function start () {
    $('.kart')
    .animate({
        opacity: 1,
        marginLeft: '80%',
    }, 1000)
    .animate({
        opacity: 1,
        marginLeft: '-80%',
    }, 1000, start)
});