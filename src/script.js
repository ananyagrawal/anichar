
const getAnimeChar = (id) => {
    fetch(`https://kitsu.io/api/edge/anime/${id}`)
    .then(response => response.json())
    .then(json => {
        document.querySelector('body').innerHTML += `<img src="${json.data.attributes.posterImage.small}" height=200 width=200/>`
    })
}

const id=Math.random()*100;

getAnimeChar(id)