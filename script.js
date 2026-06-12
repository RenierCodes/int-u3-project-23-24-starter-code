// Declare variables below to save the different divs of your story.
let opening = document.querySelector('.story-opening');

let goInsideBtn = document.querySelector('.option-one');
let goInside = document.querySelector('.option-one-screen');

let goHomeBtn = document.querySelector('.option-two');
let goHome = document.querySelector('.option-two-screen');




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


 goInsideBtn.addEventListener('click', function(){
     goInside.style.display = "block";
     opening.style.display = "none";
     goHomeBtn.style.display = "none";
     goInsideBtn.style.display = "none";
 });

 goHomeBtn.addEventListener('click', function(){
     goHome.style.display = "block";
     opening.style.display = "none";
     goHomeBtn.style.display = "none";
     goInsideBtn.style.display = "none";
 });


// INSERT_VARIABLE.addEventListener('click', function(){

// });