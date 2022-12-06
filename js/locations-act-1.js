var modal_1 = document.getElementById("myModal-1");
var modal_2 = document.getElementById("myModal-2");
var modal_3 = document.getElementById("myModal-3");
var modal_4 = document.getElementById("myModal-4");
var modal_5 = document.getElementById("myModal-5");
var modal_6 = document.getElementById("myModal-6");
var modal_7 = document.getElementById("myModal-7");
var modal_8 = document.getElementById("myModal-8");
var modal_9 = document.getElementById("myModal-9");
var modal_10 = document.getElementById("myModal-10");
var modal_11 = document.getElementById("myModal-11");
var modal_12 = document.getElementById("myModal-12");
var modal_13 = document.getElementById("myModal-13");
var modal_14 = document.getElementById("myModal-14");
var modal_15 = document.getElementById("myModal-15");

var btn_1 = document.getElementById("myBtn-1");
var btn_2 = document.getElementById("myBtn-2");
var btn_3 = document.getElementById("myBtn-3");
var btn_4 = document.getElementById("myBtn-4");
var btn_5 = document.getElementById("myBtn-5");
var btn_6 = document.getElementById("myBtn-6");
var btn_7 = document.getElementById("myBtn-7");
var btn_8 = document.getElementById("myBtn-8");
var btn_9 = document.getElementById("myBtn-9");
var btn_10 = document.getElementById("myBtn-10");
var btn_11 = document.getElementById("myBtn-11");
var btn_12 = document.getElementById("myBtn-12");
var btn_13 = document.getElementById("myBtn-13");
var btn_14 = document.getElementById("myBtn-14");
var btn_15 = document.getElementById("myBtn-15");
var btn_16 = document.getElementById("myBtn-16");
var btn_17 = document.getElementById("myBtn-17");
var btn_18 = document.getElementById("myBtn-18");


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("body").classList.toggle("stop");
}


btn_1.onclick = function() {
  modal_1.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_2.onclick = function() {
  modal_2.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_3.onclick = function() {
  modal_3.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_4.onclick = function() {
  modal_4.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_5.onclick = function() {
  modal_5.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_6.onclick = function() {
  modal_6.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_7.onclick = function() {
  modal_7.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_8.onclick = function() {
  modal_8.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_9.onclick = function() {
  modal_9.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_10.onclick = function() {
  modal_10.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_11.onclick = function() {
  modal_11.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_12.onclick = function() {
  modal_12.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_13.onclick = function() {
  modal_13.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_14.onclick = function() {
  modal_14.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_15.onclick = function() {
  modal_15.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_16.onclick = function() {
  modal_9.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_17.onclick = function() {
  modal_11.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn_18.onclick = function() {
  modal_15.style.display = "block";
  document.body.style.overflow = 'hidden';
}

window.onclick = function(event) {
  if (event.target == modal_1) {
	modal_1.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_2) {
  modal_2.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_3) {
  modal_3.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_4) {
  modal_4.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_5) {
  modal_5.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_6) {
  modal_6.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_7) {
  modal_7.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_8) {
  modal_8.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_9) {
  modal_9.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_10) {
  modal_10.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_11) {
  modal_11.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_12) {
  modal_12.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_13) {
  modal_13.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_14) {
  modal_14.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (event.target == modal_15) {
  modal_15.style.display = "none";
  document.body.style.overflow = 'scroll';
  }
  if (!event.target.matches('.dropbtn')) {	
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var body = document.getElementById("body");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) 
      {
        openDropdown.classList.remove('show');
      }
      body.classList.remove('stop');
    }
  }
}

function openPage(pageName,elmnt,color) {
  
  var tablinks = document.getElementsByClassName("locations__btn");
  var i;
  for (i = 0; i < tablinks.length; i++) {
    var openDropdown = tablinks[i];
    if (openDropdown.classList.contains('focus')) {
    openDropdown.classList.remove('focus');
    }
  }
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("locations__cards");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("locations__btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "flex";
  elmnt.style.backgroundColor = color;
}