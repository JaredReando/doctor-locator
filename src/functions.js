export function shuffle(array) {
    let arrayCopy = array.slice(0);
    let copy = [];
    let n = arrayCopy.length
    let i;
    while (n) {
      i = Math.floor(Math.random() * arrayCopy.length);
      if (i in arrayCopy) {
        copy.push(arrayCopy[i]);
        delete arrayCopy[i];
        n--;
      }
    }
    return copy;
  }
