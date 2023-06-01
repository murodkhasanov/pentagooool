let section = document.querySelector(".pokomen");
let narimen = document.querySelector(".narimen");
let display = document.querySelector(".display");
let barsan = document.querySelector(".barsan");
let mohi = document.querySelector(".mohi");
let tamom = document.querySelector(".tamom");

let toggleDark = document.getElementById("toggleDark");
let body = document.querySelector("body");
let moon = document.querySelector(".moon");
let dad = document.querySelector(".dad")

let btnn = document.querySelector("#btnn");
let btnn1 = document.querySelector("#btnn1");
let btnn2 = document.querySelector("#btnn2");


const late = [
    {
        id: 1,
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        id: 2,
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        id: 3,
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        id: 4,
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        id: 5,
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        id: 6,
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        id: 7,
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        id: 8,
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        id: 9,
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        id: 10,
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
]


let men = true
let ui = ""
late.map(itme => {
    if (men == true)
        ui += `
                <div class="counten">
            <article class = "menu-itme">
            <img src = "${itme.img}" alt = "" class="photo">
            <h6 class="barselon">${itme.name}</h6>
            <h6 class="shot">${itme.shot}</h6>
            <h6 class="liver">${itme.name1}</h6>
            <img src = "${itme.img1}" alt = "" class="foto">
            <h6 class="time">${itme.time}</h6>
                 </article>
                 </div>
                 `
    section.innerHTML = ui
});




const later = [
    {
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
    {
        name: "Barselona",
        name1: "Liverpool",
        shot: "3 : 0",
        img: "./barselona.png",
        img1: "./liverpool.png",
        time: "11.11.2023 23:23"
    },
]


let sen = true
let web = ""
later.map(itme => {
    if (sen == true)
        web += `
                <div class="countenn">
            <article class = "menu-item">
            <img src = "${itme.img}" alt = "" class="photos">
            <h6 class="bars">${itme.name}</h6>
            <h6 class="shots">${itme.shot}</h6>
            <h6 class="liv">${itme.name1}</h6>
            <img src = "${itme.img1}" alt = "" class="fotos">
            <h6 class="times">${itme.time}</h6>
                 </article>
                 </div>
                 `
    narimen.innerHTML = web
});




//     // display

let center = [
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 2,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 3,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15"
    },
    {
        shot: 1,
        img: "./barselona.png",
        name: "Barselona",
        time: "14",
        time2: "15",
    },
]



let like = true
let brav = ""
center.map(itme => {
    if (like == true)
        brav += `
            <div class="countennn">
        <article class = "menu-itemm">
        <h5 class="shotter">${itme.shot}</h5>
        <img src = "${itme.img}" alt = "" class="photot">
        <h5 class="barsek">${itme.name}</h5>
        <h6 class="timen">${itme.time}</h6>
        <h6 class="timesh">${itme.time2}</h6>
             </article>
             </div>
             `
    barsan.innerHTML = brav
});



//mohi dev
const mohin = [
    {
        img: "./image1.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image2.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image3.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image3.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image4.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image5.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image6.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image6.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image7.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image8.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image9.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image9.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image10.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image11.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image12.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image12.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image13.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image14.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image15.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image15.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
];


let mah = true
let nav = ""
mohin.map(itme => {
    if (mah == true)
        nav += `
            <div class="countennnn">
        <article class = "menu-itemmm">
        <img src = "${itme.img}" alt = "" class="image">
        <h5 class="textt">${itme.text}</h5>
        <h6 class="desc">${itme.desc}</h6>
        <h6 class="hour">${itme.hour}</h6>
             </article>
             </div>
             `
    mohi.innerHTML = nav
});





const end = [
    {
        img: "./image1.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image2.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image3.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image3.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image4.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image5.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image6.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image6.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image7.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image8.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image9.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
    {
        img: "./image9.png",
        text: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        desc: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
        hour: "11.11.2023 23:23",
    },
]



let tugad = true
let lovely = ""
end.map(itme => {
    if (tugad == true)
        lovely += `
            <div class="countennnnn">
        <article class = "menu-itemmmm">
        <img src = "${itme.img}" alt = "" class="images">
        <h5 class="texttt">${itme.text}</h5>
        <h6 class="desc">${itme.desc}</h6>
        <h6 class="hour">${itme.hour}</h6>
             </article>
             </div>
             `
    tamom.innerHTML = lovely
});



function myfun() {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    body.style.background.mohi = 'black';
    body.style.background.tamom = 'black';
}



toggleDark.addEventListener("click", function() {
    this.classList.toggle('fa-moon');
    if (this.classList.toggle('fa-circle-half-stroke')) {
        body.style.background = 'rgb(199, 196, 196)';
        dad.style.background = 'white'; 
        // const butt = document.querySelector(".butt").style.background = "#c2bdbd";
        display.style.background = "white";
        const file = document.querySelector(".file").style.background = "white";
        const royhat = document.querySelector(".royhat").style.background = "white";
        // const counten = document.querySelector(".counten").style.background = "#ddddda";
        barsan.style.background = "#ccccca";
        barsan.style.transition = "2s"
        body.style.transition = "2s";
        dad.style.transition = "2s";
        file.style.transition = "2s";
        royhat.style.transition = "2s";
        display.style.transition = "2s";
        mohi.style.background = "#e4e2e2";
    } else {
        dad.style.background = "rgb(46, 43, 43)"
        body.style.background = "black"
        // const butt = document.querySelector(".butt").style.background = "#777676";
        display.style.background = "rgb(46, 43, 43)";
        const file = document.querySelector(".file").style.background = "rgb(46, 43, 43)";
        const royhat = document.querySelector(".royhat").style.background = "rgb(46, 43, 43)";
        // const counten = document.querySelector(".counten").style.background = "black";
        barsan.style.background = "#555555";
        barsan.style.transition = "2s"
        body.style.transition = "2s";
        dad.style.transition = "2s";
        file.style.transition = "2s";
        royhat.style.transition = "2s";
        display.style.transition = "2s";
        mohi.style.background = "black";
    }
})





//MOBILNIY VARSIA


// const menue = document.getElementById("menue");
// const butt = document.getElementById("butt");

// menue.addEventListener('click', () => {
//     menue.classList.toggle('fa-xmark')
//     butt.classList.toggle('butt-tugl')
// })