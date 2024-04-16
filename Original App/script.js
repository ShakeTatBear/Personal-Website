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
    const thanksMessage = document.createElement('p');
    thanksMessage.textContent = "Thanks! I'll contactly you shortly!";
    newsletter.parentNode.replaceChild(thanksMessage, newsletter);
    thanksMessage.classList.add('thanks-message')
 
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


