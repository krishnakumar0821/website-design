 // image slider
 var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("dot");

     if (n > slides.length) {
         slideIndex = 1;
     }
     if (n < 1) {
         slideIndex = slides.length;
     }

     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }

     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }

     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
 }

 // Automatically change slides every 3 seconds
 setInterval(function () {
     plusSlides(1);
 }, 3000);




 // FAQ section 
 var faq = document.getElementsByClassName("faq-page");
 var i;

 for (i = 0; i < faq.length; i++) {
     faq[i].addEventListener("click", function () {
         /* Toggle between adding and removing the "active" class,
         to highlight the button that controls the panel */
         this.classList.toggle("active");

         /* Toggle between hiding and showing the active panel */
         var body = this.nextElementSibling;
         if (body.style.display === "block") {
             body.style.display = "none";
         } else {
             body.style.display = "block";
         }
     });
 }