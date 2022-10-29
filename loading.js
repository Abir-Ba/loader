function open() {
    document.getElementById('loaderGif').style.display = 'block';
    document.getElementById('backGround').style.display = 'block';
}

function close() {
    document.getElementById('loaderGif').style.display = 'none';
    document.getElementById('backGround').style.display = 'none';
}
        
function loadAjax() {
    open();
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                close();
                document.getElementById("results").innerHTML = ajax.responseText;
            }
        }
        ajax.open("GET", "data.txt", true);
        ajax.send();
    }
