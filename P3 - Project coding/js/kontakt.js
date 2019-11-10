// Viser en melding som bekreftelse når kunden har tastet inn informasjon:
let kontaktinfo = document.querySelector(".kontakt");
let btnEl = document.getElementById("btn");

function verifisering() {
    let divEl = document.createElement("div");
    divEl.className = "popup";
    let randomNr1  = Math.floor(Math.random() * 11);
    let randomNr2 = Math.floor(Math.random() * 11);
    let randomSum = randomNr1 * randomNr2;
    let pEl = document.createElement("p");
    let inputEl = document.createElement("input");
    inputEl.type = "number";
    let text = document.createTextNode("What is "+randomNr1+" * "+randomNr2+"?");

    pEl.appendChild(text)
    divEl.appendChild(pEl)
    divEl.appendChild(inputEl);

    document.body.appendChild(divEl)

    inputEl.addEventListener("input", () => {
        if (parseInt(inputEl.value) === randomSum) {
            document.body.removeChild(divEl)
            sendMail()
            kontaktinfo.submit();
        }
    })
    
}
function sendMail() {
    let tittel = kontaktinfo.emne.value;
    let innhold = kontaktinfo.melding.value;
    window.open('mailto:test@example.com?subject='+tittel +'&body='+innhold);
}
        
kontaktinfo.addEventListener('submit', function(evt){
    evt.preventDefault();
    console.log(evt);
    btnEl.disabled = true;
    verifisering()
})
