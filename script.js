//form validation
const form = document.querySelector('.newsletter form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Proceed with form submission
  fetch('/submit-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email })
  })
  .then(response => response.json())
  .then(data => {
    // Display confirmation message on the website
    const confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = data.message;
    form.appendChild(confirmationMessage);
    
    // Remove confirmation message after 3 seconds with a fade out effect
    setTimeout(() => {
      confirmationMessage.style.opacity = 0;
      confirmationMessage.style.transition = 'opacity 1s';
    }, 1000);
    
    setTimeout(() => {
      confirmationMessage.remove();
    }, 2000);
  })
  .catch(error => console.error('Error:', error));
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

//ScrollReveal
document.querySelectorAll('a [href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//revolving door animation
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5 // Trigger when 50% of the skills section is in the viewport
});

// Target the skills section
const skillsSection = document.querySelector('.skills');

// Start observing the skills section
observer.observe(skillsSection);

//particles for background

// Function to toggle card visibility
function toggleCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.classList.toggle('hidden'); // Toggle the 'hidden' class
  });
}

//toggle cards
document.getElementById('toggleCardsButton').addEventListener('click', function() {
  toggleCards();
});



