//Some vars 
var f1 = document.getElementById("f1"),
    f2 = document.getElementById("f2"),
    // side and body and nav 
    f3 = document.getElementById("f3"),
    f4 = document.getElementById("f4"),
    // open and close search
    f5 = document.getElementById('f5'),
    f6 = document.getElementById("f6");

//functions
f1.onclick = function() {
    f1.style.display = "none";
    f2.style.display = "inline-block";
    f3.style.marginRight = "0";
    f4.style.marginLeft = "-250px";
}

f2.onclick = function() {
    f1.style.display = "inline-block";
    f2.style.display = "none";
    f3.style.marginRight = "-250px";
    f4.style.marginLeft = "0";
}

f6.onclick = function() {
    f5.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == f5) {
        f5.style.display = "none";
    }
}
