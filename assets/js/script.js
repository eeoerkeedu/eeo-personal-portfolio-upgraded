// listing vars

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navOpen() {
  var navBar = document.getElementById("navLinks");
  var eoIcon = document.getElementById("eoIcon");
  if (navBar.style.display === "block") {
    navBar.style.display = "none";
    eoIcon.style.height = "100%";
  } else {
    navBar.style.display = "block";
    eoIcon.style.height = "20%";
  }
}

$("#navIcon").on("click", navOpen);
