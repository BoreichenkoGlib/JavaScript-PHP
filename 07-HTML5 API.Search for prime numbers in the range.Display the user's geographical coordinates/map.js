var lati = document.getElementById("latitude");
var longi = document.getElementById("longi");
var latitude;
var longitude;

function initMap() {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            alert('Last time YOU were HERE: ' +
                position.coords.latitude + ", " + position.coords.longitude);
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            lati.innerHTML = "Your Latitude: " + latitude;
            longi.innerHTML = "Your Longitude: " + longitude;
        }
    );

    // функции карты
    var options = {
        zoom: 8,
        center: {lat: 50.2442474, lng: 28.637345699999997}
    }

    // новая карта
    var map = new google.maps.Map(document.getElementById('map'), options);

    //  событие "клик"
    google.maps.event.addListener(map, 'click', function (event) {
        // добавить метку
        addMarker({coords: event.latLng});
    });

    var markers = [
        {
            coords: {lat: 50.2442474, lng: 28.637345699999997},
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h1>You\'re Here!:)</h1>'
        }
    ];

    // просмотрт меток
    for (var i = 0; i < markers.length; i++) {
        // добавить метку
        addMarker(markers[i]);
    }

    // добавить функцию метки
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,

        });


        // проверка
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({content: props.content});

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }
    }
}
