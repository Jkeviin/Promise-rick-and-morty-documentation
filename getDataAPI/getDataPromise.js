const API = "https://rickandmortyapi.com/api/character/";

const getData = (apiURL) => {
    return fetch(apiURL)
        .then(response => response.json())
        .then(json => {
            printData(json);
        })
        .catch(error => console.log('ERROR ---->', error));
}

const printData = (data) => {

    let html = "";


    data.results.forEach(c => {
        html += `<div class="col mt-5">`;
            html += `<div class="card" style="width: 13rem;">`;
                html += `<img src="${c.image}" class="card-img-top" alt="...">`;
                html += `<div class="card-body">`;
                    html += `<h5 class="card-title">${c.name}</h5>`;
                    html += `<p class="card-text">Gender: ${c.gender}</p>`;
                    html += `<p class="card-text">Species: ${c.species}</p>`;
                html += `</div>`;
            html += `</div>`;
        html += `</div>`;
    });


    document.getElementById('infoCharacters').innerHTML = html;
}

getData(API);
