
// Основное меню

let menu = [
    {
        title: 'Бесплатное обучение',
        descr: 'Получи востребованную IT-профессию и научись продвигать свой бизнес в сети.',
        link: 'pages/incubator.html'
    },
    {
        title: 'Стартап лаборатория',
        descr: 'Создай и развивай свой бизнес, участвуй в IT-проектах, став частью стартап-лаборатории.',
        link: 'pages/incubator.html#i3'
    },
    {
        title: 'Коворкинг',
        descr: 'В нашем коворкинге есть все, что нужно для работы, абсолютно бесплатно: высокоскоростной интернет, рабочее место, чай и печеньки. ',
        link: 'pages/incubator.html#i1'
    },
    {
        title: 'Консультации',
        descr: 'Получи консультацию у лучших юристов и бухгалтеров по созданию и ведению бизнеса и реализуй свою идею.',
        link: 'pages/incubator.html#i3'
    },
];

let s='';
for (i=0; i<menu.length; i++) {
    s += ` <div class="m">
        <h2><a href="${menu[i].link}">${menu[i].title}</a></h2>
        <div><a href="${menu[i].link}">${menu[i].descr}</a></div>
        <a href="${menu[i].link}"><img src="img/arrow10.svg" alt=""></a>
    </div> `;
}

// console.log(s);
mainMenu.innerHTML = s;




// Меню мероприятий

let menu1 = [
    {
        dat: '22.11.2019',
        title: 'ООН для Быхова',
        descr: 'Специальный проект ПРООН. Бесплатное обучение востребованным профессиям для жителей Быхова.',
        link: 'event1.html',
        current: true
    },
    {
        dat: '22.01.2020',
        title: 'Семинар "Рынок АйТи"',
        descr: 'Можно ли рабзвивать айти за границами крупных городов? Об этому посвящен новый сeминар In/By',
        link: 'event2.html',
        current: false
    },
    {
        dat: '24.04.2020',
        title: 'Конференция RAUX 2020',
        descr: '24 апреля 2020 года в Быхове пройдет большая конференция по дизайну RAUX 2020.',
        link: 'event3.html',
        current: false
    }
];

let s1='';

// для отображения под айпад и андройд
let menuLen = menu1.length;
let w = document.documentElement.clientWidth;  
if (w <= 768) menuLen = 2;
if (w <= 500) menuLen = 1;
// для отображения под айпад и андройд

for (i1=0; i1<menuLen; i1++) {
    if (menu1[i1].current) {  
    s1 += ` <div class="currentEvent e">
<div class="date">${menu1[i1].dat}</div>
<h2><a href="${menu1[i1].link}" class="eventOn">${menu1[i1].title}</a></h2>
<p><a href="${menu1[i1].link}" class="eventOn">${menu1[i1].descr}</a></p>
<a href="pages/event1.html" id="arr_mob"><img src="img/arrow10.svg" alt=""></a> 
</div> `;
}  else {
    s1 += ` <div class="e">
<div class="date">${menu1[i1].dat}</div>
<h2><a href="${menu1[i1].link}" class="eventOff">${menu1[i1].title}</a></h2>
<p><a href="${menu1[i1].link}" class="eventOff">${menu1[i1].descr}</a></p>  
</div> `;
}

}

//  console.log(s1);
eventMenu.innerHTML = s1;


// Меню футера

let menu2 = [
    {
        m: 'img/m1.svg',
        title: 'Бизнес-инкубатор',
        link: 'pages/incubator.html'
    },
    {
        m: 'img/m2.svg',
        title: 'Обучение',
        link: 'pages/education.html'
    },
    {
        m: 'img/m3.svg',
        title: 'Наши проекты',
        link: 'pages/projects.html'
    },
    {
        m: 'img/m4.svg',
        title: 'Мероприятия',
        link: 'pages/events.html'
    },
    {
        m: 'img/m5.svg',
        title: 'Новости',
        link: 'pages/news.html'
    },
    {
        m: 'img/m6.svg',
        title: 'Контакты',
        link: 'pages/contacts.html'
    },

];

let s2='';
for (i2=0; i2<menu2.length; i2++) {
    s2 += ` <div id="f">
    <a href="${menu2[i2].link}"><img src="${menu2[i2].m}" alt=""></a>
    <h2><a href="${menu2[i2].link}">${menu2[i2].title}</a></h2>
</div>  `;
}

// console.log(s);
footer.innerHTML = s2;

// Для бургер меню

let s3='';
for (i3=0; i3<menu2.length; i3++) {
    s3 += ` <div class="box_menu">
    <a href="${menu2[i3].link}"><img src="${menu2[i3].m}" alt=""></a> 
    <a href="${menu2[i3].link}"><h2>${menu2[i3].title}</h2></a>            
</div>  `;
}


bMenu.innerHTML = s3;

$(document).ready(function () {

    $('#burg_icon').on('click', function() {

       $('.burg1').slideToggle(300);
       $('#burg_icon').hide(); 

    });

    $('.burg1 > div:nth-child(1)').on('click', function() {

        $('.burg1').slideToggle(300);
        $('#burg_icon').show(300);
    });
    
});
