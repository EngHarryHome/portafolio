function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Get overlay and modal elements
var overlay = document.getElementById("overlay");
var modal = document.getElementById("modal");
var closeButton = document.getElementById("close");

// Show overlay and modal
overlay.style.display = "block";

// Close modal when close button is clicked
closeButton.onclick = function() {
  overlay.style.display = "none";
}

// Close modal when user clicks outside of it
window.onclick = function(event) {
  if (event.target == overlay) {
    overlay.style.display = "none";
  }
}

var currentDate = new Date();

// Format the date as desired (e.g., "April 1, 2024")
var formattedDate = currentDate.toLocaleDateString('en-AU', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
});

// Insert formatted date into the HTML element with id "currentDate"
document.getElementById('currentDate').textContent = formattedDate;