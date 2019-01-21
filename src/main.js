import { DoctorLocator } from './doctor-locator';
import { listItem } from './html-forms'

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
var printMSG = require('zip2gps')



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

function getAvailability(practices) {
  const availability = practices[0].accepts_new_patients;
  if(availability) {
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
  const website = getWebsite(data.practices);
  const availability = getAvailability(data.practices);
  const phoneNumber = getPhoneNumber(data.practices);
  const allInfo = {name: fullName, address: address, phone: phoneNumber, availability: availability};

  return allInfo;

}



$(document).ready(function() {
  printMSG.printMSG();
  console.log(zipConvert(97230));

  $("#search-submit").click(() => {
    let doctorLocator = new DoctorLocator();
    const searchInput = $("#doctor-search-input").val();
    const searchZip = $("#zip-input").val();
    const searchType = $("#search-type").val();
    const searchRadius = $("#search-radius").val();

    $("#doctor-search-input").val("");
    $("#zip-input").val("");
    $("#search-type").val("");
    $("#search-radius").val("");

    const gpsLocation = zipConvert(searchZip);
    console.log("Location: " + gpsLocation);
    console.log("Type: " + searchType);
    console.log("Zip: " + searchZip);
    console.log("Rdaius: " + searchRadius);

    const searchPromise = doctorLocator.careSearch(searchType, searchInput, gpsLocation, searchRadius);

    console.log("Promise: " + searchPromise);

    searchPromise.then((response) => {
      $("#search-results").empty();
      let searchResult = JSON.parse(response);

      searchResult.data.forEach(function(record) {
        const doctorInfoHash = doctorInfo(record);
        const doctorHtmlRecord = listItem(doctorInfoHash);
        $("#search-results").append(doctorHtmlRecord)
      });
    });



  });
});
