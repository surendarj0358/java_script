// assignment 18

function compare(myArr) {


    for (var i = 0; i < myArr.length; i++) {
        for (var j = i + 1; j < myArr.length; j++) {
            if (myArr[i] === myArr[j]) {
                console.log("Its Same")
            } else {
                console.log("Its Differernt")
            }
            console.log("value 1 = " + myArr[i] + ": valuen2n = " + myArr[j])
        }
    }
}


const arr = [1, 2, 3, 5, 1]
compare(arr)


const arr = [1, 1, 1, 1, 1]
compare(arr)

const arr = [true, 2, true, 5, false]
compare(arr)

const arr = [1, "ball", 3, "ball", 1]
compare(arr)