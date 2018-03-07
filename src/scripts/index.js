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

	const smoothScrollConfig =  {
		behavior: 'smooth'
	};

  for (let key in navLinks){
    navLinks[key].addEventListener("click", (event) => {
      event.preventDefault();

      switch(event.target) {
        case navLinks.home:
					pages.home.scrollIntoView(smoothScrollConfig);
          break;
        case navLinks.about:
					pages.about.scrollIntoView(smoothScrollConfig);
          break;
        case navLinks.projects:
					pages.projects.scrollIntoView(smoothScrollConfig);
          break;
      }
    });
  }

	const homeLinkTop = navLinks.home.offsetTop;
	// const windowTop = window.scrollY;

	let topWindow = 0;
	let ticking = false;

	function animationSwitch(scroll_pos) {
	  // do something with the scroll position
		if(scroll_pos > homeLinkTop) {
			navLinks.home.classList.add('animate__home-link');
		} else {
			navLinks.home.classList.remove('animate__home-link');
		}
	}

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
})();
