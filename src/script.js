
const BASE_URL = `https://kitsu.io/api/edge`;
const newAniBtn = document.getElementById('btn');
const animageDiv = document.getElementById('animage');
const searchButton = document.getElementById('searchBtn');
const searchInput = document.getElementById('search-bar');

const getAnimeChar = (id) => {
    fetch(`${BASE_URL}/anime/${id}`)
    .then(response => response.json())
    .then(json => {
        const title = json.data.attributes.canonicalTitle
        animageDiv.innerHTML = `<h2>${title}</h2><img src="${json.data.attributes.posterImage.small}" height=200 width=200/>`
    })
}

const getSearchAnime = (name) =>{
    fetch(`${BASE_URL}/anime?filter[text]=${name}`)
    .then(response => response.json())
    .then(json => {
        const anime = json.data[0];
        const title = json.data[0].attributes.canonicalTitle
        animageDiv.innerHTML = `<h2>${title}</h2><img src="${anime.attributes.posterImage.small}" height=200 width=200/>`
    })
}

const randomHero = () => {
    return Math.floor(Math.random() * 12400)
}

newAniBtn.onclick = () => getAnimeChar(randomHero());
searchButton.onclick =  () => getSearchAnime(searchInput.value);