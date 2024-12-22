document.addEventListener("DOMContentLoaded", () =>
{
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".nav-link");

    // Close navbar when a nav-link is clicked
    navLinks.forEach((link) =>
    {
        link.addEventListener("click", () =>
        {
            if (navbarCollapse.classList.contains("show"))
            {
                navbarToggler.click(); // Simulate a click on the toggler to close
            }
        });
    });

    // Handle scroll behavior to prevent unexpected closing
    let previousScroll = window.pageYOffset;
    window.addEventListener("scroll", () =>
    {
        const currentScroll = window.pageYOffset;

        // Prevent auto-closing if navbar is open
        if (navbarCollapse.classList.contains("show"))
        {
            // Adjust this logic if needed to ensure smooth UX
            if (currentScroll > previousScroll)
            {
                // Scrolling down (optional: close navbar on scroll down)
                navbarToggler.click();
            }
        }
        previousScroll = currentScroll;
    });
});


document.addEventListener("DOMContentLoaded", function ()
{
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function ()
    {
        if (window.scrollY > 50)
        {
            navbar.classList.add("scrolled-desktop");
        } else
        {
            navbar.classList.remove("scrolled-desktop");
        }
    });
});

