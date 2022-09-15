$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
  var noteform = document.querySelector("#noty");
  var noteform2 = document.querySelector("#notoo");
  var noteform3 = document.querySelector("#note3");
  var noteform4 = document.querySelector("#note4");
  var noteform5 = document.querySelector("#note5");
  var noteform6 = document.querySelector("#note6");
  var noteform7 = document.querySelector("#note7");
  var timeVar = moment().format("h a");
  if (timeVar === "9 am"){
      noteform.setAttribute("class", "present");
         
            noteform2.setAttribute("class", "col-sm-10 future");
            noteform3.setAttribute("class", "col-sm-10 future");
            noteform4.setAttribute("class", "col-sm-10 future");
            noteform5.setAttribute("class", "col-sm-10 future");
            noteform6.setAttribute("class", "col-sm-10 future");
            noteform7.setAttribute("class", "col-sm-10 future");
    } else if (timeVar === "10 am"){
      noteform2.setAttribute("class", "col-sm-10 present");
      noteform.setAttribute("class", "col-sm-10 past");
      noteform3.setAttribute("class", "col-sm-10 future");
      noteform4.setAttribute("class", "col-sm-10 future");
      noteform5.setAttribute("class", "col-sm-10 future");
      noteform6.setAttribute("class", "col-sm-10 future");
      noteform7.setAttribute("class", "col-sm-10 future");
    }else if (timeVar === "11 am"){
      noteform3.setAttribute("class", "col-sm-10 present");
      noteform.setAttribute("class", "col-sm-10 past");
      noteform2.setAttribute("class", "col-sm-10 past");
      noteform4.setAttribute("class", "col-sm-10 future");
      noteform5.setAttribute("class", "col-sm-10 future");
      noteform6.setAttribute("class", "col-sm-10 future");
      noteform7.setAttribute("class", "col-sm-10 future");
    }else if (timeVar === "12 pm"){
      noteform4.setAttribute("class", "col-sm-10 present");
      noteform.setAttribute("class", "col-sm-10 past");
      noteform2.setAttribute("class", "col-sm-10 past");
      noteform3.setAttribute("class", "col-sm-10 past");
      noteform5.setAttribute("class", "col-sm-10 future");
      noteform6.setAttribute("class", "col-sm-10 future");
      noteform7.setAttribute("class", "col-sm-10 future");
    }else if (timeVar === "1 pm"){
      noteform5.setAttribute("class", "col-sm-10 present");
      noteform.setAttribute("class", "pcol-sm-10 ast");
      noteform2.setAttribute("class", "col-sm-10 past");
      noteform3.setAttribute("class", "col-sm-10 past");
      noteform4.setAttribute("class", "col-sm-10 past");
      noteform6.setAttribute("class", "col-sm-10 future");
      noteform7.setAttribute("class", "col-sm-10 future");
    }else if (timeVar === "2 pm"){
      noteform6.setAttribute("class", "col-sm-10 present");
      noteform.setAttribute("class", "col-sm-10 past");
      noteform2.setAttribute("class", "col-sm-10 past");
      noteform3.setAttribute("class", "col-sm-10 past");
      noteform4.setAttribute("class", "col-sm-10 past");
      noteform5.setAttribute("class", "col-sm-10 past");
      noteform7.setAttribute("class", "col-sm-10 future");
      
    }else if (timeVar === "3 pm"){
      noteform7.setAttribute("class", "col-sm-10 present");
      noteform.setAttribute("class", "col-sm-10 past");
      noteform2.setAttribute("class", "col-sm-10 past");
      noteform3.setAttribute("class", "col-sm-10 past");
      noteform4.setAttribute("class", "col-sm-10 past");
      noteform5.setAttribute("class", "col-sm-10 past");
      noteform6.setAttribute("class", "col-sm-10 past");
      
    }

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
