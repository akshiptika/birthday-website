// ===== FIRST PAGE =====

const startBtn = document.getElementById("startBtn");
const firstCard = document.querySelector(".card");
const secondCard = document.getElementById("questionCard");

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const funnyText = document.getElementById("funnyText");

// Open second card
startBtn.onclick = function () {

  firstCard.classList.add("fade-out");

  setTimeout(function () {

    firstCard.style.display = "none";

    secondCard.style.display = "block";
    secondCard.classList.add("fade-in");

  }, 700);

};


// ===== NO BUTTON GAME =====

let tries = 0;

const messages = [
  "😏 Hehe... miss hogya!",
  "🙄 Oho... firse try kro!",
  "😂 Mazaa araa!",
  "🤭 Bohot ziddi o aap!"
];

const positions = [
  { left: "170px", top: "10px" },
  { left: "20px", top: "60px" },
  { left: "180px", top: "70px" },
  { left: "70px", top: "15px" }
];

noBtn.addEventListener("click", function (e) {

  e.preventDefault();

  // First four clicks
  if (tries < 4) {

    funnyText.textContent = messages[tries];

    setTimeout(function () {

      noBtn.style.left = positions[tries].left;
      noBtn.style.top = positions[tries].top;

      tries++;

    }, 100);

  }

  // Fifth click
  else {

    funnyText.textContent = "❤️ Hehe... YES hi krna pdega!";

    noBtn.style.display = "none";

  }

});


// ===== YES BUTTON =====

const memoryPage = document.getElementById("memoryPage");
const bgMusic = document.getElementById("bgMusic");

yesBtn.addEventListener("click", function(){

    secondCard.classList.add("fade-out");

    setTimeout(function(){

        secondCard.style.display = "none";

        memoryPage.style.display = "block";

        bgMusic.play();

    },700);

});
// ===== CHERRY BLOSSOM PETALS =====

const background = document.querySelector(".background");

for(let i = 0; i < 30; i++){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random()*100 + "%";

    petal.style.animationDuration =
        (6 + Math.random()*6) + "s";

    petal.style.animationDelay =
        Math.random()*6 + "s";

    petal.style.opacity =
        0.4 + Math.random()*0.6;

    petal.style.transform =
        "scale(" + (0.7 + Math.random()*0.8) + ")";

    background.appendChild(petal);

}
const photos = document.querySelectorAll(".photo");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

photos.forEach(photo=>{

observer.observe(photo);

});
const giftBox = document.getElementById("giftBox");
const gallery = document.getElementById("gallery");

giftBox.onclick = function () {

    giftBox.classList.add("open");

    // ✨ Sparkles
    for(let i=0;i<35;i++){

        const star=document.createElement("div");

        star.className="burst";

        star.innerHTML=Math.random()>0.7 ? "❤️" : "✦";

        star.style.left="90px";
        star.style.top="35px";

        star.style.setProperty("--x",(Math.random()*500-250)+"px");
        star.style.setProperty("--y",(Math.random()*300-150)+"px");

        giftBox.appendChild(star);

        setTimeout(()=>{

            star.remove();

        },1000);

    }

    // 📸 Tiny flying memories
    const photos=[
"https://picsum.photos/200/250?random=3",
"https://picsum.photos/200/250?random=4",
"https://picsum.photos/200/250?random=5",
"https://picsum.photos/200/250?random=6",
"https://picsum.photos/200/250?random=7",
"https://picsum.photos/200/250?random=8"
    ];

    photos.forEach((src)=>{

        const card=document.createElement("div");

        card.className="memoryFly";

        card.style.left=(giftBox.offsetLeft+55)+"px";
        card.style.top=(giftBox.offsetTop+15)+"px";

        card.style.setProperty("--x",(Math.random()*700-350)+"px");
        card.style.setProperty("--y",(-Math.random()*250-80)+"px");
        card.style.setProperty("--r",(Math.random()*80-40)+"deg");

        card.innerHTML=`<img src="${src}">`;

        document.querySelector(".memoryBox").appendChild(card);

        setTimeout(()=>{

            card.remove();

        },1400);

    });

    // 📖 Open gallery
    setTimeout(function(){

        gallery.classList.remove("hidden");

        gallery.scrollIntoView({

            behavior:"smooth"

        });

    },1300);

}


document.addEventListener("DOMContentLoaded", function(){

    const envelope = document.getElementById("envelope");

    envelope.addEventListener("click", function(){

        envelope.classList.toggle("open");

    });

});