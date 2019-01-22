import { DoctorLocator } from './doctor-locator';
import { listItem } from './html-forms';
import {getPhoneNumber, getWebsite, getAddress, getAvailability, doctorInfo} from './parse-functions';

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
var convert = require('convert-zip-to-gps');

$(document).ready(function() {
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

    const searchPromise = doctorLocator.careSearch(searchType, searchInput, gpsLocation, searchRadius);

    searchPromise.then((response) => {
      $("#search-results").empty();
      let searchResult = JSON.parse(response);
      searchResult.data.forEach(function(record, index) {
        let doctorInfoHash = doctorInfo(record);
        doctorInfoHash.id = (index + 1);
        const doctorHtmlRecord = listItem(doctorInfoHash);
        $("#search-results").append(doctorHtmlRecord)
      });
    });
  });
});
