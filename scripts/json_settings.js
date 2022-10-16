let developerVision = document.querySelector('.section3-body').childNodes[1];

const indexData = new XMLHttpRequest();
indexData.open('GET', '../json/index.json');
indexData.send();

// to get the data
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