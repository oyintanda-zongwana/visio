$(document).ready(function() {
    // When the checkbox (menu button) is clicked
    $('.menu').on('change', function() {
        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            // Show the dropdown menu
            $('.dropdown-menu').slideDown(300); // You can adjust the speed
        } else {
            // Hide the dropdown menu
            $('.dropdown-menu').slideUp(300); // You can adjust the speed
        }
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Function to navigate to the next/previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to jump to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Wrap around if you reach the end or beginning
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Hide all slides and remove the "active" class from all dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and set the corresponding dot to "active"
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Optional: Auto slide feature
setInterval(function() {
    plusSlides(1); // Move to the next slide every 5 seconds
}, 5000);
