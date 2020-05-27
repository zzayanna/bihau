
// Меню карточек

let card1 = [
    {
        pic: 'inc1.png',
        title: 'Ориентирование в Быхове при помощи ультразвука',
        descr: 'Мы приглашаем лучших спикеров из Беларуси для того, чтобы жители Быхова могли получить актуальные знания по самым востребованным профессиям в стране!',
        link: 'link1.html',
        stl: 0
    },
    {
        pic: 'inc2.png',
        title: 'Электроовцы и электросны',
        descr: 'Если вы не понимаете, что здесь написано, то не переживайте. Мы тоже не совсем понимаем ,просто нам нужен рыбный текст для заполнения страницы',
        link: 'link2.html',
        stl: 0
    },
    {
        pic: 'inc3.png',
        title: 'Вдруг вы хотите предложить стартап',
        descr: 'Если у вас есть интересный проект, который мы можем реализовать вместе - мы с удовольствием с ним <br>ознакомимся!',
        link: 'link3.html',
        stl: 1
    }
];

let sc1='';
for (c1=0; c1<card1.length; c1++) {
    if (card1[c1].stl == 0) {  
    sc1 += ` <div><a href="${card1[c1].link}"><img class="card_img" src="../img/${card1[c1].pic}" alt=""></a>
    <h3 class="card_title"><a style="color: #fff" href="${card1[c1].link}">${card1[c1].title}</a></h3>
        <div class="hc1">
        <span><a href="${card1[c1].link}">${card1[c1].descr}</a></span>
        </div>
        <div class="card_arrow"><a href="${card1[c1].link}"><img src="../img/arrow10.svg" alt=""></a></div>    
    </div>  `;
}  else {
    sc1 += `  <div onclick="forma()" style="cursor: pointer; box-shadow: none; border: 0"><img class="card_img" src="../img/${card1[c1].pic}" alt="">
    <h3 class="card_title" style="color: #3725E4; text-shadow: none; text-align: center">${card1[c1].title}</h3>
        <div class="hc1" style="text-align: center">
        <span>${card1[c1].descr}</span>
        </div>
        <div class="card_arrow"><img src="../img/arrow10.svg" alt=""></div>    
    </div> `;
}

}

//  console.log(s1);
card.innerHTML = sc1;

