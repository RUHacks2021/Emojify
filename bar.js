async function createBar(){
    /*var bar = document.createElement("DIV");
    bar.setAttribute("id","myProgress");
    var bar2 = document.createElement("DIV");
    bar2.setAttribute("id","myBar");
    document.body.appendChild(bar);
    document.getElementById("myProgress").appendChild(bar2);*/
    document.getElementById("barstart").style.visibility = "visible";
    var i = 0;
    function move() {
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                }
            }
        }
    }
    move();


}
