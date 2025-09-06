// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    // Prevent default submission first
    event.preventDefault();

    // Collect fields
    const fullname = document.getElementById("fname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const resume = document.getElementById("resume").value;

    // Validation checks
    if (fullname === "") {
      alert("Please enter your full name.");
      return;
    }

    if (email === "" || !/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (phone === "" || !/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (dob === "") {
      alert("Please select your date of birth.");
      return;
    }

    if (!gender) {
      alert("Please select your gender.");
      return;
    }

    if (resume === "") {
      alert("Please upload your resume.");
      return;
    }

    // If all checks pass
    alert("Application submitted successfully ✅");
    form.submit(); // Now submit form
  });
});