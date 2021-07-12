// assignment

for (i = 0; i <= 5; i++) {
    var randomNumber = Math.random()
    console.log(randomNumber)
}


// Random number generator

function randomNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    var num = Math.floor(Math.random() * (min - max)) //+ min
    console.log(num)
}

randomNum(1, 5)