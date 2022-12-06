function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("body").classList.toggle("stop");
}

window.onclick = function(event) {
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

function NotReadyFunction() {
  // Получить снэк-бар DIV
  var x = document.getElementById("snackbar");

  // Добавить "show" класс для DIV
  x.className = "show";

  // После 3 секунд, извлеките класс show из DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}