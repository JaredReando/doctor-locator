import { DoctorLocator } from './doctor-locator';
import { shuffle } from './functions';
import { testData } from './response.js'

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function getPhoneNumber(practices) {
  const allPhoneNumbers = practices[0].phones;
  let phoneNumber = '';
  allPhoneNumbers.forEach(function(phone) {
    if(phone.type === 'landline') {
      phoneNumber = phone.number
    }
  });

  return phoneNumber;
}

function getWebsite(practices) {
  const website = practices[0].website;
  return website;
}

function getAddress(practices) {
  const street = practices[0].visit_address.street;
  const city = practices[0].visit_address.city;
  const state = practices[0].visit_address.state;
  const zip = practices[0].visit_address.zip;
  const address = `${street} ${city}, ${state} ${zip}`;

  return address;
}

function newPatientMessage(practices) {
  const newPatientStatus = practices[0].accepts_new_patients;
  if(newPatientStatus) {
    return "Accepting new patients at this location";
  } else {

    return "This location not accepting new patients";
  }
}


function doctorInfo(data) {
  const firstName = data.profile.first_name;
  const lastName = data.profile.last_name;
  const fullName = `${firstName} ${lastName}`;
  const address = getAddress(data.practices);
  const acceptsPatients = newPatientMessage(data.practices);
  const phoneNumber = getPhoneNumber(data.practices);
  console.log("Full name:", fullName);
  console.log("address:", address);
  console.log("new patients?:", acceptsPatients);
  console.log("phone:", phoneNumber);

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
