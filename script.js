$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  var note = document.querySelector("#notes");
  var nineam = document.querySelector("nine");
  var savebutton = document.querySelector("#save");
  var noteform = document.querySelector("#noty");
  var noteform2 = document.querySelector("#notoo");
  var savedEvent = [];

  function getsaved() {
    var savedNote = JSON.parse(localStorage.getItem("9"));
    noteform.textContent = savedNote;
    var savedNote2 = JSON.parse(localStorage.getItem("10"));
    noteform2.textContent = savedNote2;
  }
  getsaved();
  savebutton.addEventListener("click", function (event) {
    event.preventDefault();
    var savedItem = $(this).prev().val();
    console.log(savedItem);
    localStorage.setItem(this.data, JSON.stringify(savedItem));
    // var noteText = note.nodeValue.trim();
    // if(noteText === ""){
    //     return;
  });
});
