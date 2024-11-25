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
  











  // Various Donate and Contact button functionality


  document.querySelector('.donate-btn').addEventListener('click', () => {
    window.location.href = 'donate.html';
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



































// payment for on reef.html
// Form Slide Navigation
const slides = document.querySelectorAll('.form-slide');
const nextBtn = document.querySelector('.next-btn');
const paymentOptions = document.querySelectorAll('.payment-banner');
const freqBtns = document.querySelectorAll('.freq-btn');
const customAmountInput = document.getElementById('custom-input');
const customAmountRadio = document.getElementById('custom-amount');
const form = document.getElementById('donation-form');

let currentSlide = 0;

// Handle Frequency Button Selection
freqBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    freqBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Enable Custom Amount Input
customAmountRadio.addEventListener('change', () => {
  customAmountInput.disabled = !customAmountRadio.checked;
});

// Move to Next Slide
nextBtn.addEventListener('click', () => {
  if (validateSlide1()) {
    moveToSlide(1);
  }
});

// Handle Payment Option Selection
paymentOptions.forEach((option) => {
  option.addEventListener('click', () => {
    if (option.id === 'credit-card') {
      moveToSlide(2);
    } else {
      alert('This payment method is not yet implemented.');
    }
  });
});

// Submit Form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your donation!');
  form.reset();
  moveToSlide(0);
});

// Move Between Slides
function moveToSlide(slideIndex) {
  slides[currentSlide].classList.remove('active');
  slides[slideIndex].classList.add('active');
  currentSlide = slideIndex;
}

// Validate Slide 1
function validateSlide1() {
  const selectedAmount = document.querySelector('input[name="amount"]:checked');
  if (!selectedAmount) {
    alert('Please select a donation amount.');
    return false;
  }
  if (selectedAmount.value === 'custom' && customAmountInput.value === '') {
    alert('Please enter a custom amount.');
    return false;
  }
  return true;
}






















// Progress meter
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text p');

function updateProgress(current, goal) {
  const percentage = Math.min((current / goal) * 100, 100).toFixed(0);
  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `${percentage}% of $${goal.toLocaleString()} Goal Reached`;
}

// Example: Update progress to 82% of $80,000
updateProgress(65600, 80000);

























// Gift shop

$(document).ready(function () {
  let cartCount = 0;

  // Add to Cart Functionality
  $('.add-to-cart').on('click', function () {
    cartCount++;
    $('#cart-count').text(cartCount);
  });

  // Filter Products
  $('#filter-form input').on('change', function () {
    const category = $(this).val();
    $('.product').show();
    if (category !== 'all') {
      $('.product').not(`[data-category="${category}"]`).hide();
    }
  });
});














// shopping cart

document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceEl = document.getElementById("total-price");

  function calculateTotal() {
    let total = 0;
    cartItems.forEach((item) => {
      const price = parseFloat(item.querySelector(".item-details p:nth-child(2)").textContent.slice(7));
      const qty = parseInt(item.querySelector(".quantity input").value);
      total += price * qty;
    });
    totalPriceEl.textContent = `$${total.toFixed(2)}`;
  }

  // Update Total on Quantity Change
  cartItems.forEach((item) => {
    item.querySelector(".quantity input").addEventListener("input", calculateTotal);
  });

  // Remove Item from Cart
  cartItems.forEach((item) => {
    item.querySelector(".remove-item").addEventListener("click", () => {
      item.remove();
      calculateTotal();
    });
  });
});





























// gift a reef payment carousel
    function goToSlide2() {
        // Hide Slide 1
        document.getElementById('slide-1').style.display = 'none';
        // Show Slide 2
        document.getElementById('slide-2').style.display = 'flex';
    }






    function goToSlide3() {
        // Hide Slide 2
        document.getElementById('slide-2').style.display = 'none';
        // Show Slide 3
        document.getElementById('slide-3').style.display = 'flex';
    }
