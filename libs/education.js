// Меню карточек

let card1 = [{
        pic: 'te1.jpg',
        title: 'Владимир Минский',
        descr: 'Практикующий бизнес-аналитик одной из ведущих IT - компаний, сертифицированный Scrum - мастер, Product Owner и PM финтех-стартапа.Опыт в финансовом домене более 7 лет.',
        link: 'link1.html',
    },
    {
        pic: 'te2.jpg',
        title: 'Сергей Кузнецов',
        descr: 'Практикующий бизнес-аналитик одной из ведущих IT - компаний, сертифицированный Scrum - мастер, Product Owner и PM финтех-стартапа.Опыт в финансовом домене более 7 лет.',
        link: 'link2.html',
    },
    {
        pic: 'te3.jpg',
        title: 'Борис Мамоненко',
        descr: 'Практикующий бизнес-аналитик одной из ведущих IT - компаний, сертифицированный Scrum - мастер, Product Owner и PM финтех-стартапа.Опыт в финансовом домене более 7 лет.',
        link: 'link3.html',
    }
];

let sc1 = '';
for (c1 = 0; c1 < card1.length; c1++) {

    sc1 += ` <div style="box-shadow: none; border: 0"><img class="card_img" src="../img/${card1[c1].pic}" alt="">
    <h3 class="card_title" style="text-shadow: none; color: #000; font-family: Georgia; 
    font-style: italic; font-weight: normal; font-size: 16px; position: relative; top: -50px">${card1[c1].title}</h3>
        <div class="hc1">
        <span>${card1[c1].descr}</span>
        </div>
    </div>  `;
}


car1.innerHTML = sc1;



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
        pic: 'inc3.png',
        title: 'У вас есть интересный курс?',
        descr: 'Возможно, вы хотите стать лектором и у вас есть интересный курс  - мы с радостью вас выслушаем и, возможно, что-то придумаем вместе!',
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




let card2_1 = [{
        pic: 'dev1.jpg',
        title: 'Product management',
        descr: 'Кто такой product-менеджер? Специалист, который отвечает за концепцию продукта, запуск, вовлечение пользователей и монетизацию продукта. Хороший менеджер продукта — это ответственный мини-гендиректор продукта.',
        link: 'product_management.html',
    },
    {
        pic: 'dev2.jpg',
        title: 'IT-HR',
        descr: 'IT-HR — это специалист, деятельность которого объединяет IT-рекрутинг и HR-менеджмент. IT-HR работает с коллективом компании, развивает корпоративную культуру, помогает адаптироваться новым коллегам.',
        link: 'it-hr.html',
    },
    {
        pic: 'dev3.jpg',
        title: 'IT-Юрист',
        descr: 'Курс для тех, кто хочет, не меняя профессию юриста, работать в сфере IT',
        link: 'it_jurist.html',
    },
];

let sc2_1 = '';
for (c2_1 = 0; c2_1 < card2_1.length; c2_1++) {

    sc2_1 += ` <div><a href="${card2_1[c2_1].link}"><img class="card_img" src="../img/${card2_1[c2_1].pic}" alt=""></a>
    <h3 class="card_title"><a style="color: #fff" href="${card2_1[c2_1].link}">${card2_1[c2_1].title}</a></h3>
        <div class="hc1">
        <span><a href="${card2_1[c2_1].link}">${card2_1[c2_1].descr}</a></span>
        </div>
        <div class="card_arrow"><a href="${card2_1[c2_1].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;


}

//  console.log(s1);
car2_1.innerHTML = sc2_1;









let card4 = [{
        pic: 'dev1.jpg',
        title: 'Основы Web',
        descr: 'Web-разработчик  - это специалист, создающий сайты и приложения для Web (например, системы интернет-банкинга, службы заказов билетов, и многое другое). Может отвечать как только за серверную или браузерную часть сайта, так и за обе эти составляющих.',
        link: 'web_app.html',
    },
    {
        pic: 'dev2.jpg',
        title: 'Front-End',
        descr: 'Frontend-разработчик - это это специалист, который превращает созданный дизайнером макет в статическую веб-страницу или динамическое веб-приложение. Получая дизайн-макет сайта от дизайнера, front-end-разработчик выполняет его адаптивную и отзывчивую верстку для различных устройств с помощью HTML, CSS и программирует взаимодействие частей сайта с помощью JavaScript.',
        link: 'front-end.html',
    },
    {
        pic: 'dev3.jpg',
        title: 'Язык программирования Java',
        descr: 'Java-разработчик - это специалист, который создает комплексные приложения, используя одноименный язык программирования. Java широко используется на сайтах электронной коммерции, в различных корпоративных информационных системах. Java является ведущим языком разработки приложений под ОС Android и используется во встраиваемых системах.',
        link: 'coding_java.html',
    },
];

let sc4 = '';
for (c4 = 0; c4 < card4.length; c4++) {

    sc4 += ` <div><a href="${card4[c4].link}"><img class="card_img" src="../img/${card4[c4].pic}" alt=""></a>
    <h3 class="card_title"><a style="color: #fff" href="${card4[c4].link}">${card4[c4].title}</a></h3>
        <div class="hc1">
        <span><a href="${card4[c4].link}">${card4[c4].descr}</a></span>
        </div>
        <div class="card_arrow"><a href="${card4[c4].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;


}

//  console.log(s1);
car4.innerHTML = sc4;


let card5 = [{
        pic: 'dev4.jpg',
        title: 'Язык программирования PHP',
        descr: 'PHP-разработчик - это специалист, который занимается разработкой сайтов на языке программирования, созданном специально для этой цели.В обязанности PHP-разработчика входит написание программного кода, создание и доработка дополнительных модулей, отладка и исправление ошибок в коде скриптов. От качества работы PHP-разработчика зависит скорость, надежность, функционирование и успешное развитие веб-сайта в целом.',
        link: 'coding_php.html',
    },
    {
        pic: 'dev5.jpg',
        title: 'Тестирование программного обеспечения',
        descr: 'Кто такой тестировщик ПО? Специалист, который занимается обеспечением высокого качества IT-проектов (сайтов, мобильных приложений и пр.), поиском ошибок и сбоев в их работе. Тестировщик моделирует различные ситуации, которые могут возникнуть в процессе использования предмета тестирования, чтобы разработчики смогли исправить обнаруженные ошибки.',
        link: 'software_testing.html',
    },

    {
        pic: 'dev1.jpg',
        title: 'Основы Web-дизайна',
        descr: 'Курс рассчитан на новичков в дизайне, а также людей, которые имеют выборочные знания в области проектирования интерфейсов.',
        link: 'web_design.html',
    },


];

let sc5 = '';
for (c5 = 0; c5 < card5.length; c5++) {

    sc5 += ` <div><a href="${card5[c5].link}"><img class="card_img" src="../img/${card5[c5].pic}" alt=""></a>
    <h3 class="card_title"><a style="color: #fff" href="${card5[c5].link}">${card5[c5].title}</a></h3>
        <div class="hc1">
        <span><a href="${card5[c5].link}">${card5[c5].descr}</a></span>
        </div>
        <div class="card_arrow"><a href="${card5[c5].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;


}

//  console.log(s1);
car5.innerHTML = sc5;



let card6 = [{
        pic: 'mark1.png',
        title: 'Гид по IT-профессиям',
        descr: 'Данный курс подойдет всем, кто: Хочет в IT, но не знает с чего начать. Желает развиваться в IT, но сомневается между несколькими направлениями. Является родителем и хочет помочь своему ребенку определиться с будущей профессией в IT.',
        link: 'guide_to_it.html',
    },
    {
        pic: 'mark2.png',
        title: '"Удаленная работа или как зарабатывать, не выходя из дома"',
        descr: 'Развитие IT-технологий определяет профессии будущего, поэтому даже в кризис специалисты на удаленной работе не сидят без дела. И сейчас самое время научиться использовать современные технологии и начать на этом зарабатывать.',
        link: 'employment_opportunity.html',
    },

];

let sc6 = '';
for (c6 = 0; c6 < card6.length; c6++) {

    sc6 += ` <div><a href="${card6[c6].link}"><img class="card_img" src="../img/${card6[c6].pic}" alt=""></a>
    <h3 class="card_title"><a style="color: #fff" href="${card6[c6].link}">${card6[c6].title}</a></h3>
        <div class="hc1">
        <span><a href="${card6[c6].link}">${card6[c6].descr}</a></span>
        </div>
        <div class="card_arrow"><a href="${card6[c6].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;


}

//  console.log(s1);
car6.innerHTML = sc6;



let card8 = [{
        pic: 'mark1.png',
        title: 'Полный практический курс интернет-маркетинга',
        descr: 'Кто такой интернет-маркетолог? Специалист, который продвигает товар (услугу) в интернете, формирует и повышает положительную репутацию компании в целях увеличения объема продаж.',
        link: 'Internet_marketing.html',
        stl: 0
    },
    {
        pic: 'dev5.jpg',
        title: 'IT-Бухгалтер',
        descr: 'Курс для тех, кто хочет, не меняя профессию бухгалтера, работать в сфере IT.',
        link: 'it_accountant.html',
        stl: 0
    },


    {
        pic: 'comput.png',
        title: 'Не хотите учиться? Поработаем?',
        descr: 'Для тех, кто уже все знает у нас есть отличный и бесплатный коворкинг. Быхов. Ул. Краснознаменная, 65',
        link: 'link2.html',
        stl: 1
    },
];

let sc8 = '';
for (c8 = 0; c8 < card8.length; c8++) {
    if (card8[c8].stl == 0) {
        sc8 += ` <div><a href="${card8[c8].link}"><img class="card_img" src="../img/${card8[c8].pic}" alt=""></a>
    <h3 class="card_title"><a style="color: #fff" href="${card8[c8].link}">${card8[c8].title}</a></h3>
        <div class="hc1">
        <span><a href="${card8[c8].link}">${card8[c8].descr}</a></span>
        </div>
        <div class="card_arrow"><a href="${card8[c8].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;
    } else {
        sc8 += `  <div onclick="forma()" style="cursor: pointer; box-shadow: none; border: 0"><img class="card_img" src="../img/${card8[c8].pic}" alt="">
    <h3 class="card_title" style="color: #3725E4; text-shadow: none; text-align: center">${card8[c8].title}</h3>
        <div class="hc1" style="text-align: center">
        <span>${card8[c8].descr}</span>
        </div>
        <div class="card_arrow"><img src="../img/arrow10.svg" alt=""></div>    
    </div> `;
    }

}

//  console.log(s1);
car8.innerHTML = sc8;