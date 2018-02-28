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
          window.location.replace("#")
          break;
        case navLinks.about:
					pages.about.scrollIntoView(smoothScrollConfig);
          window.location.replace("#about");
          break;
        case navLinks.projects:
					pages.projects.scrollIntoView(smoothScrollConfig);
          window.location.replace("#projects");
          break;
      }
    });
  }

  // document.onreadystatechange = function() {
  //     if (document.readyState == "interactive") {
  //       console.log("interactive");
  //     } else if (document.readyState == "complete") {
  //       console.log("complete");
  //     }
  // }
})();
