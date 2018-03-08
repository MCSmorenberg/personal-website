import smoothscroll from 'smoothscroll-polyfill';

(function(){
	smoothscroll.polyfill();

  const navLinks = {
    home: document.querySelector("#home-link"),
    about: document.querySelector("#about-link"),
    projects: document.querySelector("#projects-link")
  }

  const pages = {
    home: document.querySelector("#home-page"),
    about: document.querySelector("#about-page"),
    projects: document.querySelector("#projects-page")
  }

	function setScrollConfig(page) {
		return { top: page.offsetTop, left: 0, behavior: 'smooth' }
	}

  for (let key in navLinks){
    navLinks[key].addEventListener("click", (event) => {
      event.preventDefault();

      switch(event.target) {
        case navLinks.home:
					window.scroll(setScrollConfig(pages.home));
          break;
        case navLinks.about:
					window.scrollBy(setScrollConfig(pages.about));
          break;
        case navLinks.projects:
					window.scrollBy(setScrollConfig(pages.projects));
          break;
      }
    });
  }

	const homeLinkTop = navLinks.home.offsetTop;
	// const windowTop = window.scrollY;
	let topWindow = 0;
	let ticking = false;
	let didScroll = false;

	function startAnimation() {
		didScroll = true;
	}

	function animationSwitch(scroll_pos) {
	  // do something with the scroll position
		if(scroll_pos > homeLinkTop) {
			navLinks.home.classList.add('animate__home-link');
		} else {
			navLinks.home.classList.remove('animate__home-link');
		}
	}
	setInterval(function() {
		if(didScroll) {
			didScroll = false;

			window.addEventListener('scroll', (e) => {
			  topWindow = window.scrollY;

			  if (!ticking) {
			    window.requestAnimationFrame(function() {
			      animationSwitch(topWindow);
			      ticking = false;
			    });
			    ticking = true;
			  }
			});
		}
	}, 350);

	window.onscroll = startAnimation;
})();
