const form = document.getElementById("emailForm");
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let formPage = document.querySelector(".container");
let successPage = document.querySelector(".container1");
let confirmationEmail = document.getElementById("confirmation-email");
let dismissButton = document.getElementById("dismiss");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let email = emailInput.value;

  if (validateEmail(email)) {
    confirmationEmail.innerText = email;
    successPage.style.display = "block";
    formPage.style.display = "none";
    emailError.innerHTML = "";
  } else {
    emailError.innerHTML = "Please enter the correct email";
  }
});

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

dismissButton.addEventListener("click", () => {
  successPage.style.display = "none";
  formPage.style.display = "block";
});
