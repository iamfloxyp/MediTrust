// Password Toggler

let showPasswordBtn = document.querySelector("#hide-password");
let showConfirmPasswordBtn = document.querySelector("#hide-confirm-password");

let passwordInp = document.querySelector("#password");
let confirmPasswordInp = document.querySelector("#confirm-password");
let passwordChecklistItems = document.querySelectorAll(".list-item");
showPasswordBtn?.addEventListener("click", () => {
  // toggle icon
  showPasswordBtn.classList.toggle("fa-eye");
  showPasswordBtn.classList.toggle("fa-eye-slash");

  passwordInp.type = passwordInp.type === "password" ? "text" : "password";
});

//same function for password.
showConfirmPasswordBtn?.addEventListener("click", () => {
  // toggle icon
  showConfirmPasswordBtn.classList.toggle("fa-eye");
  showConfirmPasswordBtn.classList.toggle("fa-eye-slash");

  confirmPasswordInp.type =
    confirmPasswordInp.type === "password" ? "text" : "password";
});

//  string password validation
let validationRegex = [
  { regex: /.{8,}/ }, //minimum of 8 characters
  { regex: /[0-9]/ }, //numbers from 0-9
  { regex: /[a-z]/ }, //letters from a-z (lowercase)
  { regex: /[A-Z]/ }, //letters from A-Z (uppercase)
  { regex: /[^A-Za-z0-9]/ }, //special characters
];

passwordInp?.addEventListener("keyup", () => {
  //set that all conditions are met initially
  let allValid = true;
  validationRegex.forEach((item, i) => {
    let isValid = item.regex.test(passwordInp.value);

    if (isValid) {
      passwordChecklistItems[i]?.classList.add("checked");
    } else {
      passwordChecklistItems[i]?.classList.remove("checked");
      //set that all conditions are not met because at least one is not true
      allValid = false;
    }
  });
  //find the div that contains the entire popup
  const passwordDiv = document.querySelector(".password_checklist");

  if (passwordDiv) {
    if (allValid) {
      //hide it if all conditions are met
      passwordDiv.style.display = "none";
    } else {
      //display it if there is a condition that isn't met
      passwordDiv.style.display = "block";
    }
  }
});

// check confirm password
function checkPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  let email = document.getElementById("email").value;
  let fullName = document.getElementById("user").value;
  console.log(password, confirmPassword);

  let messsage = document.getElementById("message");

  if (fullName.length == 0) {
    alert("Please enter your full name");
    return false;
  }
  if (email.length == 0) {
    alert("Please enter a valid email");
    return false;
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    alert("Please enter a valid email");
    return false;
  }

  // Check password
  if (
    password.length < 8 ||
    !/\d/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/[^a-zA-Z0-9]/.test(password)
  ) {
    alert("Please enter a valid password");
    return false;
  }

  if (password.length != 0) {
    if (password == confirmPassword) {
      message.textContent = "Password match";
      message.style.backgroundColor = "#3ae374";
      return true;
    } else {
      message.textContent = "Password doesn't match";
      message.style.backgroundColor = "#ff4d4d";
    }
  } else {
    message.textContent = "Password can't be empty";
    message.style.backgroundColor = "#ff4d4d";
  }
  return false;
}

//STYLING OF THE VERIFICATION PAGE
const OTPInputs = document.querySelectorAll(".otp-input");

window.onload = () => {
  alert("Window loaded");
};
window.onload = () => {
  console.log("Window loaded");
  OTPInputs[0]?.focus();
};

OTPInputs.forEach((input) => {
  input.addEventListener("input", () => {
    console.log("Input event fired");
    const currentInput = input;
    console.log("Current input:", currentInput.value);
    const nextInput = currentInput.nextElementSibling;

    if (currentInput.value.length >= 2 && currentInput.value.length == 2) {
      currentInput.value = ""; // Clear current input if it reaches maximum length
      console.log("Current input cleared");
    }
    if (
      nextInput !== null &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
      console.log("Next input enabled and focused");
    }

    if (nextInput === null) {
      window.location.href = "formprofile.html";
    }
  });
});
