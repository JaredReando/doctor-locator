import { DoctorLocator } from './doctor-locator';
import { listItem } from './html-forms';
import {getPhoneNumber, getWebsite, getAddress, getAvailability, doctorInfo} from './json-parse-functions';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const convert = require('convert-zip-to-gps');

$(document).ready(function() {
  $("#no-results-found").hide();
  $("#search-results-table").hide();
  
  $("#search-submit").click(() => {
    $("#no-results-found").hide();
    $("#search-results-table").hide();
    const doctorLocator = new DoctorLocator();
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
      $("#search-results-line-items").empty();
      let searchResult = JSON.parse(response);
      if(searchResult.data.length === 0) {
        $("#no-results-found").show();
        $("#no-results-found").text(`Sorry, your search for '${searchInput}' did not return any results. Try again using different search criteria.`)
      } else {
        $("#search-results-table").show();
        searchResult.data.forEach(function(record, index) {
          let doctorInfoHash = doctorInfo(record);
          doctorInfoHash.id = (index + 1);
          const doctorHtmlRecord = listItem(doctorInfoHash);
          $("#search-results-line-items").append(doctorHtmlRecord)
        });
      }
    });
  });
});
