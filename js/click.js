function clickOnPoker(evt) {
    var poker = evt.target;
    poker.click = null;
    poker.style.backgroundImage = 'url(' + randomPoker() + ')';
}

function whenMouseClick() {
    for(var i = 0; i < 16; ++ i) {
        var pokerId = 'poker-' + i;
        var poker = document.getElementById(pokerId);
        poker.onclick = clickOnPoker;
    }
}
