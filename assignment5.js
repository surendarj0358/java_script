// assingment getting a value using prompt and stores that in array

var mother = prompt("your first favourite book")
var whiteNights = prompt("your second favourite book")
var mahashewta = prompt("your third favourite book")
var alchemist = prompt("your fourth favourite book")
var lajja = prompt("your fifth favourite book")
var roots = prompt("your sixth favourite book")

var favouriteBooks = []
favouriteBooks.push(mother)
favouriteBooks.push(whiteNights)
favouriteBooks.push(mahashewta)
favouriteBooks.push(alchemist)
favouriteBooks.push(lajja)
favouriteBooks.unshift(roots)
favouriteBooks.pop()

var favouriteBooks = [ "roots","mother","whiteNights","ahashweta","alchemist","lajja" ]