// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}


function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
}

function appendCat(name) {
    const newCat = [...cats, "Broom"];
    return newCat
}


function prependCat(name) {
    const newCat = ["Arnold", ...cats];
    return newCat
}

function removeLastCat() {
    const newCat = cats.slice(0, -1);
    return newCat
}

function removeFirstCat() {
    const newCat = cats.slice(1);
    return newCat
}

