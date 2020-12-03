function load() {
    window.setTimeout(function() { document.getElementById("body").style.visibility = "visible" }, 0);
    document.getElementById("weather_background").style.backgroundImage = "url(/media/background" + (Math.round(Math.random() * 7) + 1) + ".jpg)";
}

var mapZoom = 1;
var path = [];
var data = '{"x": ["0", "1", "0", "1"],"y": ["0", "0", "1", "1"],"next": [{"x": ["0", "1", "0", "1"],"y": ["0", "0", "1", "1"],"next": [{"x": ["0", "1", "0", "1"],"y": ["0", "0", "1", "1"],"next": []},{"x": ["2", "3", "2", "3"],"y": ["0", "0", "1", "1"],"next": []},{"x": ["0", "1", "0", "1"],"y": ["2", "2", "3", "3"],"next": []},{"x": ["2", "3", "2", "3"],"y": ["2", "2", "3", "3"],"next": []}]},{"x": ["2", "3", "2", "3"],"y": ["0", "0", "1", "1"],"next": [{"x": ["4", "5", "4", "5"],"y": ["0", "0", "1", "1"],"next": []},{"x": ["6", "7", "6", "7"],"y": ["0", "0", "1", "1"],"next": []},{"x": ["4", "5", "4", "5"],"y": ["2", "2", "3", "3"],"next": []},{"x": ["6", "7", "6", "7"],"y": ["2", "2", "3", "3"],"next": []}]},{"x": ["0", "1", "0", "1"],"y": ["2", "2", "3", "3"],"next": [{"x": ["0", "1", "0", "1"],"y": ["4", "4", "5", "5"],"next": []},{"x": ["2", "3", "2", "3"],"y": ["4", "4", "5", "5"],"next": []},{"x": ["0", "1", "0", "1"],"y": ["6", "6", "7", "7"],"next": []},{"x": ["2", "3", "2", "3"],"y": ["6", "6", "7", "7"],"next": []}]},{"x": ["2", "3", "2", "3"],"y": ["2", "2", "3", "3"],"next": [{"x": ["4", "5", "4", "5"],"y": ["4", "4", "5", "5"],"next": []},{"x": ["6", "7", "6", "7"],"y": ["4", "4", "5", "5"],"next": []},{"x": ["4", "5", "4", "5"],"y": ["6", "6", "7", "7"],"next": []},{"x": ["6", "7", "6", "7"],"y": ["6", "6", "7", "7"],"next": []}]}]}';
data = JSON.parse(data);

function retraceMap() {
    var coords = data;
    for (let i = 0; i < mapZoom - 1; i++) {
        coords = coords["next"][path[i]];
    }
    document.getElementById("map0").src = "https://tile.openweathermap.org/map/precipitation_new/" + mapZoom + "/" + coords["x"][0] + "/" + coords["y"][0] + ".png?appid=TOKEN";
    document.getElementById("map1").src = "https://tile.openweathermap.org/map/precipitation_new/" + mapZoom + "/" + coords["x"][1] + "/" + coords["y"][1] + ".png?appid=TOKEN";
    document.getElementById("map2").src = "https://tile.openweathermap.org/map/precipitation_new/" + mapZoom + "/" + coords["x"][2] + "/" + coords["y"][2] + ".png?appid=TOKEN";
    document.getElementById("map3").src = "https://tile.openweathermap.org/map/precipitation_new/" + mapZoom + "/" + coords["x"][3] + "/" + coords["y"][3] + ".png?appid=TOKEN";
}

function zoomInMap(id) {
    mapZoom++;
    if (mapZoom > 3) {
        mapZoom = 3;
        return;
    }
    path.push(id);
    retraceMap();
}

function zoomOutMap() {
    mapZoom--;
    if (mapZoom < 1) {
        mapZoom = 1;
        return;
    }
    path.pop();
    retraceMap();
}

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(loadWeather);
// }
// async function loadWeather(position) {
//     // "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=TOKEN"
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=TOKEN&lang=ru");
//     const json = await response.json()
//     console.log(json);
// }
