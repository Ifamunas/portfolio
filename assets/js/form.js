// Make sure to include the EmailJS SDK in your HTML before this script:
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
// And initialize EmailJS with your user ID:
emailjs.init('zFCduWar9iwl-L68i'); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm('service_oemct06', 'template_e2mcx4p', this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
});
