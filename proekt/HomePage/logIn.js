let name = localStorage.getItem("name") || "Guest";
let flag = localStorage.getItem("flag") || "false";
let email = localStorage.getItem("email") || "guest@example.com";
let password = localStorage.getItem("password") || "password";

function showDialog() {
  document.getElementById("signInDialog").showModal();
}

function closeDialog() {
  document.getElementById("signInDialog").close();
}

function showRegisterDialog() {
  document.getElementById("registerDialog").showModal();
}

function closeRegisterDialog() {
  document.getElementById("registerDialog").close();
}

function submit() {
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
  if (localStorage.getItem("email") === emailInput && localStorage.getItem("password") === passwordInput) {
    closeDialog();
    document.getElementById("user").innerText = "Welcome " + localStorage.getItem("name");
    localStorage.setItem("flag", "true");
  } else {
    alert("Incorrect email or password!");
  }
}

function register() {
  const emailInput = document.getElementById("emailRegister").value;
  const passwordInput = document.getElementById("passwordRegister").value;
  const nameInput = document.getElementById("name").value;

  localStorage.setItem("email", emailInput);
  localStorage.setItem("password", passwordInput);
  localStorage.setItem("name", nameInput);

  closeRegisterDialog();
  alert("Registration successful! You can now log in.");
}

document.addEventListener("DOMContentLoaded", () => {
  const loginSection = document.getElementById("user");
  const registerLink = document.getElementById("login/register");

  if (flag === "true") {
    loginSection.innerText = "Welcome " + name;
  }

  loginSection.addEventListener("click", showDialog);
  registerLink.addEventListener("click", showRegisterDialog);

  // New code to handle search functionality
  const searchInput = document.querySelector('.searchInput');
  searchInput.addEventListener('input', function() {
    if (searchInput.value.trim().toLowerCase() === "gray car") {
      window.location.href = 'GrayCar.html';  // Redirect to GrayCar.html
    }
  });
});
