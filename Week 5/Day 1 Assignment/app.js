const movieLists = document.getElementById("movieLists")
const batmanURL = 'https://www.omdbapi.com/?s=Batman&page=2&apikey=b746551d'

const result = new XMLHttpRequest()


result.addEventListener("load", function() {
    const batmanMovies = JSON.parse(this.responseText)

    let movieItems = batmanMovies.Search.map(function(movieItem) {
        item = `<li class="movie">
                <img src="${movieItem.Poster}"></img>
                <p><b>${movieItem.Title}</b></p>
                <button data-movieId='${movieItem.imdbID}' onclick="displayDetails(this)">Show Details</button>
                </li>`

        return item
    })
    movieLists.innerHTML = movieItems.join("")
})

result.open("GET", batmanURL)
result.send()