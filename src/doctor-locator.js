class DoctorLocator {

  constructor() {
    this.apiKey = process.env.exports.apiKey;
    this.baseURL = 'https://api.betterdoctor.com/2016-03-01/doctors?';
  }

  careSearch(searchType, searchInput, gpsLocation, searchRadius) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `${this.baseURL}${searchType}=${searchInput}&location=${gpsLocation},${searchRadius}&user_location=${gpsLocation}&skip=0&limit=100&user_key=${this.apiKey}`;
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

export { DoctorLocator };
