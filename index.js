let slideIndex = 0;

  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let txt_slides = document.getElementsByClassName("txt_Slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      txt_slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
   
    slides[slideIndex-1].style.display = "block";  
    txt_slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function calculatePrice(myform){  
  
    var x=document.getElementById("hide");
    x.style.visibility = 'visible';
   
  var elt = document.getElementById("brand");  
  var memory = elt.options[elt.selectedIndex].value;  
  var elt = document.getElementById("engine");  
  var hdd = elt.options[elt.selectedIndex].value;  
  var elt = document.getElementById("servicetype");  
  var network = elt.options[elt.selectedIndex].value;  
  memory = parseInt(memory)*1;  
  hdd = parseInt(hdd)*1;  
  network = parseInt(network)*1;  
    var total = memory+hdd+network;   
  document.getElementById("result").value=total;  
}  
function hide1(){
  var x=document.getElementById("hide");
  x.style.visibility = 'hidden';
}
function myjsfunction()
{
  return false; 
}
