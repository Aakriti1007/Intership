var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
  return emailRegex.test(email);
}

document.getElementById('email').addEventListener('input', function() {
  var emailInput = this.value.trim();
  var emailWarning = document.getElementById('emailWarning');

  if (emailInput === '') {
    emailWarning.style.display = 'none';
  } else {
    if (!validateEmail(emailInput)) {
      emailWarning.style.display = 'block';
    } else {
      emailWarning.style.display = 'none';
    }
  }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (!validateEmail(email)) {
    
    var popup = document.getElementById('popup');
    popup.innerText = 'Please Input valid Email Format !!';
    popup.style.display = 'block';
    document.getElementById('email').value = '';
    setTimeout(function() {
      popup.style.display = 'none';
    }, 3000);
    return;
  }
  alert('Form submitted successfully!');
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
});