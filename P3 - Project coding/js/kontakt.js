// Viser en melding som bekreftelse når kunden har tastet inn informasjon:

var kontaktinfo = document.querySelector("#kontaktinfo");

function bekreftelse(){
    alert("Takk for din henvendelse! Du vil bli kontaktet så fort som mulig!")
}
kontaktinfo.addEventListener('submit',bekreftelse,true);
