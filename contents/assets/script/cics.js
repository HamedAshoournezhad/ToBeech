var IADDR = "https://wallpaperaccess.com/full/637969.jpg";
var IADDRDSIZE = 1572864; //bytes

function InitiateSpeedDetection() {
    var WsMCS = window.setTimeout(MeasureConnectionSpeed, 5);
    var StCTO = setInterval(() => { clearTimeout(WsMCS); });
    clearInterval(StCTO);
};

if (window.addEventListener) {
    window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', InitiateSpeedDetection);
}

function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();

    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = IADDRDSIZE * 8;
        var speedMbps = (((bitsLoaded / duration) / 1024).toFixed(2) / 1024).toFixed(2);
        speedMbps.length > 3 ? $("#internet_connection_xmn28xn3 > path").css("fill", "#4DDF00") : null;
        speedMbps.length < 3 ? $("#internet_connection_xmn28xn3 > path").css("fill", "#FF0300") : null;
        speedMbps.length < 1 ? $("#internet_connection_xmn28xn3 > path").css("fill", "#F9FF46") : null;
    }

    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }

    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = IADDR + cacheBuster;
}

var CheckInternetConnection = setInterval(() => {
    if (!window.navigator.onLine) {
        $("#internet_connection_xmn28xn3 > path").css("fill", "#FF0300");
    } else {
        MeasureConnectionSpeed();
    }
}, 10000);