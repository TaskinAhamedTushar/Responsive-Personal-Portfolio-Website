const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    // Animate header
    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Deactivate and reactivate barsBox with delay
    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    // Remove active class from all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Set up event listeners for navigation links
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            // Reset active states
            activePage();

            // Set the clicked link and corresponding section as active
            link.classList.add('active');
            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

// Add click event listener to the logo link
if (logoLink) {
    logoLink.addEventListener('click', () => {
        if (!navLinks[0].classList.contains('active')) {
            // Reset active states
            activePage();

            // Set the first link and corresponding section as active
            navLinks[0].classList.add('active');
            setTimeout(() => {
                sections[0].classList.add('active');
            }, 1100);
        }
    });
}
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-details'); // Assuming .resume-details is a class

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add 'active' class to the clicked button
        btn.classList.add('active');

        // Remove 'active' class from all resume details
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        // Add 'active' class to the corresponding resume detail
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.protfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail'); // Fixed selector

    // Update active state for portfolio details
    portfolioDetails.forEach((detail, idx) => {
        if (idx === index) {
            detail.classList.add('active');
        } else {
            detail.classList.remove('active');
        }
    });

    // Update carousel slide position
    if (imgSlide) {
        imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    }

    // Manage button states
    if (index === 0) {
        arrowLeft.classList.add('disabled');
    } else {
        arrowLeft.classList.remove('disabled');
    }

    if (index === portfolioDetails.length - 1) { // Dynamically determine max index
        arrowRight.classList.add('disabled');
    } else {
        arrowRight.classList.remove('disabled');
    }
};

// Initialize portfolio state
activePortfolio();

// Right arrow click event
arrowRight.addEventListener('click', () => {
    const portfolioDetails = document.querySelectorAll('.portfolio-detail'); // Ensure dynamic bounds
    if (index < portfolioDetails.length - 1) { // Adjust max index dynamically
        index++;
        activePortfolio();
    }
});

// Left arrow click event
arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activePortfolio();
    }
});