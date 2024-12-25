// Function to load HTML content into a specified section
function loadSection(url, elementId)
{
    fetch(url)
        .then(response => response.text())
        .then(data =>
        {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading section:', error));
}

// On page load, dynamically load Hero and About sections
window.onload = function ()
{
    // Load Hero Section HTML
    loadSection('./html/hero.html', 'hero-section');

    // Load About Section HTML
    loadSection('./html/about.html', 'about-section');

    // Load Services Section HTML
    loadSection('./html/services.html', 'services-section');

    // Load Product Section HTML
    loadSection('./html/products.html', 'product-section');

    // Load Contact Section HTML
    loadSection('./html/contact.html', 'contact-section');

    // Load Footer Section HTML
    loadSection('./html/footer.html', 'footer-section');
};
