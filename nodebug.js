	    document.oncontextmenu = function () { return false; }
        document.onkeydown = function () {
        var e = window.event || arguments[0];
        if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            return false;
        } else if ((e.shiftKey) && (e.keyCode == 121)) {
            return false;
        } else if ((e.ctrlKey) && (e.keyCode == 85)) {
            return false;
        }
    };

/**
 * 检测到调试时进行的操作
 */
let onDebug = function () {
    //提示
    document.write('严禁调试！请关闭控制台，刷新恢复');
    /*卡死*/
   //  while (true) {
    //     console.log('hi');
    //    console.clear();
     //}

};

setInterval(function () {
    let st, et;
    st = new Date().getTime();
    debugger;
    et = new Date().getTime();
    if ((et - st) > 1000) {
        onDebug();
    }
}, 1000);


document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
    const e = event || window.event || arguments.callee.caller.arguments[0];

    if (e && e.keyCode == 123) {
        onDebug();
    }
};


let div = document.createElement('div');
Object.defineProperty(div, "id", {
    get: () => {
        clearInterval(loop);
        onDebug();
    }
});
let loop = setInterval(() => {
    console.log(div);
    console.clear();
});


