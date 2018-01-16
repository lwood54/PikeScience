
// If there is a click anywhere in the window, check
// if it's target is the drop button, if not, then close
// the drop button
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// on click event for drop down button, this function will fire
// it will toggle the "show" class on, which shows the contents of the drop down block
function dropDownMenu() {
    document.getElementById("dropDownMenu").classList.toggle("show");
}
