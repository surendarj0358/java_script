// assignment 17
function palindrome(word) {
    let splitWord = word.split("")
    splitWord = splitWord.reverse()
    splitWord = splitWord.join("")



    if (word.toLowerCase().replace(/\s/g, "") === splitWord.toLowerCase().replace(/\s/g, "")) {
        return true
    }


}

palindrome("civic  ")
palindrome("  radar")
palindrome("le vel")
palindrome("r o t o r")
palindrome("Surendar.j")