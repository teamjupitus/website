function showSection(sectionId)
{
    const sections = document.querySelectorAll('.product-section');
    const buttons = document.querySelectorAll('.tab-navigation button');

    sections.forEach(section =>
    {
        section.classList.remove('active');
    });

    buttons.forEach(button =>
    {
        button.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
}

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

    loadSection('./footer.html', 'footer-section');
};