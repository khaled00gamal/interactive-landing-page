const sectionsArr = Array.from(document.querySelectorAll("section"));
const sectionCount = sectionsArr.length;
const navBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section[id]");




//dynamically create li item and append to nav
//works
let buildNavBar = function () {
  for (let section of sectionsArr) {
     let sectionId = section.getAttribute("id");
     let sectionName = section.getAttribute("data-nav");
     let item = document.createElement("li");
     item.dataset.nav=section.id;
    item.innerHTML = `<a class="menu__link" href='#${sectionId}'>${sectionName}</a>`;

    navBar.appendChild(item);
  }
};


//check if user is in section
let isInViewPort = function (section) {
  const position = section.getBoundingClientRect();
  return (
    position.top >= 0 &&
    position.left >= 0 &&
    position.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    position.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

let inViewPortEvent = function () {
  for (let section of sectionsArr) {
    let sectionId=section.getAttribute("id");
    let currentSection = document.getElementById(`${sectionId}`);
    //listen to scrolls
    window.addEventListener(
      "scroll",
      function (e) {
        if (isInViewPort(currentSection)) {
          currentSection.classList.add("your-active-class");
        } else {
          currentSection.classList.remove("your-active-class");
        }
      }, false
    );
    }
  };


  window.addEventListener("scroll", navHighlighter);

  //highlight active link when scrolling
  //works
  function navHighlighter() {
  
    let scrollY = window.pageYOffset;
    
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");
      
    
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ){
        document.querySelector(".navbar__menu a[href*=" + sectionId + "]").classList.add("active-link");
      } else {
        document.querySelector(".navbar__menu a[href*=" + sectionId + "]").classList.remove("active-link");
      }
    });
  }

  


//listen to scroll on dom
document.addEventListener("scroll",inViewPortEvent());


//works 
let clickToScroll = function (){
  for ( let section of sectionsArr ){

    const listId = section.id;
 
  let link = document.querySelector(`li[data-nav='${listId}']`);

  link.addEventListener("click", function(e) {
    e.preventDefault();

    section.scrollIntoView ({

      behavior: 'smooth'

      });

    });

  }
}

//scroll to top
const topButton = document.getElementById("scroll-to-top");

window.onscroll = function(){scrollToTop()};

let scrollToTop = function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topButton.style.display="block";
    }else{
        topButton.style.display="none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }


  //buil;d the nav bar
buildNavBar();
clickToScroll();
  
