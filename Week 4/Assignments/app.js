const newsUL = document.getElementById("newsUL")
news.articles.map((newsItem) => {
    let item = `
<li>
    <img class="newsImage" src="${newsItem.urlToImage}" alt="">
    <h3>${newsItem.title}</h3>
    <h2>${newsItem.description}</h2>
    <h4><a href="${newsItem.url}">Click here for more.</a></h4>
    <h4>${newsItem.author}</h4>
    <h4>${newsItem.publishedAt}</h4>
</li>
        `
    newsUL.insertAdjacentHTML("beforeend", item)
})