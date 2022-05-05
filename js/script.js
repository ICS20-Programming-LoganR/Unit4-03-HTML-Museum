// Created by: Logan Rodriguez
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

//function
function answer () {
  let sentence = ""
//user input
  let age = parseInt(document.getElementById('age').value)

  let day = document.getElementById('day')
  //if else statements
  if (age < 5) || (age > 95) {
    sentence = "You can go to the museum for free."
  }
  else if (age < 12) && (age >21) {
    sentence = "You can get a discount."
  }
  else {
    sentence = "You have to pay full price."
  }
  //display the results
    document.getElementById('answer').innerHTML = sentence
}