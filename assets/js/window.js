var cursor = { x: 0, y: 0 };
var dragobj = null, h1, i1, oLeft, oTop;

function makeObjectToDrag(obj) {
    if (obj) {
        dragobj = obj;
        document.onmousedown = startMove;
        document.onmouseup = drop;
        document.onmousemove = moving;
    }
}

function startMove(e) {
    if (dragobj) {
        getCursorPos(e);
        dragobj.classList.add("moving");
        i1 = cursor.x - dragobj.offsetLeft;
        h1 = cursor.y - dragobj.offsetTop;
    }
}

function drop() {
    if (dragobj) {
        dragobj.classList.remove("moving");
        dragobj = null;
    }
}

function getCursorPos(e) {
    e = e || window.event;
    if (e.pageX || e.pageY) {
        cursor.x = e.pageX;
        cursor.y = e.pageY;
    } else {
        var de = document.documentElement;
        var db = document.body;
        cursor.x = e.clientX + (de.scrollLeft || db.scrollLeft) - (de.clientLeft || 0);
        cursor.y = e.clientY + (de.scrollTop || db.scrollTop) - (de.clientTop || 0);
    }
    return cursor;
}

function moving(e) {
    getCursorPos(e);
    if (dragobj) {
        oLeft = cursor.x - i1;
        oTop = cursor.y - h1;
        dragobj.style.left = oLeft + 'px';
        dragobj.style.top = oTop + 'px';
    }
}
