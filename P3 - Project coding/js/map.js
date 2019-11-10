// Lager kart fra koodinater og google sin API
function initMap() {
    let kontor = {lat: 63.3934638, lng: 10.4065978}

    let map = new google.maps.Map(document.getElementById('map'), {zoom: 15, center: kontor});

    let marker = new google.maps.Marker({position: kontor, map: map});
}
