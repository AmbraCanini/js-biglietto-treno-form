
const formBiglietto = document.getElementById("formbiglietto");
formBiglietto.addEventListener("submit", function (event) {
    event.preventDefault();
    conteggio();
});

function conteggio() {
    const campoInput = document.getElementById("numerokm");
    const chilometraggio = Number(campoInput.value)
    console.log(chilometraggio);
    const kmBiglietto = 0.21;
    const prezzo = chilometraggio * kmBiglietto;
    console.log(prezzo);
    const fasciaEta = document.getElementById("eta").value;
    let sconto
    if (fasciaEta === "Minorenne") {
        sconto = 0.20;
    } else if (fasciaEta === "Adulto") {
        sconto = 0;
    } else if (fasciaEta === "Over 65") {
        sconto = 0.40;
    }


    const nomeViaggiatore = document.getElementById("nome").value;
    const prezzoFinale = prezzo * (1 - sconto);

    console.log(prezzoFinale);

    const container = document.querySelector(".messaggio");
    container.textContent = `Riepilogo biglietto:
Viaggiatore: ${nomeViaggiatore}
Prezzo base: ${prezzo.toFixed(2)} €
Tariffa applicata: ${fasciaEta}
Prezzo finale: ${prezzoFinale.toFixed(2)} €`;
}



