var kaarten = [];
var spelerKaart = 0;
var aiKaart = 0;

var spelerPunten = 10;
var aiPunten = 10;

var inzet = 0;
var gestart = false;

function maakKaarten() {
    kaarten = [];
    for (var i = 1; i <= 13; i++) {
        kaarten.push(i);
    }
}

function pakKaart() {
    var random = Math.floor(Math.random() * kaarten.length);
    return kaarten.splice(random, 1)[0];
}

function startSpel() {
    maakKaarten();
    spelerKaart = pakKaart();
    aiKaart = pakKaart();
    spelerPunten = 10;
    aiPunten = 10;
    gestart = true;
}

function inzetToegestaan(){
    
    if(spelerPunten>getInzet())
        return true;
    else
        return false;
}
function spelerGok(keuze) {
    var nieuweKaart = pakKaart();

    if (keuze === "higher" && nieuweKaart > spelerKaart) {
        spelerPunten += inzet;
    } else if (keuze === "lower" && nieuweKaart < spelerKaart) {
        spelerPunten += inzet;
    } else {
        spelerPunten -= inzet;
    }

    spelerKaart = nieuweKaart;
}

function aiGok() {
    if (Math.random() < 0.5) {
        aiPunten += 5;
    } else {
        aiPunten -= 5;
    }

    aiKaart = pakKaart();
}

function checkWinnaar() {
    if (spelerPunten >= 50) return "speler";
    if (aiPunten >= 50) return "ai";
    return "";
}

function checkVerliezer() {
    if (spelerPunten <= 0) return "speler";
    if (aiPunten <= 0) return "ai";
    return "";
}

