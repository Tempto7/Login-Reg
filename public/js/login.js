const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check username validation
  //{{!-- const usernameRegex = /^[a-zA-Z0-9]{6,12}$/; --}}
  const usernameRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,12}$/;
  if (!usernameRegex.test(username)) {
    alert("Username must be alphanumeric and between 6-12 characters.");
    return;
  }

  // Check password validation
  const passwordRegex = /^[\w!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{6,}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 6 characters and may contain letters, numbers, and special characters."
    );
    return;
  }

  // If both username and password are valid, submit the form
  alert("Form submitted successfully!");
  form.submit();
});
