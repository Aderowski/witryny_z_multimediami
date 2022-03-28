var bohater = document.getElementsByClassName("champ1")

var Zamien = function() {
    var karty = document.getElementsByClassName("champions-cards")
    for (var i = 0; i < bohater.length; i++) {
        if(karty[i].id == this.id)
            karty[i].style.display = "flex"
        else{
           karty[i].style.display = "none"
        }
    }
    var id = this.id;
    
};

for (var i = 0; i < bohater.length; i++) {
    bohater[i].addEventListener('click', Zamien, false);
}