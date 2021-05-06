function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//this function display the first image in the slideshow when the page opens
var slideIndex = 1;
showSlides(slideIndex);

//this function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//this function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}; //when last slide is reached, tells it to start at first slide
    if (n < 1) {slideIndex = slides.length};//if at first slide and descending, go to last slide
    for (i = 0; i < slides.length; i++) { //sets all the slides display to none
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { //removes the active styling from all dots
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block"; //displays the current image
    dots[slideIndex - 1].className += " active";//this adds the active display settings to the corresponding dot
}