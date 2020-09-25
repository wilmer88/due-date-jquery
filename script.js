$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  var noteform = document.querySelector("#noty");
  var noteform2 = document.querySelector("#notoo");
  var noteform3 = document.querySelector("#note3");
  var noteform4 = document.querySelector("#note4");
  var noteform5 = document.querySelector("#note5");
  var noteform6 = document.querySelector("#note6");
  var noteform7 = document.querySelector("#note7");
  
  

  function pullingfromlocal() {
    var savedNote = JSON.parse(localStorage.getItem("nueve"));
    noteform.textContent = savedNote;
    var savedNote2 = JSON.parse(localStorage.getItem("diez"));
    noteform2.textContent = savedNote2;
    var savedNote3 = JSON.parse(localStorage.getItem("once"));
    noteform3.textContent = savedNote3;
    var savedNote4 = JSON.parse(localStorage.getItem("doze"));
    noteform4.textContent = savedNote4;
    var savedNote5 = JSON.parse(localStorage.getItem("una"));
    noteform5.textContent = savedNote5;
    var savedNote6 = JSON.parse(localStorage.getItem("dos"));
    noteform6.textContent = savedNote6;
    var savedNote7 = JSON.parse(localStorage.getItem("tres"));
    noteform7.textContent = savedNote7;
    
  }
 pullingfromlocal();


  $(document).on("click","button", function (event) {
    event.preventDefault();
    var savedItem = $(this).prev().val();
    console.log(savedItem);
    localStorage.setItem(this.id, JSON.stringify(savedItem));
    
  });
});
