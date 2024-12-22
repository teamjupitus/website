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
};
