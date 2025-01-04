// Function to load HTML content into a specified section
function loadSection(url, elementId)
{
    fetch(url)
        .then(response => response.text())
        .then(data =>
        {
            // Load the HTML content
            const section = document.getElementById(elementId);
            section.innerHTML = data;

            // After loading the content, trigger the scroll animation
            triggerScrollAnimation(); // Trigger the scroll animation after content loads
        })
        .catch(error => console.error('Error loading section:', error));
}

// Function to check if an element is in the viewport
// Function to check if an element is in the viewport
function isInViewport(element)
{
    const rect = element.getBoundingClientRect();
    // Trigger as soon as the section starts to come into view
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Function to trigger the scroll animation
function triggerScrollAnimation()
{
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach((element, index) =>
    {
        // Check if the element is in the viewport
        if (isInViewport(element))
        {
            // If element is in viewport, animate it
            const isLeft = index % 2 === 0; // Alternate animation direction
            element.classList.add(isLeft ? 'animate-from-left' : 'animate-from-right');
            element.classList.remove('animate-on-scroll'); // Remove to avoid re-triggering
        }
    });
}

// Listen for scroll event to trigger animations on scroll
window.addEventListener('scroll', triggerScrollAnimation);

// Trigger animation when the page loads
document.addEventListener('DOMContentLoaded', () =>
{
    triggerScrollAnimation();
});

// Function to load content dynamically (if needed)
function loadSection(url, elementId)
{
    fetch(url)
        .then(response => response.text())
        .then(data =>
        {
            const section = document.getElementById(elementId);
            section.innerHTML = data;
            triggerScrollAnimation(); // Trigger animation after loading content
        })
        .catch(error => console.error('Error loading section:', error));
}

window.onload = function ()
{
    // Load sections
    loadSection('./html/hero.html', 'hero-section');
    loadSection('./html/about.html', 'about-section');
    loadSection('./html/services.html', 'services-section');
    loadSection('./html/products.html', 'product-section');
    loadSection('./html/contact.html', 'contact-section');
    loadSection('./html/footer.html', 'footer-section');
};

document.querySelectorAll('a.nav-link').forEach(link =>
{
    link.addEventListener('click', function (e)
    {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement)
        {
            // Get the position of the target section and subtract the navbar height
            const offset = targetElement.getBoundingClientRect().top + window.scrollY - 80; // Adjust for navbar height
            window.scrollTo({ top: offset, behavior: 'smooth' }); // Smooth scroll to the target
        }
    });
});

