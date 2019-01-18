class DoctorLocator {

  constructor() {
    this.apiKey = process.env.exports.apiKey;
    this.baseURL = 'https://api.betterdoctor.com/2016-03-01/doctors?';
  }

  symptomSearch(symptomSearchTerms) {

    let portlandLatLong = '45.538960, -122.526279';
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `${this.baseURL}query=${symptomSearchTerms}&location=${portlandLatLong},50&user_location=${portlandLatLong}&skip=0&limit=10&user_key=${this.apiKey}`;

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
