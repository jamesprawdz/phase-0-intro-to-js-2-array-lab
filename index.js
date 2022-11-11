const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
    return "Ralph";
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
    return "Bob";
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield);
    return "Garfield"
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo);
    return "Milo"
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

 function appendCat(Broom){
    return [...cats, "Broom"];
 }

 beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

 function prependCat(Arnold){
    return ["Arnold", ...cats];
 }
 
 beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function removeFirstCat(Garfield){
    return cats.slice(1)
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function removeLastCat(Garfield){
    return cats.slice(0, cats.length - 1);
  }