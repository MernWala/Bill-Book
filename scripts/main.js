let brandColorA = document.querySelector(".navigation-brand-A");
let brandColorB = document.querySelectorAll(".navigation-brand-B");
let mainBody = document.querySelector(".__custom-body-css").style.backgroundColor
let navExtentBtn = document.querySelector('.navigation-extend-btn')
let navModalOpner = document.querySelector('.navigationModalOpner')

mainBody = "var(--dark_custom)"
navExtentBtn.style.color = "var(--dark_custom)"

window.addEventListener("load", () => {
    if(mainBody == "var(--dark_custom)"){
        for(let i=0; i<brandColorB.length; i++){
            brandColorB[i].style.color = "var(--light)";
            navExtentBtn.style.color = "var(--light)"
        }
    }else{
        for(let i=0; i<brandColorB.length; i++){
            brandColorB[i].style.color = "var(--dark_custom)";
        }
    }
});


navModalOpner.addEventListener('mouseover', () => {
    navExtentBtn.style.color="var(--colr_1_sec)"
});

navModalOpner.addEventListener('mouseout', () => {
    navExtentBtn.style.color="var(--light)"
});

