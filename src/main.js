import { DoctorLocator } from './doctor-locator';
import { shuffle } from './functions';

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



// function getAddress();



$(document).ready(function() {
  $("#search-submit").click(() => {
    let doctorLocator = new DoctorLocator();
    const searchInput = $("#doctor-search-input").val();
    $("#doctor-search-input").val("");

    let newSearch = doctorLocator.symptomSearch(searchInput)

    let apiObject = newSearch.then((response) => {
      let apiObject = JSON.parse(response)
       console.log(`${apiObject.data[0].profile.first_name} ${apiObject.data[0].profile.last_name}`);
       console.log(`${apiObject.data[0].practices[0].accepts_new_patients} ${apiObject.data[0].practices[0].name}`)
    });

    console.log(apiObject);
  });
});
