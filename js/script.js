function switchSlide(slideAndButtonNumber, sliderControls, slides) {
	sliderControls[slideAndButtonNumber].addEventListener("click", function() {
		if (!sliderControls[slideAndButtonNumber].classList.contains("active")) {
			for (var i = 0; i < sliderControls.length; i++) {
					if (sliderControls[i].classList.contains("active")) {
						sliderControls[i].classList.remove("active");
						sliderControls[slideAndButtonNumber].classList.add("active");

						for (var j = 0; j < slides.length; j++) {
							slides[j].classList.add("hidden");
						}
						slides[slideAndButtonNumber].classList.remove("hidden");
						return;
					}
			}
		}
	})
}

(function productSliderManage() {
	var sliderControlsWrap = document.querySelector(".slider-control");
	var sliderControls = sliderControlsWrap.querySelectorAll("button");
	var slides = document.querySelectorAll(".slider-item");

	switchSlide(0, sliderControls, slides);
	switchSlide(1, sliderControls, slides);
	switchSlide(2, sliderControls, slides);	
})();

(function manageServicesSlider() {
	var sliderWrap = document.querySelector(".services-wrapper");
	var sliderControls = sliderWrap.querySelectorAll(".services-toggle-item a");
	var slides = sliderWrap.querySelectorAll(".services-slider-item");

	switchSlide(0, sliderControls, slides);
	switchSlide(1, sliderControls, slides);
	switchSlide(2, sliderControls, slides);
})(); 

(function manageModalFeedback() {
	var button = document.querySelector(".write-us-button");
	var modalFeedback = document.querySelector(".modal-feedback");
	var closeModal = document.querySelector(".write-us-close");

	button.addEventListener("click", function(evt) {
		evt.preventDefault();
		modalFeedback.classList.remove("hidden");

		closeModal.addEventListener("click", function closeClickHandler () {
			modalFeedback.classList.add("hidden");
			closeModal.removeEventListener("click", closeClickHandler);
		})
		document.addEventListener("keydown", function pressEscHandler(evt) {
			if (evt.keyCode === 27) {
				modalFeedback.classList.add("hidden");
			}
			document.removeEventListener("keydown", pressEscHandler);
		})
	})
})();

(function manageModalMap() {
	var miniMap = document.querySelector(".contact-map");
	var modalMap = document.querySelector(".modal-map");
	var closeModal = document.querySelector(".map-close");

	miniMap.addEventListener("click", function(evt) {
		evt.preventDefault();
		modalMap.classList.remove("hidden");

	closeModal.addEventListener("click", function closeClickHandler () {
		modalMap.classList.add("hidden");
		closeModal.removeEventListener("click", closeClickHandler);
	})
	document.addEventListener("keydown", function pressEscHandler(evt) {
		if (evt.keyCode === 27) {
			modalMap.classList.add("hidden");
		}
		document.removeEventListener("keydown", pressEscHandler);
	})
	})
})();