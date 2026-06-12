const startBtn =
document.getElementById(
"startJourney"
);

const journey =
document.getElementById(
"journeyScreen"
);

const ship =
document.getElementById(
"journeyShip"
);

const title =
document.querySelector(
".journey-content h2"
);

const desc =
document.querySelector(
".journey-content p"
);

startBtn.addEventListener(

"click",

function(e){

e.preventDefault();

journey.style.display=
"flex";

ship.classList.add(
"shipMove"
);

setTimeout(()=>{

title.classList.add(
"showText"
);

desc.classList.add(
"showText"
);

},700);

setTimeout(()=>{

window.location.href=
"peta.html";

},3500);

}

);

