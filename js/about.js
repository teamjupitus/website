window.addEventListener('resize', adjustVideoPlacement);
window.addEventListener('DOMContentLoaded', adjustVideoPlacement);

function adjustVideoPlacement()
{
    const videoContainerDesktop = document.getElementById('video-desktop');
    const videoMobileContainer = document.getElementById('video-mobile-container');

    // Check if screen width is smaller than or equal to 1024px (tablet and mobile)
    if (window.innerWidth <= 1024)
    {
        // Hide the desktop iframe and show the mobile iframe
        videoContainerDesktop.style.display = 'none';
        videoMobileContainer.style.display = 'block';

        // Append the mobile iframe under the Mission and Vision section
        const aboutSection = document.querySelector('.about-content');
        if (!document.getElementById('video-mobile').parentElement.isEqualNode(aboutSection))
        {
            aboutSection.appendChild(videoMobileContainer);
        }

        // Ensure that the about-content section takes the full width now
        const aboutContent = document.querySelector('.about-content');
        aboutContent.style.width = '100%';

    } else
    {
        // Show the desktop iframe and hide the mobile iframe
        videoContainerDesktop.style.display = 'block';
        videoMobileContainer.style.display = 'none';

        // Ensure the desktop video stays in its original place
        const videoSectionDesktop = document.querySelector('.video-container');
        if (!videoSectionDesktop.contains(videoContainerDesktop))
        {
            videoSectionDesktop.appendChild(videoContainerDesktop);
        }

        // Reset about-content width to default on large screens
        const aboutContent = document.querySelector('.about-content');
        aboutContent.style.width = 'auto';
    }
}
