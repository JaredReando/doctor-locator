import { Locator } from './locator';
import { shuffle } from './functions';

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {




  setTimeout(() => {
    let gameCharacters = shuffle(game.returnNames());
    let gameImages = shuffle(game.returnImages());
    let characterHTML = "";
    let characterMenu = "";
    let imageHTML = "";

    gameCharacters.forEach(function(characterArray) {
      characterHTML += `<li>${characterArray[0]}</li>`;
      characterMenu += `<option value="${characterArray[1]}">${characterArray[0]}</option>`;

    });
    $("#game-characters").html(characterHTML);


    gameImages.forEach(function(characterArray) {
      imageHTML += `<li><img id="${characterArray[1]}" src="${characterArray[0]}" alt=""></li>`;
    });
    $("#game-images").html(imageHTML);
    $("#game-characters-select").html(characterMenu);
  }, 1000);

$("#game-images").click(function(event){
  let listId = event.target.id;
  let dropdown = $("#game-characters-select").val();
    if(listId === dropdown) {
      alert("you matched summa'dem!!")
    }




})




  let response;
//search function API
  $("#search-submit").click(function() {
    let characterSearchInput = $("#character-search-input").val();
    $("#character-search-input").val("");

    let request = new XMLHttpRequest();
    const url = `https://rickandmortyapi.com/api/character/?name=${characterSearchInput}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        response = JSON.parse(this.responseText);

        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $("#character-image").attr("src", response.results[0].image);
      $("#character-name").text( response.results[0].name);
      $("#character-status").text( response.results[0].status);
      $("#character-species").text( response.results[0].species);
      $("#character-gender").text( response.results[0].gender);
      $("#character-origin").text( response.results[0].origin.name);

      let searchResults = response.results;
      let searchOutputHTML = "";

      searchResults.forEach(function(element) {
        searchOutputHTML += `<li>${element.name}</li>`
      });
      $("#search-results").html(searchOutputHTML);
    }
  });


});
