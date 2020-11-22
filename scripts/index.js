function resetHeader() {
    document.getElementById("header_background").style.height = document.getElementById("header_content").offsetHeight + "px";
}

function load() {
    window.setTimeout(function() { document.getElementById("body").style.visibility = "visible" }, 0);
    document.getElementById("header_background").style.backgroundImage = "url(/media/background" + (Math.round(Math.random() * 7) + 1) + ".jpg)";
    resetHeader();
}
