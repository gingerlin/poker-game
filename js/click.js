// var yyyy; 意思是宣告一個變數叫yyyy
// 變數妳很熟了嘛 那就不講了

// 這一個叫做whenMouseClick的function
// 在js/main.js的main裡被跑過
// 就是告訴每張卡片 如果被滑鼠按到的時候 要做些什麼事情
function whenMouseClick() {
    // 這是for迴圈
    // 就分別叫16張卡片 說你被按到的時候 要做什麼
    // 我們在index.html裡有寫著poker-0, poker-1, poker-2, ..., poker-15這16張撲克牌
    // 去看看吧
    for(var i = 0; i < 16; ++ i) {
        // 這一行會把"poker-"和i接在一起
        // 比方說i跑到7的時候
        // 就會接成"poker-7"
        var pokerId = 'poker-' + i;

        // 這裡是說從index.html裡找一找
        // 有沒有id叫做poker-7的東西
        // 如果有的話 請把它拿給我
        // 我會叫它poker
        var poker = document.getElementById(pokerId);

        // 把剛剛拿回來的poker拿來
        // 說如果你被按了
        // 就去做clickOnPoker裡面說的事情
        poker.onclick = clickOnPoker;
    }
}

// 這個function會把撲克牌隨機地翻開來
// 裡面有接一個東西叫evt 是event的縮寫
// 意思是"事件"
// 其實就是"滑鼠按到了撲克牌上的事件" 沒什麼大不了的事件
function clickOnPoker(evt) {
    // 看一下這個事件 它的target
    // 也就是事件的主角 是誰被按啦
    // 我們也用一個叫poker的變數接起來
    var poker = evt.target;

    // 如果這張牌被按過了
    // 那再按它就不要有動作了
    // null意思是"什麼也沒有"的意思
    poker.onclick = null;

    // 我們放一張圖片在這一張撲克牌裡
    // 這裡"poker.style.backgroundImage"的意思是說"poker這張牌 的花樣 的背景圖片"
    // 裡面的點點"." 是"的"的意思
    // 我們把randomPoker()的結果設定成它的背景圖片
    // 這裡randomPoker()的結果會是"images/5.jpg" 或是"images/K.jpg"之類的
    poker.style.backgroundImage = 'url(' + randomPoker() + ')';
}

