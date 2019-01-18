export class Locator {



  constructor(characterId) {
    this.characterId = characterId;
  }

  promise() {
    let defaultLatLong = [45.538960, -122.526279];
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
