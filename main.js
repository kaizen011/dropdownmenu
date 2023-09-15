function toggleDropdown(button) {
    const menu = button.nextElementSibling; // Get the next element (dropdown menu)
  
    // Toggle the 'show' class to display/hide the menu
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }
  
  // Add event listeners to all dropdown toggles with the class 'dropdown-toggle'
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('mouseenter', function () {
      toggleDropdown(this); // Pass the clicked button as an argument
    });
  
    // Optionally, you can add hover behavior by changing the event listener to 'mouseenter'
    // toggle.addEventListener('mouseenter', function () {
    //   toggleDropdown(this);
    // });
  });