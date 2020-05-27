// let card2 = [
//     {
//         pic: 'biz1.jpg',
//         title: 'Бизнес-анализ в сфере разработки ПО', 
//         descr: 'Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
//         link: 'link1.html',
//         stl: 0
//     },
//     {
//         pic: 'biz2.jpg',
//         title: 'Presale и Discovery фазы в бизнес-анализе',
//         descr: 'Presale и Discovery фазы - это отправные точки разработки проекта. Именно грамотная работа бизнес-аналитика на этом этапе способствует заключению контракта и развитию отношений с потенциальным клиентом.',
//         link: 'link2.html',
//         stl: 0
//     },
//     {
//         pic: 'inc4.png',
//         title: 'Отучились? <br> Давайте к нам в бизнес-инкубаторе',
//         descr: 'Если у вас есть интересный проект, который мы можем реализовать вместе - мы с удовольствием с ним ознакомимся!',
//         link: 'link3.html',
//         stl: 1
//     }
// ];

// let sc2='';
// for (c2=0; c2<card2.length; c2++) {
//     if (card2[c2].stl == 0) {  
//     sc2 += ` <div><a href="${card2[c2].link}"><img class="card_img" src="../img/${card2[c2].pic}" alt=""></a>
//     <h3 class="card_title"><a style="color: #fff" href="${card2[c2].link}">${card2[c2].title}</a></h3>
//         <div class="hc1">
//         <span><a href="${card2[c2].link}">${card2[c2].descr}</a></span>
//         </div>
//         <div class="card_arrow"><a href="${card2[c2].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
//     </div>  `;
// }  else {
//     sc2 += `  <div  onclick="forma()" style="cursor: pointer; box-shadow: none; border: 0"><img class="card_img" src="../img/${card2[c2].pic}" alt="">
//     <h3 class="card_title" style="color: #3725E4; text-shadow: none; text-align: center">${card2[c2].title}</h3>
//         <div class="hc1" style="text-align: center">
//         <span>${card2[c2].descr}</span>
//         </div>
//         <div class="card_arrow"><img src="../img/arrow10.svg" alt=""></div>    
//     </div> `;
// }

// }

// //  console.log(s1);
// car2.innerHTML = sc2;





let card2 = [{
        pic: 'biz1.jpg',
        title: 'Бизнес-анализ',
        descr: 'Бизнес-аналитик - это Специалист, который исследует проблему заказчика, ищет решение и оформляет его концепцию в форме требований, на которые в дальнейшем будут ориентироваться разработчики при создании продукта.',
        link: 'business_analysis.html',
        stl: 0
    },
    {
        pic: 'biz2.jpg',
        title: 'Управление проектами ',
        descr: 'Менеджер проекта - это Специалист, отвечающий за успешное выполнение проекта: в указанные заказчиком сроки, с необходимым качеством, при фиксированном бюджете, ограниченных человеческих ресурсах и в соответствии с требованиями со стороны заказчика.',
        link: 'project_management.html',
        stl: 0
    },
    {
        pic: 'inc4.png',
        title: 'Отучились? <br> Давайте к нам в бизнес-инкубаторе',
        descr: 'Если у вас есть интересный проект, который мы можем реализовать вместе - мы с удовольствием с ним ознакомимся!',
        link: 'link3.html',
        stl: 1
    }
];

let sc2 = '';
for (c2 = 0; c2 < card2.length; c2++) {
    if (card2[c2].stl == 0) {
        sc2 += ` <div><a href="${card2[c2].link}"><img class="card_img" src="../img/${card2[c2].pic}" alt=""></a>
    <h3 class="card_title"><a style="color: #fff" href="${card2[c2].link}">${card2[c2].title}</a></h3>
        <div class="hc1">
        <span><a href="${card2[c2].link}">${card2[c2].descr}</a></span>
        </div>
        <div class="card_arrow"><a href="${card2[c2].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;
    } else {
        sc2 += `  <div  onclick="forma()" style="cursor: pointer; box-shadow: none; border: 0"><img class="card_img" src="../img/${card2[c2].pic}" alt="">
    <h3 class="card_title" style="color: #3725E4; text-shadow: none; text-align: center">${card2[c2].title}</h3>
        <div class="hc1" style="text-align: center">
        <span>${card2[c2].descr}</span>
        </div>
        <div class="card_arrow"><img src="../img/arrow10.svg" alt=""></div>    
    </div> `;
    }

}

//  console.log(s1);
car2.innerHTML = sc2;










// Отзывы 

let menu1 = [{
        dat: '22.08.2020',
        title: 'Петр Гук',
        descr: `Благодаря  ребятам я смог наконец реализовать свою давнюю-предавнюю мечту! Дело в том, что я с детства хотел построить ракету, чтобы доказать, что ученые нас обманывают и земля на самом деле плоская.
        И вот - сбылось! взлетел на 15 метров и сломал все кости.  Лежу в земле и чувствую, что она плоская!!!`,
        link: 'feed1.html',
    },
    {
        dat: '22.09.2020',
        title: 'Алесь Соболевский',
        descr: `И вот, все произошло. Я три месяца назад подал заявку на конкурс стартапов, а уже через месяц я прятал от налоговой свой первый миллион.
        Ребята полностью подготовили мея к выживанию в Беларуси и деньгия перевел на кипрский офшор!
        Спасибо, дорогие!`,
        link: 'feed2.html',
    },
    {
        dat: '24.10.2020',
        title: 'Всеслав Чародей',
        descr: `Как вы думаете, какова вероятность разбогатеть у Быховчанина, которому всего 5 лет?
        Оказывается большая. С тех пор, как мы в инкубаторе запустили проект онлайн-шантажа посетителей детских садов, я смог наконец выкупить бабушку из рабства!`,
        link: 'feed3.html',
    }
];

let s1 = '';
for (i1 = 0; i1 < menu1.length; i1++) {

    s1 += `<div class="feedback__block">
<div class="data">
    <span>${menu1[i1].dat}</span>
</div>
<div class="feedback__title">
    <p>${menu1[i1].title}</p>
</div>
<div class="feedback__content">
    <p>
    <a href="${menu1[i1].link}">${menu1[i1].descr}</a>
    </p>
</div>
<div class="arrow_right">
    <a href="${menu1[i1].link}"><img src="../img/arrow10.svg" alt="arrow"></a>
</div>
</div>`;


}

//  console.log(s1);
feed.innerHTML = s1;