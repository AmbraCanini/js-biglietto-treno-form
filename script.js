function conteggio() {
    const campoInput = document.getElementById("numerokm");
    const chilometraggio = Number(campoInput.value)
    console.log(chilometraggio);
    const kmBiglietto = 0.21;
    const prezzo = chilometraggio * kmBiglietto;
    console.log(prezzo);
}



