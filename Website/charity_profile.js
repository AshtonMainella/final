document.addEventListener("DOMContentLoaded", function() {
    // Get the "Volunteer Now" button
    var volunteerButton = document.getElementById("volunteerButton");

    // Add event listener to the "Volunteer Now" button
    volunteerButton.addEventListener("click", function() {
        // Display the contact form
        document.getElementById("contactForm").style.display = "block";
    });
});
