
const sectionsArr = Array.from(document.querySelectorAll("section"));
const sectionCount = sectionsArr.length;
const navBar = document.getElementById("navbar__list");



//dynamically create li item and append to nav
//works
let addItemToNav = function () {
  for (section of sectionsArr) {
     let sectionId = section.getAttribute("id");
     let sectionName = section.getAttribute("data-nav");
     let item = document.createElement("li");
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
  for (let i = 1; i < sectionCount; i++) {
    let currentSection = document.getElementById("section" + i);
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

//buil;d the nav bar
addItemToNav();
//listen to scroll
document.addEventListener("scroll",inViewPortEvent());


