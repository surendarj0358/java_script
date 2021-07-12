function btn1Clicked() {
    document.getElementById("p1").innerHTML = "Button 1 was clicked"
    alert("Button 1 was clicked")
}

function charsTyped() {
    var chars = document.getElementById("i1").value.length

    document.getElementById("p2").innerText = "Characters typed: " + chars
}

document.getElementById("b2").addEventListener("click", btn2Clicked)

function btn2Clicked() {

    var childl = document.getElementById("p3")

    document.getElementById("main").removeChild(childl)
}

document.getElementById("i2").addEventListener("change", valueEntered)

function valueEntered() {
    var size = document.getElementById("i2").value.length

    document.getElementById("p4").style.fontSize = (size * 2) + "em"
}