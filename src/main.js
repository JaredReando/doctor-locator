import { DoctorLocator } from './doctor-locator';
import { listItem } from './html-forms'

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
var convert = require('convert-zip-to-gps');



function getPhoneNumber(practices) {
  const allPhoneNumbers = practices[0].phones;
  let phoneNumber = '';
  allPhoneNumbers.forEach(function(phone) {
    if(phone.type === 'landline') {
      phoneNumber = phone.number
    }
  });
  let phoneArray = phoneNumber.split('');
  phoneArray.splice(0,0,'(');
  phoneArray.splice(4,0,') ');
  phoneArray.splice(9,0,'-');
  phoneNumber = phoneArray.join('');
  return phoneNumber;
}

function getWebsite(practices) {
  const website = practices[0].website;
  return website;
}

function getImageURL(practices) {

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
    return "Yes";
  } else {
    return "No";
  }
}


function doctorInfo(data) {
  const firstName = data.profile.first_name;
  const lastName = data.profile.last_name;
  const fullName = `${firstName} ${lastName}`;
  const imageURL = data.profile.image_url;
  const address = getAddress(data.practices);
  const website = getWebsite(data.practices);
  const availability = getAvailability(data.practices);
  const phoneNumber = getPhoneNumber(data.practices);
  const allInfo = {imageURL: imageURL, name: fullName, address: address, phone: phoneNumber, availability: availability};

  return allInfo;

}



$(document).ready(function() {
  console.log("String: " + convert.zipConvert('97230'));
  console.log("Integer: " + convert.zipConvert(97230))

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

    const gpsLocation = convert.zipConvert(searchZip);
    console.log("Location: " + gpsLocation);
    console.log("Type: " + searchType);
    console.log("Zip: " + searchZip);
    console.log("Rdaius: " + searchRadius);

    const searchPromise = doctorLocator.careSearch(searchType, searchInput, gpsLocation, searchRadius);

    console.log("Promise: " + searchPromise);

    searchPromise.then((response) => {
      $("#search-results").empty();
      let searchResult = JSON.parse(response);
      // debugger;
      searchResult.data.forEach(function(record, index) {
        let doctorInfoHash = doctorInfo(record);
        doctorInfoHash.id = (index + 1);
        const doctorHtmlRecord = listItem(doctorInfoHash);
        $("#search-results").append(doctorHtmlRecord)
      });
    });



  });
});
