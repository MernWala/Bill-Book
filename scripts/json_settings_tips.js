// utility methods
let capitilizeWithFirstColor = (wholeText) => {
  let rawData = wholeText;
  let newArray = rawData.split(" ");
  let finalData = "";
  for (let i = 0; i < newArray.length; i++)
    finalData = `${finalData}<span class="listFirstLetter" style="color: var(--colr_1_sec); font-weight: 800;">${newArray[i].charAt(0).toUpperCase()}</span>${newArray[i].toLowerCase().substr(1, newArray[i].length - 1)} `;
  return finalData;
}

// Tips-Trick page manipulation starts here
let tipsContainer = document.querySelector("#tipTricsContainer");
const tipsTricksData = new XMLHttpRequest();
tipsTricksData.open("GET", "../json/tipTrick.json");
tipsTricksData.send();
tipsTricksData.addEventListener("load", function () {
  let mainData = JSON.parse(this.responseText);
  let tipsContainerInner = document.createElement("div");

  tipsContainerInner.classList.add("col");
  tipsContainerInner.classList.add("col-sm-12");
  tipsContainerInner.classList.add("maxWidth-95");

  let tipsTabs_ul = `<ul class="nav nav-tabs" id="myTab" role="tablist"></ul>`;
  let tipTabsContainer_div = `<div class="tab-content" id="myTabContent"></div>`;

  tipsContainerInner.insertAdjacentHTML("afterbegin", tipsTabs_ul);
  tipsContainerInner.insertAdjacentHTML("beforeend", tipTabsContainer_div);

  for (i = 0; i < mainData.length; i++) {
    let tab_ul_InnerHTML_raw = `
                    <li class="nav-item">
                        <a class="nav-link" id="${mainData[i].id}-tab" data-toggle="tab" href="#${mainData[i].id}" role="tab" aria-controls="${mainData[i].id}" aria-selected="true">
                          ${mainData[i].name}
                        </a>
                    </li>`;
    let tab_div_InnerHTML_raw = `
                <div class="tab-pane px-3 py-2 fade" id="${mainData[i].id}" role="tabpanel" aria-labelledby="${mainData[i].id}-tab">
                    <p>${capitilizeWithFirstColor(mainData[i].introduction)}</p>
                    <div class="embed-responsive embed-responsive-16by9 maxWidth-50 my-5 d-flex mx-auto">
                      <iframe src="${mainData[i].videoLink}" allowfullscreen></iframe>
                    </div>
                    <p>${capitilizeWithFirstColor(mainData[i].videoExplanation)}</p>
                </div>`;

    tipsContainerInner.childNodes[0].insertAdjacentHTML('beforeend', tab_ul_InnerHTML_raw);
    tipsContainerInner.childNodes[1].insertAdjacentHTML('beforeend', tab_div_InnerHTML_raw);
    tipsContainer.appendChild(tipsContainerInner);
  }
  tipsContainerInner.childNodes[0].childNodes[1].classList.add('active')
  tipsContainerInner.childNodes[0].childNodes[1].childNodes[1].classList.add('active')
  tipsContainerInner.childNodes[1].childNodes[1].classList.add('show')
  tipsContainerInner.childNodes[1].childNodes[1].classList.add('active')
});