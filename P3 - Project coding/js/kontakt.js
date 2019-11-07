// Viser en melding som bekreftelse når kunden har tastet inn informasjon:

var kontaktinfo = document.querySelector("#kontaktinfo");

function bekreftelse(){
    alert("Takk for din henvendelse! Du vil bli kontaktet så fort som mulig! Trykk på den linken for å gå tilbake: <a href="index.html"></a>")
}
kontaktinfo.addEventListener('submit',bekreftelse,true);