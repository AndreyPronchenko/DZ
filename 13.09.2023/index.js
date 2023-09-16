
$(document).ready(function () {
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
            $('.auto li').mouseover(function () {

                $(this).css(
                    {
                        'font-weight': 'bold',
                    }
                )
            });

            $('.auto li').mouseout(function () {

                $(this).css(
                    {
                    'font-weight': 'normal',
                }
            )
        });

    });
