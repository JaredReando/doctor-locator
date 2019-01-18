export class Locator {

  constructor(characterId) {
    this.characterId = characterId;
  }

  promise() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `https://rickandmortyapi.com/api/character/${this.characterId}`;

        request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open("GET", url, true);
      request.send();

    });
  }
}
