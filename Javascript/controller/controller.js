startKnop.addEventListener("click", function () {
    startSpel();
    toonKaarten();
    toonPunten();
    melding("Spel gestart!");
});

inzetVeld.addEventListener("change", function () {
    inzet = Number(inzetVeld.value);
});

knoppen[0].addEventListener("click", function () {
    if(inzetToegestaan())
    {
        speelRonde("higher");
    }
});

knoppen[1].addEventListener("click", function () {
    if(inzetToegestaan())
    speelRonde("lower");
});

function speelRonde(keuze) {
    if (!gestart) {
        melding("Klik eerst op start");
        return;
    }

    spelerGok(keuze);
    aiGok();

    toonKaarten();
    toonPunten();

    var winnaar = checkWinnaar();
    if (winnaar === "speler") {
        melding("Jij wint!");
        gestart = false;
    }
    if (winnaar === "ai") {
        melding("AI wint!");
        gestart = false;
    }

    var verliezer = checkVerliezer();
    if (verliezer === "speler") {
        melding("jij verliest");
        gestart = false;
    }
    if (verliezer === "ai") {
        melding("AI verliest!");
        gestart = false;
    }
}

