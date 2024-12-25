
function toggleDescription(dotsElement)
{
    const shortText = dotsElement.previousElementSibling.previousElementSibling;
    const fullText = dotsElement.previousElementSibling;

    if (dotsElement.textContent === 'Read More..')
    {
        shortText.style.display = 'none';
        fullText.style.display = 'inline';
        dotsElement.textContent = ' Show Less';
    } else
    {
        shortText.style.display = 'inline';
        fullText.style.display = 'none';
        dotsElement.textContent = 'Read More..';
    }
}
