let theam = "red";
if (JSON.parse(localStorage.getItem("BillBook_Theam")) != null) {
  console.log(
    `Theam Setted to \'${JSON.parse(
      localStorage.getItem("BillBook_Theam")
    )}\' ~ Theam Designed By SHIVAM KASHYAP`
  );
} else {
  localStorage.setItem("BillBook_Theam", JSON.stringify(theam));
}
let storageData = JSON.parse(localStorage.getItem("BillBook_Theam"));

// getting root variables
let r = document.querySelector(":root");

// header icon gradient
let headerIconGradiant = document.querySelectorAll(".headerIconGradiant");
let headerIconGradiant_Setting1 =
  "linear-gradient(to bottom, #b30000, #5A0000, #5A0000, #181818, #1818183b)";
let headerIconGradiant_Setting2 =
  "linear-gradient(to bottom, #0052ef, #052b72, #052b72, #181818, #1818183b)";
let headerIconGradiant_Setting3 =
  "linear-gradient(to bottom, #2e8b57, #1e5937, #1e5937, #181818, #1818183b)";

// color button
let clr1 = document.querySelector("#colorOption1");
let clr2 = document.querySelector("#colorOption2");
let clr3 = document.querySelector("#colorOption3");
let gears = document.querySelectorAll(".fa-cog");

const light = "#f1f2e1";
const dark = "#181818";

const red_pri = "#6f0202";
const red_sec = "#b30000";
const red_fade = "#f2bbbb";
const red_light = "#b3000036";

const blue_pri = "#0300b4";
const blue_sec = "#0052ef";
const blue_fade = "#85a9eb";
const blue_light = "#0052ef36";

const green_pri = "#217344";
const green_sec = "#2e8b57";
const green_fade = "#99e9bc";
const green_light = "#2e8b5736";

// utility function
let removeBackgroundImage = () => {
  clr1.style.backgroundImage = "";
  clr2.style.backgroundImage = "";
  clr3.style.backgroundImage = "";
};

let defaultBorderColor = () => {
  clr1.style.borderColor = red_sec;
  clr2.style.borderColor = blue_sec;
  clr3.style.borderColor = green_sec;
};

let changeColorAll = (ele, colorData) => {
  for (i = 0; i < ele.length; i++) {
    ele[i].style.transition = "all .3s ease-in";
    ele[i].style.color = colorData;
  }
};

let setBackgroundImage = (ele, data) => {
  ele.style.backgroundImage = data;
};

let changeBorderColor = (ele, colorData) => {
  ele.style.transition = "all .3s ease-in";
  ele.style.border = "1px solid " + colorData;
};

let changeBackgroundColor = (ele, colorData) => {
  for (i = 0; i < ele.length; i++) {
    ele[i].style.transition = "all .3s ease-in";
    ele[i].style.backgroundColor = colorData;
  }
};

let gradientUpdater = (ele) => {
  for (i = 0; i < headerIconGradiant.length; i++) {
    if (ele == "red")
      headerIconGradiant[i].style.backgroundImage = headerIconGradiant_Setting1;
    else if (ele == "blue")
      headerIconGradiant[i].style.backgroundImage = headerIconGradiant_Setting2;
    else
      headerIconGradiant[i].style.backgroundImage = headerIconGradiant_Setting3;
  }
};

let borderSettingButtons = (ele, image, borderClr) => {
    ele.style.transition = "all .3s ease-in"
    removeBackgroundImage();
    defaultBorderColor();
    changeBorderColor(ele, borderClr);
    setBackgroundImage(ele, image);
}

let red_theam = () => {
  localStorage.setItem("BillBook_Theam", JSON.stringify("red"));
  r.style.setProperty("--colr_1_pri", red_pri);
  r.style.setProperty("--colr_1_sec", red_sec);
  r.style.setProperty("--colr_1_faded", red_fade);
  r.style.setProperty("--colr_1_ultraLight", red_light);
  changeColorAll(gears, red_fade);
  gradientUpdater(JSON.parse(localStorage.getItem("BillBook_Theam")));
  borderSettingButtons(clr1, headerIconGradiant_Setting1, red_fade);
};

let blue_theam = () => {
    localStorage.setItem("BillBook_Theam", JSON.stringify("blue"));
    r.style.setProperty("--colr_1_pri", blue_pri);
    r.style.setProperty("--colr_1_sec", blue_sec);
    r.style.setProperty("--colr_1_faded", blue_fade);
    r.style.setProperty("--colr_1_ultraLight", blue_light);
    changeColorAll(gears, blue_fade);
    gradientUpdater(JSON.parse(localStorage.getItem("BillBook_Theam")));
    borderSettingButtons(clr2, headerIconGradiant_Setting2, blue_fade);
  };

let green_theam = () => {
  localStorage.setItem("BillBook_Theam", JSON.stringify("green"));
  r.style.setProperty("--colr_1_pri", green_pri);
  r.style.setProperty("--colr_1_sec", green_sec);
  r.style.setProperty("--colr_1_faded", green_fade);
  r.style.setProperty("--colr_1_ultraLight", green_light);
  changeColorAll(gears, green_fade);
  gradientUpdater(JSON.parse(localStorage.getItem("BillBook_Theam")));
  borderSettingButtons(clr3, headerIconGradiant_Setting3, green_fade);
};

// actual implementation starts here
clr1.addEventListener("click", red_theam);

clr2.addEventListener("click", blue_theam);

clr3.addEventListener("click", green_theam);

let buttonClrSettings = () => {
  let temp = JSON.parse(localStorage.getItem("BillBook_Theam"));
  if (temp == "red") {
    red_theam();
  } else if (temp == "blue") {
    blue_theam();
  } else {
    green_theam();
  }
};

gradientUpdater(storageData);
buttonClrSettings();
