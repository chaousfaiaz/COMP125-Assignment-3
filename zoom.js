/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var photoSelected = photoOrderArray[2];
var figFilename = "images/IMG_0" + photoSelected + ".jpg";

// ===================================================================================================
// =========================== Code Added Starts Here ================================================
// ===================================================================================================

// Adds the image to the favorite list.
function addFavorites()
{
   var imgList = window.opener.document.getElementsByName("favorites");
   
   // Checks if the list is full.
   if(imgList.length < 5){
      // Calls the fuctions in photos.js
      window.opener.addFavorites(photoSelected);
   }
   else{
      alert("Please remove one image first. Only five are allowed.");
   }
}

// ===================================================================================================
// =========================== Code Added Finishes Here ==============================================
// ===================================================================================================


/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener();
}

/* close window */
function closeWin() {
   window.close();
}

/* create event listener for close button */
function createEventListener() {
   var closeWindowDiv = document.getElementsByTagName("p")[0];
   var addFavoritesDiv = document.getElementsByTagName("p")[1];
   if (closeWindowDiv.addEventListener) {
     closeWindowDiv.addEventListener("click", closeWin, false); 
     addFavoritesDiv.addEventListener("click", addFavorites, false); 
   } else if (closeWindowDiv.attachEvent)  {
     closeWindowDiv.attachEvent("onclick", closeWin);
     addFavoritesDiv.attachEvent("onclick", addFavorites);
   }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;