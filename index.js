// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"] 

cats;

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    const copyCat = [...cats, name];
    return copyCat
}

function prependCat(name) {
    const copyOfCopyCat = [name, ...cats];
    return copyOfCopyCat;
}

function removeLastCat(name) {
    const newCats = cats.slice(0, -1);
    return newCats;
}

function removeFirstCat(name) {
    const newCats = cats.slice(1,3);
    return newCats;
}