 let cats=["Milo", "Otis", "Garfield"] 
    catslength = 0;
  
    cats.push("Milo", "Otis", "Garfield");
    function destructivelyAppendCat(name) {
        cats.push(name); 
    }
    cats.push("Milo", "Otis", "Garfield",);
    function  destructivelyPrependCat(name) {
        cats.unshift(name);
    }
 
    cats.push("Milo", "Otis", "Garfield",);
    function  destructivelyRemoveLastCat() {
        cats.pop(name);
    }
    cats.push("Milo", "Otis", "Garfield",);
    function  destructivelyRemoveFirstCat() {
        cats.shift(name);
    }
    cats.push("Milo", "Otis", "Garfield",);
    function  appendCat(name) {
        let catscopy=cats.slice(name);
        catscopy.push(name);
        return catscopy;
    }
    cats.push("Milo", "Otis", "Garfield",);
    function prependCat(name) {
        let catscopy=cats.slice(name);
        catscopy.unshift(name);
        return catscopy;
    }
    cats.push("Milo", "Otis", "Garfield",);
    function removeLastCat() {
        let catscopy=cats.slice(name);
        catscopy.pop(name);
        return catscopy;
    }
    cats.push("Milo", "Otis", "Garfield",);
    function removeFirstCat() {
        let catscopy=cats.slice(name);
        catscopy.shift(name);
        return catscopy;
    }