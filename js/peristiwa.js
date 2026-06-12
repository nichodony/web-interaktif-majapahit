console.log("Halaman Peristiwa berhasil dimuat");// =====================
// DATA POPUP PERISTIWA
// =====================
const peristiwaData = {
  tahta: {
    title: "Hayam Wuruk Naik Tahta (1350)",
    img: "image/headline.png",
    category: "Headline",
    year: "1350 M",
    desc: `Pada tahun 1350 Masehi, Hayam Wuruk resmi dinobatkan sebagai Raja keempat Majapahit dengan gelar Sri Rajasanagara. Penobatan ini berlangsung setelah ibundanya, Tribhuwana Tunggadewi, menyerahkan tampuk kekuasaan kepada putranya yang masih berusia 16 tahun.

Di bawah kepemimpinannya yang didampingi Mahapatih Gajah Mada, Majapahit berkembang menjadi kerajaan terbesar dan paling berpengaruh di Nusantara. Hayam Wuruk dikenal sebagai raja yang bijaksana, mencintai seni, dan mahir dalam berbagai ilmu pemerintahan.`,
    impact: "Awal era keemasan Majapahit yang berlangsung hampir empat dekade penuh kejayaan dan kemakmuran."
  },
  lahir: {
    title: "Kelahiran Hayam Wuruk (1334)",
    img: "image/lahirpu.png",
    category: "Sejarah",
    year: "1334 M",
    desc: `Hayam Wuruk lahir pada tahun 1334 M dari pasangan Cakradhara (Kertawardhana) dan Tribhuwana Tunggadewi, yang saat itu menjadi ratu penguasa Majapahit. Namanya berarti "ayam jantan yang masih muda" — sebuah pertanda keberanian dan kepemimpinan.

Sejak kecil, Hayam Wuruk mendapatkan pendidikan kerajaan yang komprehensif, mencakup ilmu pemerintahan, seni, agama, dan strategi perang. Ia tumbuh di lingkungan istana yang kaya akan tradisi dan kebudayaan tinggi.`,
    impact: "Kelahiran Hayam Wuruk menjadi titik awal lahirnya pemimpin terbesar yang pernah dimiliki Kerajaan Majapahit."
  },
  bubat: {
    title: "Peristiwa Bubat (1357)",
    img: "image/bubat.png",
    category: "Konflik",
    year: "1357 M",
    desc: `Peristiwa Bubat adalah tragedi berdarah yang terjadi akibat salah paham diplomatik antara Majapahit dan Kerajaan Sunda. Konon, pernikahan antara Hayam Wuruk dengan Dyah Pitaloka Citraresmi, putri Raja Sunda, berujung pada konflik karena Gajah Mada menuntut penyerahan diri Sunda sebagai tanda takluk — bukan sebagai mitra setara.

Raja Sunda beserta rombongan yang datang dalam misi damai terpaksa menghadapi pasukan Majapahit. Dalam pertempuran yang tidak seimbang itu, raja dan seluruh rombongan Sunda gugur. Dyah Pitaloka disebut memilih untuk mengakhiri hidupnya sendiri demi menjaga kehormatan.`,
    impact: "Hubungan Majapahit–Sunda retak permanen. Peristiwa ini juga berdampak pada kedudukan Gajah Mada yang mengalami kemunduran di istana."
  },
  kitab: {
    title: "Kitab Negarakertagama (1365)",
    img: "image/kitab.png",
    category: "Sastra",
    year: "1365 M",
    desc: `Negarakertagama adalah kitab kakawin (puisi epik Jawa Kuno) yang ditulis oleh Mpu Prapanca, seorang pejabat agama dan sastrawan istana Majapahit. Kitab ini selesai ditulis pada tahun 1365 M dan menjadi dokumen sejarah paling berharga mengenai kejayaan Majapahit.

Kitab ini mencatat secara rinci tentang silsilah raja, perjalanan Hayam Wuruk mengelilingi wilayah kekuasaan, daftar daerah taklukan, upacara keagamaan, serta kehidupan sosial dan budaya masyarakat Majapahit. UNESCO mengakuinya sebagai Warisan Dokumenter Dunia (Memory of the World).`,
    impact: "Menjadi sumber primer utama pengetahuan sejarah Majapahit dan bukti tingginya peradaban sastra pada masa tersebut."
  },
  wafat: {
    title: "Wafatnya Hayam Wuruk (1389)",
    img: "image/wafat.png",
    category: "Akhir Era",
    year: "1389 M",
    desc: `Hayam Wuruk wafat pada tahun 1389 M setelah memerintah selama hampir 39 tahun. Kepergiannya meninggalkan kekosongan kepemimpinan yang besar, karena tidak ada penerus yang cukup kuat untuk menjaga persatuan kerajaan sebesar Majapahit.

Sepeninggalnya, suksesi takhta menimbulkan perebutan kekuasaan yang berujung pada perang saudara (Perang Paregreg, 1401–1406). Kondisi ini melemahkan Majapahit secara struktural dan menjadi awal dari kemunduran bertahap kerajaan agung tersebut.`,
    impact: "Wafatnya Hayam Wuruk menandai akhir era keemasan Majapahit dan membuka babak kemunduran yang perlahan namun pasti."
  },
  sumpah: {
    title: "Sumpah Palapa Gajah Mada (1336)",
    img: "image/sumpah.png",
    category: "Politik",
    year: "1336 M",
    desc: `Pada tahun 1336 M, saat dilantik sebagai Mahapatih Majapahit, Gajah Mada mengucapkan sumpahnya yang terkenal — Sumpah Palapa. Ia bersumpah tidak akan menikmati palapa (rempah-rempah atau kenikmatan) sebelum berhasil menyatukan seluruh Nusantara di bawah kekuasaan Majapahit.

Sumpah ini bukan sekadar ucapan, melainkan program politik besar yang kemudian dijalankan secara sistematis melalui ekspedisi militer dan diplomasi. Gajah Mada memimpin penaklukan berbagai wilayah dari Sumatera, Kalimantan, Bali, hingga Maluku.`,
    impact: "Sumpah Palapa menjadi landasan visi pemersatu Nusantara yang menjadikan Majapahit sebagai kerajaan terluas di Asia Tenggara."
  },
  ekspansi: {
    title: "Ekspansi Wilayah Majapahit (1350–1365)",
    img: "image/ekspansi.png",
    category: "Ekspansi",
    year: "1350–1365 M",
    desc: `Di bawah kepemimpinan Hayam Wuruk dan kecakapan militer Gajah Mada, Majapahit berhasil memperluas pengaruhnya ke lebih dari 100 daerah di seluruh Nusantara — termasuk Sumatera, Kalimantan, Sulawesi, Maluku, Papua, hingga Semenanjung Malaya dan sebagian Filipina.

Ekspansi dilakukan melalui kombinasi kekuatan militer, diplomasi pernikahan, dan perjanjian tributari. Armada laut Majapahit yang kuat menjadi ujung tombak dominasi maritim di kawasan Asia Tenggara.`,
    impact: "Majapahit menjadi kekuatan maritim terbesar di Asia Tenggara dan menjadi inspirasi konsep persatuan Nusantara hingga era modern."
  },
  warisan: {
    title: "Warisan Seni Ukir Majapahit",
    img: "image/warisan.png",
    category: "Budaya",
    year: "Abad ke-14",
    desc: `Majapahit meninggalkan warisan seni ukir yang luar biasa, terutama dalam bentuk relief candi, arca, dan ornamen arsitektur. Motif-motif khas Majapahit seperti sulur-suluran, kala, dan figur dewa-dewi Hindu-Buddha menjadi identitas visual yang kuat.

Candi-candi seperti Penataran, Jabung, dan Bajang Ratu menjadi bukti nyata kecanggihan teknik pahat dan kekayaan estetika Majapahit. Seni ini diwariskan dan masih dapat ditemukan dalam tradisi seni rupa Jawa dan Bali hingga kini.`,
    impact: "Warisan seni Majapahit menjadi fondasi estetika Nusantara yang terus hidup dalam budaya Indonesia kontemporer."
  },
  toleransi: {
    title: "Toleransi Beragama di Majapahit",
    img: "image/toleransi.png",
    category: "Agama",
    year: "1350–1389 M",
    desc: `Salah satu keistimewaan Majapahit di era Hayam Wuruk adalah kemampuannya merawat kerukunan antara pemeluk Hindu dan Buddha. Kedua agama ini hidup berdampingan harmonis, bahkan sering dipadukan dalam ritual dan seni — menciptakan tradisi Siwa-Buddha yang unik.

Kitab Sutasoma karya Mpu Tantular dari masa ini mengandung semboyan terkenal "Bhinneka Tunggal Ika" yang artinya "Berbeda-beda namun tetap satu". Nilai ini mencerminkan betapa majunya pemikiran tentang keberagaman di Majapahit.`,
    impact: "Konsep toleransi Majapahit menjadi inspirasi bagi semboyan negara Indonesia \"Bhinneka Tunggal Ika\" hingga hari ini."
  },
  pelabuhan: {
    title: "Pelabuhan Majapahit: Pusat Perdagangan",
    img: "image/pelabuhan.png",
    category: "Ekonomi",
    year: "1350–1389 M",
    desc: `Pelabuhan-pelabuhan Majapahit, terutama di pesisir utara Jawa, menjadi simpul perdagangan internasional yang ramai. Pedagang dari Tiongkok, India, Arab, dan berbagai penjuru Nusantara bertemu dan bertransaksi di sini.

Komoditas utama yang diperdagangkan meliputi rempah-rempah dari Maluku, kain, keramik, emas, dan hasil pertanian. Majapahit memiliki sistem pelabuhan yang terorganisir dengan baik, termasuk syahbandar (kepala pelabuhan) yang mengatur lalu lintas kapal dan pemungutan bea.`,
    impact: "Kemakmuran ekonomi Majapahit bersumber dari perdagangan maritim yang menjadikan kerajaan ini sebagai kekuatan ekonomi dominan di Asia Tenggara."
  }
};

// =====================
// BUKA POPUP
// =====================
function openPeristiwaPopup(key) {
  const d = peristiwaData[key];
  if (!d) return;

  document.getElementById('ppImg').src = d.img;
  document.getElementById('ppImg').alt = d.title;
  document.getElementById('ppCategory').textContent = d.category;
  document.getElementById('ppTitle').textContent = d.title;
  document.getElementById('ppYear').textContent = '📅 ' + d.year;
  document.getElementById('ppDesc').innerHTML = d.desc.replace(/\n\n/g, '</p><p>');
  document.getElementById('ppImpact').textContent = d.impact;

  const overlay = document.getElementById('peristiwaPopup');
  overlay.style.display = 'flex';
  setTimeout(() => overlay.classList.add('active'), 10);
}

function closePeristiwaPopup() {
  const overlay = document.getElementById('peristiwaPopup');
  overlay.classList.remove('active');
  setTimeout(() => overlay.style.display = 'none', 300);
}

window.addEventListener('click', e => {
  const overlay = document.getElementById('peristiwaPopup');
  if (e.target === overlay) closePeristiwaPopup();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePeristiwaPopup();
});

console.log("Halaman Peristiwa berhasil dimuat");
