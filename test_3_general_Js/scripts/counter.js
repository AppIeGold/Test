let a = 0

function counterPlus() {
    document.getElementById("points").innerHTML = (a += 1);
    console.log(a);
}
function counterMinus() {
    if (a > 0) {
    document.getElementById("points").innerHTML = (a -= 1);
    }
    console.log(a);
}
