document.getElementById("b1").addEventListener("click", butn1Click)

function butn1Click() {
    console.log("Buttomn 1 Was Pressed")
    document.getElementById("p1").innerHTML = "Button 1 Pressed"
    alert("button was clicked")
}

document.getElementById("i1").addEventListener("change", text1typed)

function text1typed() {
    console.log("THe text was typed")
    var char = document.getElementById("i1").value.length
    document.getElementById("p2").innerHTML = "Characters typed :" + char


}

document.getElementById("b2").addEventListener("click", butn2Click)

function butn2Click() {
    console.log("Buttomn 2 Was Pressed")
    document.getElementById("p3").remove("p3")

}

document.getElementById("i2").addEventListener("change", text2typed)

function text2typed() {
    console.log("THe text was typed")
    var size = document.getElementById("i2").value.length
    document.getElementById("p4").style.fontSize = size + "em"
}