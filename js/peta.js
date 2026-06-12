const wilayah = {

trowulan:{
title:"Trowulan",
img:"image/trowulan.png",
year:"±1350–1389",
desc:"Trowulan merupakan ibu kota Kerajaan Majapahit dan pusat pemerintahan pada masa Hayam Wuruk. Dari wilayah ini, berbagai kebijakan politik, ekonomi, dan ekspansi wilayah Nusantara dijalankan.",
impact:"Menjadi pusat administrasi, kebudayaan, dan simbol kejayaan Kerajaan Majapahit."
},

sumatera:{
title:"Sumatera",
img:"image/sumatera.png",
year:"Abad ke-14",
desc:"Wilayah Sumatera berada dalam jaringan pengaruh Majapahit melalui hubungan politik dan perdagangan. Daerah ini menjadi jalur penting yang menghubungkan Nusantara bagian barat dengan pusat kerajaan.",
impact:"Memperkuat perdagangan antarpulau dan memperluas pengaruh Majapahit di wilayah barat Nusantara."
},

kalimantan:{
title:"Kalimantan",
img:"image/kalimantan.png",
year:"Abad ke-14",
desc:"Beberapa kerajaan di Kalimantan menjalin hubungan dengan Majapahit melalui perdagangan dan kerja sama politik. Letaknya yang strategis menjadikan Kalimantan bagian penting dalam jaringan Nusantara.",
impact:"Memperluas jaringan perdagangan serta memperkuat pengaruh Majapahit di kawasan tengah Nusantara."
},

bali:{
title:"Bali",
img:"image/bali.png",
year:"1343 M",
desc:"Bali berada di bawah pengaruh Majapahit setelah ekspedisi yang dipimpin oleh Gajah Mada. Pengaruh tersebut membawa perkembangan budaya, pemerintahan, dan tradisi yang bertahan hingga kini.",
impact:"Menjadi pusat penyebaran budaya Majapahit yang jejaknya masih terlihat dalam tradisi Bali modern."
},

sulawesi:{
title:"Sulawesi",
img:"image/sulawesi.png",
year:"Abad ke-14",
desc:"Sulawesi menjadi salah satu wilayah yang berperan dalam aktivitas pelayaran dan perdagangan Majapahit. Posisi geografisnya mendukung hubungan antara wilayah barat dan timur Nusantara.",
impact:"Meningkatkan konektivitas maritim dan memperkuat jalur perdagangan kerajaan."
},

maluku:{
title:"Maluku",
img:"image/maluku.png",
year:"Abad ke-14",
desc:"Maluku dikenal sebagai penghasil rempah-rempah bernilai tinggi seperti cengkeh dan pala. Hubungan perdagangan dengan wilayah ini menjadi salah satu sumber kemakmuran Majapahit.",
impact:"Meningkatkan kekuatan ekonomi kerajaan melalui perdagangan rempah-rempah yang bernilai tinggi."
}

};

function showInfo(id){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerHTML=
wilayah[id].title;

document.getElementById("popupImg").src=
wilayah[id].img;

document.getElementById("popupYear").innerHTML=
"Tahun : " + wilayah[id].year;

document.getElementById("popupDesc").innerHTML=
wilayah[id].desc;

document.getElementById("popupImpact").innerHTML=
wilayah[id].impact;

}

function closePopup(){

document.getElementById("popup").style.display=
"none";

}
window.onclick = function(event){

    const popup =
    document.getElementById("popup");

    if(event.target === popup){

        popup.style.display = "none";

    }

}