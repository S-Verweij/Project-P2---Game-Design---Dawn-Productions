var spelers = document.querySelectorAll(".player");
var startKnop = document.querySelector(".start-button .btn");
var inzetVeld = spelers[0].querySelector("input");
var knoppen = spelers[0].querySelectorAll(".btn");
const nameBtn = document.querySelector('.nameBtn');
const namePlayer = document.querySelector('.player .name');

function toonKaarten() {
    spelers[0].querySelector(".card").innerText = spelerKaart;
    spelers[1].querySelector(".card").innerText = aiKaart;
}

function toonPunten() {
    spelers[0].querySelector(".points-box").innerText =
        "Points: " + spelerPunten;

    spelers[1].querySelector(".points-box").innerText =
        "Points: " + aiPunten;
}

function melding(tekst) {
    messageDiv=document.querySelector('.message');
    messageDiv.innerText=tekst;
}

function getInzet(){
    let d=document.querySelector('#inzet').value;
    return d;
}

nameBtn.addEventListener('click', function () {
  const newName = prompt('Kies je naam of verander het');
  namePlayer.textContent = newName;
});
