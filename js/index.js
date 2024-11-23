// The HEADER



// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
    mobileMenuOverlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('active');
});

// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;

        // Toggle current accordion
        accordionContent.style.display =
            accordionContent.style.display === 'block' ? 'none' : 'block';

        // Adjust the arrow symbol
        const arrow = header.querySelector('span');
        if (accordionContent.style.display === 'block') {
            header.innerHTML = header.innerHTML.replace('&#9654;', '&#9660;');
        } else {
            header.innerHTML = header.innerHTML.replace('&#9660;', '&#9654;');
        }
    });
});


































// The FOOTER


document.querySelector(".footer-subscribe button").addEventListener("click", () => {
    const emailInput = document.querySelector(".footer-subscribe input");
    if (emailInput.value.trim() === "") {
      alert("Please enter a valid email address!");
    } else {
      alert(`Thank you for subscribing, ${emailInput.value}!`);
      emailInput.value = ""; // Clear input field
    }
  });

  




















  // YOUR IMPACT PAGE



  // Subscribe button functionality
document.querySelector('.subscribe-btn').addEventListener('click', () => {
    const emailInput = document.querySelector('.subscribe-box2 input').value;
  
    if (emailInput.trim() === '') {
      alert('Please enter a valid email address!');
      return;
    }
  
    // Simulate subscription success
    alert(`Thank you for subscribing! We'll keep you updated at ${emailInput}`);
  });
  
  // Donate button functionality
  document.querySelector('.donate-btn').addEventListener('click', () => {
    // Navigate to a donation page or trigger donation modal
    window.location.href = 'donate.html'; // Replace with the actual donation page link
  });
  






















  // FOR THE CAROUSEL ON project.html


  // Optional JavaScript to ensure smooth autoplay (if needed for fallback support)
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel-images");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % 3; // Cycle through 3 images
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }, 4000); // 4-second intervals
});
