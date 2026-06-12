const data = [

{
    title: "Candi Tikus",
    desc: "Candi Tikus merupakan peninggalan Majapahit berupa petirtaan."
},

{
    title: "Candi Bajang Ratu",
    desc: "Gapura peninggalan Majapahit yang terkenal."
},

{
    title: "Candi Brahu",
    desc: "Salah satu candi tertua peninggalan Majapahit."
},

{
    title: "Kitab Negarakertagama",
},

{
    title: "Kolam Segaran",
    desc: "Kolam peninggalan Kerajaan Majapahit di Trowulan."
}

];

function openPopup(index){

    document.getElementById("popupTitle").innerText =
    data[index].title;

    const popupDesc =
    document.getElementById("popupDesc");

    const viewer =
    document.getElementById("viewer360");

    popupDesc.style.display = "block";

    if(data[index].desc){
        popupDesc.innerText = data[index].desc;
    }else{
        popupDesc.innerText = "";
    }

    if(index === 0){

        viewer.innerHTML = `
        <iframe
        src="https://sketchfab.com/models/b63157b58c4848dda104a5d542616431/embed"
        allowfullscreen>
        </iframe>`;
    }

    else if(index === 1){

        viewer.innerHTML = `
        <iframe
        src="https://sketchfab.com/models/4052c4b9dd3146cea98c5ecb693d4bd4/embed"
        allowfullscreen>
        </iframe>`;
    }

    else if(index === 2){

        viewer.innerHTML = `
        <iframe
        src="https://sketchfab.com/models/fe4c6954634642caaa365ceddba2dae9/embed"
        allowfullscreen>
        </iframe>`;
    }

   else if(index === 3){

        popupDesc.style.display = "none";

        viewer.innerHTML = `

        <div class="book-view">

            <div class="book-cover">

                <img
                src="image/negarakertagama.png"
                alt="Negarakertagama">

                <h3>Kitab Negarakertagama</h3>

                <p>
                Karya Mpu Prapanca yang
                mengisahkan kejayaan
                Majapahit.
                </p>

                <a
                href="https://luk.staff.ugm.ac.id/itd/Jawa/Negarakertagama/Indonesia.pdf"
                target="_blank"
                class="book-btn">

                📖 Baca Kitab Lengkap

                </a>

            </div>

        </div>
        `;
    }

    else if(index === 4){

        viewer.innerHTML = `
        <iframe
        src="https://www.youtube.com/embed/Gcve_A3xgAo?start=221"
        title="Kolam Segaran"
        allowfullscreen>
        </iframe>`;
    }

    document.getElementById("popup")
    .style.display = "flex";
}

function closePopup(){

    document.getElementById("popup")
    .style.display = "none";

    document.getElementById("viewer360")
    .innerHTML = "";
}

window.onclick = function(e){

    const popup =
    document.getElementById("popup");

    if(e.target === popup){

        closePopup();

    }
}