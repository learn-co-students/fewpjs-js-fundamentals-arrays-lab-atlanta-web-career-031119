// Write your solution here!
const append = ["Milo", "Otis", "Garfield"]
const prepend = ["Milo", "Otis", "Garfield"]
const removeLast = ["Milo", "Otis", "Garfield"]
const removeFirst = ["Milo", "Otis", "Garfield"]

function appendFunc(ls) {
    ls.push('Odie')
    return ls
};

function prependFunc(ls) {
    ls.unshift('Odie')
    return ls
};

function removeLastFunc(ls) {
    ls.pop()
    return ls
};

function removeFirstFunc(ls) {
    ls.shift(1)
    return ls
}

appendFunc(append)
prependFunc(prepend)
removeLastFunc(removeLast)
removeFirstFunc(removeFirst)