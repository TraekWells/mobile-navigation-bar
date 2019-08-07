(function() {
  // Get a hold of the elements needed to do stuff with
  const navContainer = document.querySelector(".nav");
  const navItems = document.querySelectorAll(".nav__item");
  const body = document.querySelector("body");

  // Create the function that will set the initial loaded state of the page
  const init = function() {
    navItems[0].classList.add("active");
    body.style.backgroundColor = getComputedStyle(navItems[0].children[0]).fill;
  };

  // Create the function that will handle clicking on the different navigation items
  const updateSelection = function(e) {
    // Create a variable to hold the color
    let color;
    navItems.forEach(function(item) {
      item.classList.remove("active");
    });
    e.target.classList.add("active");

    // Set the color variable to the click target's first child. This will be the SVG.
    color = getComputedStyle(e.target.children[0]).fill;

    // Set the body background-color to the color variable
    body.style.backgroundColor = color;
  };

  // Add the event listener
  navContainer.addEventListener("click", updateSelection);

  init();
})();

// I think I might be starting to fall in love with Javascript
