function symptomSearch(symptomSearchTerms) {

  let defaultLatLong = '45.538960, -122.526279';
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptomSearchTerms}&location=${defaultLatLong}&user-location=${defaultLatLong}&skip=0&limit=10&user_key=${exports.apiKey}`;

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

export { symptomSearch };
