export class Locator {


let defaultLatLong = [45.538960, -122.526279];

  constructor(characterId) {
    this.characterId = characterId;
  }

  promise() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?${this.characterId}`;

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
