// 這裡會隨機從這八張片裡挑出一張牌
// 然後回傳回去
function randomPoker() {
    // 這裡宣告一個陣列
    // 裡面放著八個檔名
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

    // 這裡比較數學一點 我長話短說
    // 就是說Math.random()會是一個0~1之間的一個數字
    // 我們把它乘以8 就會變成一個0~8之間的數字
    // 然後Math.floor()會把一個數字 做無條件捨棄
    // 比方說給5.2432 就會變成5
    var which = Math.floor(Math.random() * 8);

    // 那我們就挑某一個檔名
    // 和"images/"接在一起 回傳回去
    // 這裡pokers[which] 就是說第which個檔名
    // 當然which的範圍是0, 1, 2, ..., 7 總共八張
    return 'images/' + pokers[which];
}
