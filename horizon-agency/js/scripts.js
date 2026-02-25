// Smooth in-page navigation with custom duration
document.addEventListener('DOMContentLoaded', function () {
	var btn = document.getElementById('saibamais');
	var target = document.getElementById('sobrenos');
	if (btn && target) {
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			smoothScrollToElement(target, 800, function () {
				// Move focus for accessibility after scrolling
				target.setAttribute('tabindex', '-1');
				target.focus({ preventScroll: true });
				setTimeout(function () { target.removeAttribute('tabindex'); }, 1000);
			});
		});
	}

	// Nav contact link smooth-scroll to contact form
	var contactLink = document.getElementById('contact-link');
	var contactForm = document.getElementById('formulario');
	if (contactLink && contactForm) {
		contactLink.addEventListener('click', function (e) {
			e.preventDefault();
			smoothScrollToElement(contactForm, 800, function () {
				contactForm.setAttribute('tabindex', '-1');
				contactForm.focus({ preventScroll: true });
				setTimeout(function () { contactForm.removeAttribute('tabindex'); }, 1000);
			});
		});
	}

	// About-card 'Nossos Serviços' button scrolls to services section
	var servicosBtn = document.getElementById('servicosbtn');
	var servicesSection = document.getElementById('servicos');
	if (servicosBtn && servicesSection) {
		servicosBtn.addEventListener('click', function (e) {
			e.preventDefault();
			smoothScrollToElement(servicesSection, 800, function () {
				servicesSection.setAttribute('tabindex', '-1');
				servicesSection.focus({ preventScroll: true });
				setTimeout(function () { servicesSection.removeAttribute('tabindex'); }, 1000);
			});
		});
	}

	// .contact-cta smooth-scroll to contact form
	var contactCta = document.querySelector('.contact-cta');
	var contactForm = document.getElementById('formulario');
	if (contactCta && contactForm) {
		contactCta.addEventListener('click', function (e) {
			e.preventDefault();
			smoothScrollToElement(contactForm, 800, function () {
				contactForm.setAttribute('tabindex', '-1');
				contactForm.focus({ preventScroll: true });
				setTimeout(function () { contactForm.removeAttribute('tabindex'); }, 1000);
			});
		});
	}

	function smoothScrollToElement(element, duration, cb) {
		var start = window.pageYOffset;
		var rect = element.getBoundingClientRect();
		var targetY = start + rect.top;
		var distance = targetY - start;
		var startTime = null;

		function easeInOutCubic(t) {
			return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
		}

		function step(timestamp) {
			if (!startTime) startTime = timestamp;
			var time = timestamp - startTime;
			var progress = Math.min(time / duration, 1);
			var eased = easeInOutCubic(progress);
			window.scrollTo(0, Math.round(start + distance * eased));
			if (time < duration) {
				window.requestAnimationFrame(step);
			} else if (typeof cb === 'function') {
				cb();
			}
		}

		window.requestAnimationFrame(step);
	}
});


