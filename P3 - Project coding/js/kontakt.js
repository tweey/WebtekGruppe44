// Viser en melding som bekreftelse når kunden har tastet inn informasjon:

var kontaktinfo = document.querySelector(".kontakt");

function bekreftelse(){
    alert("Din henvendelse er mottatt!")
}
kontaktinfo.addEventListener('submit',bekreftelse,true);
