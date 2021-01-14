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