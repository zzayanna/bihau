
//Программа Курса

let cour = [
    {
        lesson: 'Занятие 1', 
        title: 'Введение в JavaScript. Взаимодействие с пользователем. Ветвления и циклы',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 2', 
        title: 'Редакторы кода. Консоль разработчика',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 3', 
        title: 'Функции',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 4', 
        title: 'Массивы и методы массивов. Работа со строками',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 5', 
        title: 'Объекты',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 6', 
        title: 'Объектно-ориентированное программирование',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 7', 
        title: 'Браузерное окружение. DOM (Document Object Model) – объектная модель документа',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 8', 
        title: 'Браузерное окружение. BOM (Browser Object Model) – объектная модель браузера',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 9', 
        title: 'Взаимодействие с сервером',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 10', 
        title: 'HTML5 для JavaScript-разработчика',
        descr: `

        `,
    },
    {
        lesson: 'Занятие 11', 
        title: 'CSS3 для JavaScript-разработчика',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 12', 
        title: ' Модели верстки web-приложений для JavaScript-разработчика',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 13', 
        title: 'Библиотека jQuery',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 14', 
        title: 'HTML5 JavaScript API (Application Programming Interface) - интерфейс прикладного программирования',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 15', 
        title: 'Введение в JavaScript-фреймворк Google Angular 2',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 16', 
        title: 'Material Design в Angular 2. Создание приложения',
        descr: `
        `,
    },
];

let sc='';
for (i1=0; i1<cour.length; i1++) {
    
 sc += `<div>
 <span>${cour[i1].lesson}.</span>
        <span class="sec-2__title">${cour[i1].title}</span>
     </div>
 <div>
     <div class="sec-2__less-block">
         
    
      <div class="sec-2__content">
            <ol>
            ${cour[i1].descr}
            </ol>
        </div>
    </div>
 </div> ` ;


}

course.innerHTML = sc;


