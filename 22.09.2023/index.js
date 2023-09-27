// Покупка продукта. Функция принимает название продукта и отмечает его как купленный
   
   let name_1 = document.querySelector('#nam_1');
   let status = document.querySelector('#nam_1_1');
   let but1 = document.querySelector('#but_nam_1');

   but1.onclick = () => {
      let listBuy = [
         {name : "яблоко", status: "куплен",},
         {name : "молоко", status: "не куплен",},
         {name : "пироженное", status: "не куплен", },
         {name : "сыр", status: "куплен",}
             ]; 
    
        let us = prompt('Введите продукт');
        let ag = prompt('Введите куплен товар или не куплен');
  
        for(let i = 0; i < listBuy.length; i++) {
               if(us == listBuy[i].name && ag == listBuy[i].status) {
               listBuy[i].name = us;
               listBuy[i].status = ag;
               break;}
               else {
               alert('Не правильно! Поробуйте снова!');
               break;
               }
            }
         console.log(listBuy);
         }

//    Распечатка чека на экран

   let name_2 = document.querySelector('#nam_2');
   let but2 = document.querySelector('#but_nam_2');

   but2.onclick = () => {

      let q = [
   ['Яблоко', '1 кг', '250 руб'],
   ['Картофель', '10 кг', '400 руб'],
   ['Помидоры', '1 кг', '520 руб'],
   ['Мясо', '2 кг', '560 руб'],
   ['Кофе', '190 г', '390 руб'],
      ];
  for(let i = 0; i < q.length; i++) {
    console.log(q[i]);
    let c = q[i];
    for(let j = 0; j < c.length; j++) {
        console.log(c[j]);
    }
}
   }

   // Подсчет общей суммы покупки

   let name_3 = document.querySelector('#nam_3');
   let but3 = document.querySelector('#but_nam_3');

   but3.onclick = () => {

         let arr = [250, 400, 520, 560, 390];
         let sum = 0;
         for(let i = 0; i < arr.length; i++){
             sum += arr[i];
             }
         console.log('Общая сумма покупки:' + ' ' + sum + ' ' + 'руб.');
         }

   // Получение самой дорогой покупки в чеке

   let name_4 = document.querySelector('#nam_4');
   let but4 = document.querySelector('#but_nam_4');

   but4.onclick = () => {
      let arr = [250, 400, 520, 560, 390];
      for(let i = 0; i < arr.length; i++){
      max = arr[3]
      if (arr[i] > max) {
      max = arr[i]
     }
      }
     console.log('Самая дорогая покупка составляет:' + ' ' + max + ' ' + 'руб.');
     }

//    Подсчет средней стоимости одного товара в чеке.

   let name_5 = document.querySelector('#nam_5');
   let but5 = document.querySelector('#but_nam_5');
   let array = [3, 2, 5, 6];

   but5.onclick = () => {

      let arr = [250, 400, 520, 560, 390];
      let sum = 0;
         for(let i = 0; i < arr.length; i++){
             sum += arr[i];
      }
     console.log('Средняя сумма покупки составляет:' + ' ' + sum / 5 + ' ' + 'руб.');
     }