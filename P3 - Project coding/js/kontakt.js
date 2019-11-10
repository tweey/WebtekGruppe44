// Skaffer elementene fra DOM
let kontaktinfo = document.querySelector(".kontakt");
let btnEl = document.getElementById("btn");

function verifisering() {
    // Lager div element og gir den en class
    let divEl = document.createElement("div");
    divEl.className = "popup";
    // Genererer 2 tilfeldige tall og finner produktet
    let randomNr1  = Math.floor(Math.random() * 11);
    let randomNr2 = Math.floor(Math.random() * 11);
    let randomSum = randomNr1 * randomNr2;
    // Genererer p og input element
    let pEl = document.createElement("p");
    let inputEl = document.createElement("input");
    inputEl.type = "number";
    let text = document.createTextNode("What is "+randomNr1+" * "+randomNr2+"?");

    // Legger elementene til nettsiden
    pEl.appendChild(text)
    divEl.appendChild(pEl)
    divEl.appendChild(inputEl);

    document.body.appendChild(divEl)

    // Lytter etter hvis input er lik produktet av tallene. 
    inputEl.addEventListener("input", () => {
        if (parseInt(inputEl.value) === randomSum) {
            // Hvis de er like fjernes diven, kjører funkjsonen sendmail og refresher (submit) siden
            document.body.removeChild(divEl)
            sendMail()
            kontaktinfo.submit();
        }
    })
    
}
// Bruker innebygd funksjon mailto for å "sende" mail
function sendMail() {
    let tittel = kontaktinfo.emne.value;
    let innhold = kontaktinfo.melding.value;
    window.open('mailto:test@example.com?subject='+tittel +'&body='+innhold);
}

// Lytter etter når submit knappen trykkes
kontaktinfo.addEventListener('submit', function(evt){
    // Bruker preventdefault slik at formen ikke submitter
    evt.preventDefault();
    // disabler knappen slik at den ikke kan trykkes flere ganger
    btnEl.disabled = true;
    // Kjører koden verifisering
    verifisering()
})
