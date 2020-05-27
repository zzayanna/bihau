// Боковое меню

let menu2 = [
    {
        m: 'img/m1.svg',
        title: 'Бизнес-инкубатор',
        link: 'incubator.html'
    },
    {
        m: 'img/m2.svg',
        title: 'Обучение',
        link: 'education.html'
    },
    {
        m: 'img/m3.svg',
        title: 'Наши проекты',
        link: 'projects.html'
    },
    {
        m: 'img/m4.svg',
        title: 'Мероприятия',
        link: 'events.html'
    },
    {
        m: 'img/m5.svg',
        title: 'Новости',
        link: 'news.html'
    },
    {
        m: 'img/m6.svg',
        title: 'Контакты',
        link: 'contacts.html'
    },

];

let s3='';
for (i3=0; i3<menu2.length; i3++) {
    s3 += ` <div class="box_menu">
    <a href="${menu2[i3].link}"><img src="../${menu2[i3].m}" alt=""></a> 
    <a href="${menu2[i3].link}"><h2>${menu2[i3].title}</h2></a>            
</div>  `;
}

let s4='';
for (i4=0; i4<menu2.length; i4++) {
    s4 += ` <div class="box_menu">
    <a href="${menu2[i4].link}"><img src="../${menu2[i4].m}" alt=""></a> 
    <a href="${menu2[i4].link}"><h2>${menu2[i4].title}</h2></a>            
</div>  `;
}



// console.log(s);
side_menu.innerHTML = s3;
bMenu.innerHTML = s4;

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