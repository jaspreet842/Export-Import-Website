let items = {
    "box1": {
        "cardcategory": "BE-001",
        "cardtitle": "Candle",
        "backgroundUrl": "../public/img/img1.jpeg"
    },
    "box2": {
        "cardcategory": "BE-002",
        "cardtitle": "Candle",
        "backgroundUrl": "../public/img/img2.jpeg"
    },
    "box3": {
        "cardcategory": "BE-003",
        "cardtitle": "Candle",
        "backgroundUrl": "../public/img/img3.jpeg"
    },
    "box4": {
        "cardcategory": "BE-004",
        "cardtitle": "Candle",
        "backgroundUrl": "../public/img/img4.jpeg"
    },
    "box5": {
        "cardcategory": "BE-005",
        "cardtitle": "Candle",
        "backgroundUrl": "../public/img/img5.jpeg"
    },
    "box6": {
        "cardcategory": "BE-006",
        "cardtitle": "Candle",
        "backgroundUrl": "../public/img/img6.jpeg"
    },
    "box7": {
        "cardcategory": "BE-007",
        "cardtitle": "Candle",
        "backgroundUrl": "../public/img/img7.jpeg"
    },
    "box8": {
        "cardcategory": "BE-008",
        "cardtitle": "Candle",
        "backgroundUrl": "../public/img/img8.jpeg"
    },
    "box9": {
        "cardcategory": "BE-009",
        "cardtitle": "Candle",
        "backgroundUrl": "../public/img/headerPic.jpeg"
    },
    "box10": {
        "cardcategory": "BE-010",
        "cardtitle": "Candle",
        "backgroundUrl": "../public/img/bgPic.jpeg"
    }
}
let receive = JSON.stringify(items);
let t = JSON.parse(receive);
let cards = document.querySelector('.cards'), str1 = "";
for (key in t) {
    let cardnumber = t[key].cardcategory;
    let cardname = t[key].cardtitle;
    let url = t[key].backgroundUrl;
    str1 += `<div class="card">
    <img src="${url}" alt="" class="card__img" />
    <div class="card__info">
        <span class="card__category">${cardnumber}</span>
        <h3 class="card__title">${cardname}</h3>
        <div id="Button">
        <a href="" target="_blank">
            <button>Watch Now</button>
        </a>
    </div>
    </div>
</div>`;
}
cards.innerHTML = str1;