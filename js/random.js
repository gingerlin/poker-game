function randomPoker() {
    var pokers = [
        '10.jpg',
        '2.jpg',
        '5.jpg',
        '6.jpg',
        'A.jpg',
        'J.jpg',
        'K.jpg',
        'Q.jpg',
    ];
    var which = Math.floor(Math.random() * 8);
    return 'images/' + pokers[which];
}
