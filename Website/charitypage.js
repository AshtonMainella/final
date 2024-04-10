document.addEventListener("DOMContentLoaded", function() {
    // Get the select element
    var selectElement = document.getElementById("charityList");
    
    // Get all charity sections
    var charitySections = document.querySelectorAll(".charity-section");

    // Hide all charity sections initially
    charitySections.forEach(function(section) {
        section.style.display = "none";
    });

    // Show the selected charity section
    selectElement.addEventListener("change", function() {
        // Hide all charity sections
        charitySections.forEach(function(section) {
            section.style.display = "none";
        });

        // Get the selected charity section id
        var selectedCharity = this.value;

        // Show the selected charity section
        var selectedSection = document.getElementById(selectedCharity);
        if (selectedSection) {
            selectedSection.style.display = "block";
        }
    });
});