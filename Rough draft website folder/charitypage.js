function changeCharity() {
    var charityList = document.getElementById("charityList");
    var selectedCharity = charityList.value;
    var sections = document.querySelectorAll(".charity-section");

    sections.forEach(function(section) {
        if (section.id === selectedCharity) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

// Initially hide all sections except the first one
document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll(".charity-section");
    sections.forEach(function(section, index) {
        if (index !== 0) {
            section.style.display = "none";
        }
    });
});