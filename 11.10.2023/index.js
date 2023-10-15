$(document).ready(function() {

    // Работа вкладок

    let chois = document.querySelectorAll('.chois');
    init();
    chois.forEach(function (element) {
        element.onclick = choisTabs;});

        function init(){
            let choisBody = document.querySelectorAll('.chois-body'); 
            for (let i = 1; i < choisBody.length; i++) {
                choisBody[i].style.display = 'none';
            }
        }
            function choisTabs(){
                let data = this.getAttribute('data');

                let choisBody = document.querySelectorAll('.chois-body');
                for (let i = 0; i < choisBody.length; i++) {
                    choisBody[i].style.display = 'none';
            }
            document.querySelector(`.chois-body[data="${data}"]`).style.display = 'block';
        }
            $('.vek li').mouseover(function () {

                $(this).css(
                    {
                        'font-weight': 'bold',
                    }
                )
            });

            $('.vek li').mouseout(function () {

                $(this).css(
                    {
                    'font-weight': 'normal',
                }
            )
        });
    
    
        // блокировка выбранных элементов

    $(function() {
        $('.but').click(function(e) {
            e.preventDefault();
        if ($('.no').val() != '') {
        $('.no').attr('disabled', 'disabled');
        }
        if ($('.yes1').val() != '') {
            $('.yes1').attr('disabled', 'disabled');
        }
        })
    });
    $(function() {
        $('.but1').click(function(e) {
            e.preventDefault();
        if ($('.no1').val() != '') {
        $('.no1').attr('disabled', 'disabled');
        }
        if ($('.yes2').val() != '') {
            $('.yes2').attr('disabled', 'disabled');
        }
        })
    });
    $(function() {
        $('.but2').click(function(e) {
            e.preventDefault();
        if ($('.no2').val() != '') {
        $('.no2').attr('disabled', 'disabled');
        }
        if ($('.yes3').val() != '') {
            $('.yes3').attr('disabled', 'disabled');
        }
        })
    });

    // Выделение цветом

     let yes = document.querySelector('.yes');
     let no = document.querySelectorAll('.no');
     let r = document.querySelectorAll('input');
     let but = document.querySelector('.but');

     but.onclick = () => {
     for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
        }
     }
     yes.style.color = 'Green';

     for (let i = 0; i < no.length; i++) {

     no[i].style.color = 'Red';
        }
     }

     let ok1 = document.querySelector('.ok1');
     let no1 = document.querySelectorAll('.no1');
     let r1 = document.querySelectorAll('input');
     let but1 = document.querySelector('.but1');

     but1.onclick = () => {
     for (let i = 0; i < r1.length; i++) {
        if (r1[i].checked) {
        }
     }
     ok1.style.color = 'Green';

     for (let i = 0; i < no1.length; i++) {

     no1[i].style.color = 'Red';
        }
     }

     let ok2 = document.querySelector('.ok2');
     let no2 = document.querySelectorAll('.no2');
     let r2 = document.querySelectorAll('input');
     let but2 = document.querySelector('.but2');

     but2.onclick = () => {
     for (let i = 0; i < r2.length; i++) {
        if (r2[i].checked) {
        }
     }
     ok2.style.color = 'Green';

     for (let i = 0; i < no2.length; i++) {

     no2[i].style.color = 'Red';
        }
     }


});