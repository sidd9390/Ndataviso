var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activa");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function toggleButtonVisibility() {
  var button = document.getElementById('top_bt');
  if (window.scrollY > 40) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

// Add event listener for scroll event
window.addEventListener('scroll', function() {
  toggleButtonVisibility();
});

// Call the function initially to set the initial state of the button
toggleButtonVisibility();