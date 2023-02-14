const form = document.getElementById('forms');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password-confirmation');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!username.value) {
    alert('Please enter a username.');
    return;
  }

  if (!email.value) {
    alert('Please enter an email address.');
    return;
  }

  if (!password.value) {
    passwordError.innerHTML = 'Please enter a password.';;
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match.');
    return;
  }
  

  // Submit form data to the server

  window.location.href = 'homeAccessed-teacher.html';
 
});




const menuBtn = document.querySelector(".menuBtn");
        const navigation = document.querySelector(".navigation")


        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active")
            navigation.classList.toggle("active")

        });