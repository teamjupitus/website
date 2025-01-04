// Get the buttons
const moveToTopBtn = document.getElementById('move-to-top');
const contactUsBtn = document.getElementById('contact-us');
const heroSection = document.getElementById('hero-section');
const contactSection = document.getElementById('contact-section');
const aboutSection = document.getElementById('about-section');


function toggleButtonVisibility()
{
    const isMobile = window.innerWidth <= 768;
    const heroRect = heroSection.getBoundingClientRect();

    // If it's a mobile screen and the Hero section is visible
    if (isMobile && heroRect.top <= 0 && heroRect.bottom > 0)
    {
        contactUsBtn.style.display = 'none';  // Hide button
    } else
    {
        contactUsBtn.style.display = 'block';  // Show button
    }
}

// Initial check when the page loads
toggleButtonVisibility();

// Check visibility as the user scrolls
window.addEventListener('scroll', toggleButtonVisibility);

// Recheck visibility when the window is resized
window.addEventListener('resize', toggleButtonVisibility);

// Scroll to top functionality
function scrollToTop()
{
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll to contact section functionality
function scrollToContact()
{
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Toggle visibility of buttons based on scroll position
window.addEventListener('scroll', () =>
{
    const aboutTop = aboutSection.getBoundingClientRect().top;

    if (aboutTop < 0)
    {
        moveToTopBtn.classList.remove('hidden');
    } else
    {
        moveToTopBtn.classList.add('hidden');
    }
});


