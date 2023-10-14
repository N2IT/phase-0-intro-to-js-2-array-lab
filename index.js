// Write your solution here!

let cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop(-1);
}

function destructivelyRemoveFirstCat () {
    return cats.shift(0,1);
}

function appendCat(name) {
    let copyCats = [...cats, name];
    return copyCats;
}

function prependCat(name) {
    let copyCats2 = [name,...cats];
    return copyCats2;
}

function removeLastCat() {
    let copyCats3 = [...cats.slice(0,2)]
    return copyCats3;
}

function removeFirstCat() {
    let copyCat4 = [...cats.slice(1,3)]
    return copyCat4;
}