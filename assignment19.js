// assignment 19

function fizzBuzz(start, end) {
    for (start; start <= end; start++) {
        if (start % 3 === 0 && start % 5 === 0) {
            console.log("FizzBuzz")
        } else if (start % 3 === 0) {
            console.log("Fizz")

        } else if (start % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(start)
        }
    }
}


fizzBuzz(true, false)
fizzBuzz(2, 43)
fizzBuzz("a", "b")
fizzBuzz(-4, -2)