const unknownProfile = "../img/unknown.jpg"
// Developer vision Section index.html
let developerVision = document.querySelector('.section3-body').childNodes[1];
const indexData = new XMLHttpRequest();
indexData.open('GET', '../json/index.json');
indexData.send();
indexData.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    // developer view paragraph manipulation
    let insertData = data[0].Section3_data;
    let data2 = "";
    insertData = insertData.trim().split(' ');
    for (i = 0; i < insertData.length; i++)
        data2 += "<span class=\"listFirstLetter\" style=\"color: var(--colr_1_sec); font-weight: 800;\" >" + insertData[i][0] + "</span>" + insertData[i].slice(1) + " ";
    developerVision.innerHTML = data2;
});

// Precious feedback data section
let feedbackContainer = document.querySelector('#happyClientsCarousel');
const carouselContainer = document.getElementById('happyClientsCarousel');
const feedbackData = new XMLHttpRequest();
feedbackData.open('GET', '../json/feedback.json');
feedbackData.send();
feedbackData.addEventListener('load', function () {
    let mainData = JSON.parse(this.responseText);
    const carsoulInner = document.createElement('div');
    carsoulInner.classList.add('carousel-inner')
    let counter = 0;
    for(i=0; i<mainData.length/2; i++){
        let img1 = mainData[counter].ImgSrc == "" ? unknownProfile : mainData[counter].ImgSrc;
        let img2 = mainData[counter+1].ImgSrc == "" ? unknownProfile : mainData[counter+1].ImgSrc;
        let htmlData = `<div class="carousel-item">
                            <div class="__carousel-item-closer">
                                <div class="__feedbackCardContainer">
                                    <div class="__feedbackCard-closer">
                                        <div class="__feedbackCard-img">
                                            <img src="${img1}" alt="">
                                        </div>
                                        <div class="__feedbackCard-mainBody">
                                            <div class="__feedbackCard-header">
                                                <span class="__feedbackCard-header-data cursor-default">${mainData[counter].name}</span>
                                            </div>

                                            <div class="__feedbackCard-data">
                                                <i class="fa fa-quote-right" aria-hidden="true"
                                                    style="position: absolute; font-size: 4rem; color: #fff1; transform: rotateY(180deg);"></i>
                                                <p class="mb-0"
                                                    style="padding: 0rem 2rem; font-size: 1.3rem; font-family: 'Baloo Bhai 2', cursive; width: 90%;">
                                                    ${mainData[counter].textarea}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="__feedbackCardContainer">
                                    <div class="__feedbackCard-closer">
                                        <div class="__feedbackCard-img">
                                            <img src="${img2}" alt="">
                                        </div>
                                        <div class="__feedbackCard-mainBody">
                                            <div class="__feedbackCard-header">
                                                <span class="__feedbackCard-header-data cursor-default">${mainData[counter+1].name}</span>
                                            </div>
                                            <div class="__feedbackCard-data">
                                                <i class="fa fa-quote-right" aria-hidden="true"
                                                    style="position: absolute; font-size: 4rem; color: #fff1; transform: rotateY(180deg);"></i>
                                                <p class="mb-0"
                                                    style="padding: 0rem 2rem; font-size: 1.3rem; font-family: 'Baloo Bhai 2', cursive; width: 90%;">
                                                    ${mainData[counter+1].textarea}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
        counter+=2;
        carsoulInner.insertAdjacentHTML('afterbegin', htmlData);
        carouselContainer.appendChild(carsoulInner);
    }
    carsoulInner.firstChild.classList.add('active')
})
