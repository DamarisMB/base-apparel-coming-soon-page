document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const errorMessage = document.getElementById("error-message");
  
    // Basic email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      errorMessage.classList.remove("hidden");
    } else {
      errorMessage.classList.add("hidden");
      // Here you could send the form data to a server, for example
      alert("Thank you for subscribing!");
    }
  });