import { DoctorLocator } from './doctor-locator';
import { shuffle } from './functions';

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $("#search-submit").click(() => {
    let doctorLocator = new DoctorLocator();
    const searchInput = $("#doctor-search-input").val();
    $("#doctor-search-input").val("");

    let newSearch = doctorLocator.symptomSearch(searchInput)

    let apiObject = newSearch.then((value) => {
      let apiObject = JSON.parse(value)
      return apiObject;
    });

    console.log(apiObject);
  });
});
