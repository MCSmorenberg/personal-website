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

var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  // do something with the scroll position
	if(scroll_pos > homeLinkTop) {
		navLinks.home.classList.add('animate__link-home');
	} else {
		navLinks.home.classList.remove('animate__link-home');
	}
}


window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;

  }

});


  // document.onreadystatechange = function() {
  //     if (document.readyState == "interactive") {
  //       console.log("interactive");
  //     } else if (document.readyState == "complete") {
  //       console.log("complete");
  //     }
  // }
})();
