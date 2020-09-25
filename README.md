# due-date-jquery
  
  This project is a daily planner aplication for the user story I was given
  by the bootcamp.
    Its a aplication to save events for daily use

     //short description of the html and script.js file work/bugs:

      the moment js timeblock apears after using dinamic object manipulation, I was able to target the containerThen used the .text method and inserted the moment js code for the time block.
    also may add the script for the moment js was already given to us in the bottom of the html. The rest of the file are rows  that contain a text area  with one colomn for the 'hour', 10 coloms for the 'text area' and the last 1 coloumn for the 'save buttons'.
    
    The only bugs I know of is the text area overlap eachother when 
    inputing text

---------------------------------------
code talk:
   //line 4-11 in js file
   dinamically 3 pulled html values and assign them to variables using jquery
    
   //line 14-31
   This call back function is _pullingfromlocal_ and what it does it takes all the text area id's and uses json format and parses the save item from local storage in to a variable. Then assign the variable to the be the text content of that row

   //line 34-41
   using j queery the entire document was selected for a onclick event
   using the the save button for a perameter
   then made a variable and asign its value to eaqual the savebuton 
   parent/chiled text value methods
   then we use localstorage to set the item by identifying it with this and the id then using json stringfy the saved text.
![screenshot](./app.png)
[this is the link to the page](https://wilmer88.github.io/due-date-jquery/)