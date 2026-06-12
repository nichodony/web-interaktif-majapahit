const questions = [

{
question:"Siapakah Raja Majapahit pada masa kejayaan kerajaan?",
options:["Raden Wijaya","Hayam Wuruk","Kertanegara","Airlangga"],
answer:1,
explanation:"Hayam Wuruk memimpin Majapahit pada masa puncak kejayaannya antara tahun 1350–1389."
},

{
question:"Siapakah Mahapatih Majapahit yang terkenal dengan Sumpah Palapa?",
options:["Mpu Tantular","Gajah Mada","Mpu Prapanca","Tribhuwana Tunggadewi"],
answer:1,
explanation:"Gajah Mada terkenal karena Sumpah Palapa untuk mempersatukan Nusantara."
},

{
question:"Pada tahun berapakah Hayam Wuruk dinobatkan sebagai Raja Majapahit?",
options:["1293","1336","1350","1389"],
answer:2,
explanation:"Hayam Wuruk naik takhta pada tahun 1350 menggantikan Tribhuwana Tunggadewi."
},

{
question:"Kitab Negarakertagama ditulis oleh siapa?",
options:["Gajah Mada","Mpu Tantular","Mpu Prapanca","Ken Arok"],
answer:2,
explanation:"Kitab Negarakertagama ditulis oleh Mpu Prapanca pada tahun 1365."
},

{
question:"Peristiwa Bubat terjadi pada tahun berapa?",
options:["1293","1336","1357","1389"],
answer:2,
explanation:"Peristiwa Bubat terjadi pada tahun 1357 antara Majapahit dan Kerajaan Sunda."
},

{
question:"Apa nama ibu kota Kerajaan Majapahit yang menjadi pusat pemerintahan?",
options:["Demak","Trowulan","Singhasari","Kediri"],
answer:1,
explanation:"Trowulan diyakini sebagai pusat pemerintahan Kerajaan Majapahit."
},

{
question:"Apa tujuan utama Sumpah Palapa yang diucapkan Gajah Mada?",
options:["Menaklukkan Tiongkok","Menjadi Raja Majapahit","Mempersatukan Nusantara","Membangun ibu kota baru"],
answer:2,
explanation:"Tujuan utama Sumpah Palapa adalah mempersatukan wilayah Nusantara."
},

{
question:"Peninggalan Majapahit yang berupa petirtaan atau tempat penampungan air adalah...",
options:["Candi Brahu","Bajang Ratu","Kolam Segaran","Candi Tikus"],
answer:3,
explanation:"Candi Tikus merupakan petirtaan peninggalan Majapahit."
},

{
question:"Komoditas utama yang membuat wilayah Maluku penting bagi perdagangan Majapahit adalah...",
options:["Batu bara","Rempah-rempah","Sutra","Teh"],
answer:1,
explanation:"Maluku terkenal sebagai penghasil rempah-rempah yang bernilai tinggi."
},

{
question:"Semboyan 'Bhinneka Tunggal Ika' berasal dari karya sastra pada masa Majapahit yang berjudul...",
options:["Pararaton","Negarakertagama","Kakawin Sutasoma","Arjunawiwaha"],
answer:2,
explanation:"Semboyan Bhinneka Tunggal Ika berasal dari Kakawin Sutasoma karya Mpu Tantular."
}

];

let current = 0;
let score = 0;
let answered = false;

const questionText =
document.getElementById("questionText");

const optionsContainer =
document.getElementById("options");

const nextBtn =
document.getElementById("nextBtn");

const progressFill =
document.getElementById("progressFill");

const feedbackBox =
document.getElementById("feedbackBox");

function loadQuestion(){

answered = false;

const q = questions[current];

document.getElementById("questionNumber").innerHTML =
`Pertanyaan ${current + 1} dari ${questions.length}`;

questionText.innerHTML = q.question;

optionsContainer.innerHTML = "";

feedbackBox.innerHTML = "";

nextBtn.style.display = "none";

progressFill.style.width =
((current) / questions.length) * 100 + "%";

q.options.forEach((option,index)=>{

const div =
document.createElement("div");

div.className = "option";

div.innerHTML = option;

div.onclick = ()=> selectAnswer(div,index);

optionsContainer.appendChild(div);

});

}

function selectAnswer(element,index){

if(answered) return;

answered = true;

const q = questions[current];

const allOptions =
document.querySelectorAll(".option");

allOptions.forEach(opt=>{
opt.style.pointerEvents="none";
});

if(index === q.answer){

score++;

element.classList.add("correct");

feedbackBox.innerHTML = `
<div class="feedback correct-box">
✅ Jawaban Benar!<br>
<span>${q.explanation}</span>
</div>
`;

}else{

element.classList.add("wrong");

allOptions[q.answer]
.classList.add("correct");

feedbackBox.innerHTML = `
<div class="feedback wrong-box">
❌ Jawaban Salah<br>
<span>
Jawaban yang benar adalah
<b>${q.options[q.answer]}</b>.
</span>
<br><br>
<span>${q.explanation}</span>
</div>
`;

}

nextBtn.style.display = "inline-block";

}

nextBtn.onclick = ()=>{

current++;

if(current < questions.length){

loadQuestion();

}else{

showFinalResult();

}

};

function showFinalResult(){

document.querySelector(".quiz-card").innerHTML = "";

let title = "";
let icon = "";
let message = "";

if(score >= 9){

icon = "👑";
title = "Raja Majapahit";
message = "Luar biasa! Kamu menguasai sejarah Majapahit dengan sangat baik.";

}
else if(score >= 7){

icon = "⚔️";
title = "Mahapatih Nusantara";
message = "Pengetahuanmu tentang Majapahit sudah sangat bagus.";

}
else if(score >= 5){

icon = "🛡️";
title = "Ksatria Majapahit";
message = "Kamu sudah memahami sebagian besar materi.";

}
else{

icon = "📜";
title = "Penjelajah Sejarah";
message = "Terus belajar dan jelajahi kembali sejarah Majapahit.";

}

document.querySelector(".quiz-card").innerHTML = `

<div class="result-card">

<h1>${icon}</h1>

<h2>${title}</h2>

<h3>Skor ${score} / ${questions.length}</h3>

<p>${message}</p>

<br>

<button class="btn"
onclick="location.reload()">
Ulangi Quiz
</button>

</div>

`;

progressFill.style.width = "100%";

}

loadQuestion();