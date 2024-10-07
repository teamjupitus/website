document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const themeStyle = document.getElementById('theme-style');

  // Check user's preferred theme from local storage and apply it
  if (localStorage.getItem('theme') === 'dark') {
    switchToDarkMode();
  } else {
    switchToLightMode();
  }

  // Event listener for theme toggle button
  themeToggle.addEventListener('click', function () {
    if (themeStyle.getAttribute('href').includes('light-mode.css')) {
      switchToDarkMode();
    } else {
      switchToLightMode();
    }
  });

  // Function to switch to dark mode
  function switchToDarkMode() {
    themeStyle.href = 'css/dark-mode.css';
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Change icon to sun for light mode indication
    themeToggle.classList.remove('btn-light');
    themeToggle.classList.add('btn-dark');
    localStorage.setItem('theme', 'dark'); // Save preference in localStorage
  }

  // Function to switch to light mode
  function switchToLightMode() {
    themeStyle.href = 'css/light-mode.css';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Change icon to moon for dark mode indication
    themeToggle.classList.remove('btn-dark');
    themeToggle.classList.add('btn-light');
    localStorage.setItem('theme', 'light'); // Save preference in localStorage
  }
});

// Add scroll event listener to change navbar background
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight && rect.bottom > 0
  );
}

// Function to handle scroll-triggered animation
function handleScroll() {
  const sections = document.querySelectorAll('.section-gradient, .section-white'); // Select sections with your custom classes
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible'); // Remove 'visible' class when the section is out of view
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger animation on page load as well
document.addEventListener('DOMContentLoaded', handleScroll);


document.querySelectorAll('.navbar .dropdown').forEach(function (dropdown) {
  // Show dropdown on mouse enter
  dropdown.addEventListener('mouseenter', function () {
    let dropdownMenu = this.querySelector('.dropdown-menu');
    dropdown.classList.add('show');
    dropdownMenu.classList.add('show');
  });

  // Hide dropdown on mouse leave
  dropdown.addEventListener('mouseleave', function () {
    let dropdownMenu = this.querySelector('.dropdown-menu');
    dropdown.classList.remove('show');
    dropdownMenu.classList.remove('show');
  });
});


// Get the button
const scrollToTopButton = document.getElementById("scrollToTop");

// Show or hide the button depending on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Scroll to top function
scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll effect
    });
};
