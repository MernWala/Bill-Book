let brandColorA = document.querySelector(".navigation-brand-A");
let brandColorB = document.querySelectorAll(".navigation-brand-B");
let mainBody = document.querySelector(".__custom-body-css").style.backgroundColor;
let navExtentBtn = document.querySelector(".navigation-extend-btn");
let navModalOpner = document.querySelector(".navigationModalOpner");
let navMainContainer = document.querySelector(".navigation-extend-container");
let nav = document.getElementById("Navbar");
let logo = document.querySelector(".logo");
let brandA = document.querySelectorAll(".navigation-brand-A");
let brandB = document.querySelectorAll(".navigation-brand-B");
let active = document.querySelectorAll(".ListActive");

let backToTop = document.querySelector(".scrollToTop");
let backToTop_closer = document.querySelector(".scrollToTop-closer");
let backToTop_icon = document.querySelector("#backToTo_icon");

mainBody = "var(--dark_custom)";
navExtentBtn.style.color = "var(--dark_custom)";

window.addEventListener("load", () => {
  if (mainBody == "var(--dark_custom)") {
    for (let i = 0; i < brandColorB.length; i++) {
      brandColorB[i].style.color = "var(--light)";
      navExtentBtn.style.color = "var(--light)";
    }
    for (i = 0; i < document.getElementsByTagName("h3").length; i++) {
      document.getElementsByTagName("h3")[i].style.color = "var(--light)";
    }
  } else {
    for (let i = 0; i < brandColorB.length; i++) {
      brandColorB[i].style.color = "var(--dark_custom)";
    }
  }

  for (i = 0; i < active.length; i++) {
    active[i].childNodes[3].style.color = "var(--colr_1_sec)";
    active[i].childNodes[3].style.fontWeight = "800";
  }
});

navModalOpner.addEventListener("mouseover", () => {
  navExtentBtn.style.transition = "color .3s ease-in-out";
  navExtentBtn.style.color = "var(--logoColor)";
  // navMainContainer.style.border = "1px solid var(--colr_1_faded)";
  navMainContainer.style.transition = "border .3s ease-in-out";
});

navModalOpner.addEventListener("mouseout", () => {
  navExtentBtn.style.transition = "color .3s ease-in-out";
  navExtentBtn.style.color = "var(--light)";
  // navMainContainer.style.border = "1px solid var(--colr_1_sec)";
  navMainContainer.style.transition = "border .3s ease-in-out";
});

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    nav.style.boxShadow = "0.5rem 0.5rem 1rem";
    nav.style.height = "6rem";
    logo.style.width = "7rem";
    navMainContainer.style.transition = "all .3s ease-in-out";
    navMainContainer.style.padding = "0px";
    for (i = 0; i < brandA.length; i++) brandA[i].style.fontSize = "2.5rem";
    for (j = 0; j < brandB.length; j++) brandB[j].style.fontSize = "2rem";

    backToTop.style.display = "flex";
    backToTop_closer.style.display = "flex";
    backToTop_icon.style.display = "inline-block";
  } else if (scrollY < 50) {
    nav.style.boxShadow = "none";
    nav.style.height = "8rem";
    logo.style.width = "10rem";
    for (i = 0; i < brandA.length; i++) brandA[i].style.fontSize = "3.5rem";
    for (j = 0; j < brandB.length; j++) brandB[j].style.fontSize = "3rem";
    navMainContainer.style.transition = "all .3s ease-in-out";
    navMainContainer.style.padding = ".5rem .7rem";

    backToTop.style.display = "none";
    backToTop_closer.style.display = "none";
    backToTop_icon.style.display = "none";
  }
});

// Icon counter method applied
let counters = document.querySelectorAll(".iconData");
counters.forEach((counter) => {
  startintCount = counter.innerHTML = 0;
  let updateCounter = () => {
    let dataTarget = counter.getAttribute("data-target");
    let startingCount = Number(counter.innerHTML);
    let increment = dataTarget / 10;
    if (startingCount < dataTarget) {
      counter.innerHTML = `${Math.round(startingCount + increment)}`;
      setTimeout(updateCounter, 60);
    } else counter.innerHTML = dataTarget;
  };
  counters[2].insertAdjacentText("beforeend", "+");
  updateCounter();
});

// scroll settings of navigation modal
let navlinks = document.querySelectorAll(".nav-link");
$(navlinks[0]).on("click", function () {
  $("html,body").animate({ scrollTop: $("#section1").offset().top }, "slow");
});

$(navlinks[1]).on("click", function () {
  $("html,body").animate({ scrollTop: $("#section2").offset().top }, "slow");
});

$(navlinks[3]).on("click", function () {
  $("html,body").animate({ scrollTop: $("#section4").offset().top }, "slow");
});