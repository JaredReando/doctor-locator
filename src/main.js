import { DoctorLocator } from './doctor-locator';
import { shuffle } from './functions';
import { testData } from './response.js'

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function getAddress(practices) {
  const street = practices[0].visit_address.street;
  const city = practices[0].visit_address.city;
  const state = practices[0].visit_address.state;
  const zip = practices[0].visit_address.zip;
  const address = `${street} ${city}, ${state} ${zip}`;

  return address;
}


function doctorInfo(data) {
  let firstName = data.profile.first_name;
  let lastName = data.profile.last_name;
  const fullName = `${firstName} ${lastName}`;
  const address = getAddress(data.practices);
  console.log(fullName);
  console.log(address);

}



$(document).ready(function() {
  $("#search-submit").click(() => {
    let doctorLocator = new DoctorLocator();
    const searchInput = $("#doctor-search-input").val();
    $("#doctor-search-input").val("");

    let newSearch = doctorLocator.symptomSearch(searchInput)

    newSearch.then((response) => {
      let searchResult = JSON.parse(response);
      doctorInfo(searchResult.data[0]);

    });



  });
});
