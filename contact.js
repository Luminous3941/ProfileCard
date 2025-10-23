document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const success = document.getElementById("success");

  let isValid = true;

  // Helper to show error
  function showError(input, messageText) {
    const errorEl = document.getElementById(`error-${input.id}`);
    errorEl.textContent = messageText;
    isValid = false;
  }

  // Reset
  document.querySelectorAll("small[id^='error-']").forEach(el => (el.textContent = ""));
  success.textContent = "";

  // Validation rules
  if (!name.value.trim()) showError(name, "Full name is required");
  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) showError(email, "Enter a valid email");
  if (!subject.value.trim()) showError(subject, "Subject is required");
  if (message.value.trim().length < 10) showError(message, "Message must be at least 10 characters");

  if (isValid) {
    success.textContent = "✅ Your message was sent successfully!";
    success.classList.remove("hidden");
    this.reset();
  }
});
