var slideIndex = 1;
displaySlides(slideIndex);

function nextSlide(n) {
	displaySlides((slideIndex += n));
}

function currentSlide(n) {
	displaySlides((slideIndex = n));
}

function displaySlides(n) {
	var i;
	const testimonials = document.getElementsByClassName('testimonial');
	if (n > testimonials.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < testimonials.length; i++) {
		testimonials[i].style.display = 'none';
	}
	testimonials[slideIndex - 1].style.display = 'block';
}

