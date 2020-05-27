
//Программа Курса

let cour = [
    {
        lesson: 'Занятие 1', 
        title: 'Структура платформы Java: JDK, JRE, JVМ',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 2', 
        title: 'Типы данных: примитивные и ссылочные',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 3', 
        title: 'Переменные',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 4', 
        title: 'Операторы',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 5', 
        title: 'Условные операторы выполнения',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 6', 
        title: 'Циклы',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 7', 
        title: 'Массивы',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 8', 
        title: 'Введение в классы',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 9', 
        title: 'Строки',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 10', 
        title: 'Классы и объекты',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 11', 
        title: 'Абстрактные классы и интерфейсы',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 12', 
        title: 'Внутренние классы',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 13', 
        title: 'Аннотации',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 14', 
        title: 'Дженерики',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 15', 
        title: 'Коллекции',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 16', 
        title: 'Исключения',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 17', 
        title: 'Работа с файлами',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 18', 
        title: 'XML',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 19', 
        title: 'Потоки',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 20', 
        title: 'Новое в Java',
        descr: `
        `,
    },
    {
        lesson: 'Занятие 21', 
        title: 'Работа с БД',
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


