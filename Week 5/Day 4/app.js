// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
// `https://hacker-news.firebaseio.com/v0/item/${articleId}.json?print=pretty`

const articleIdTextBox = document.getElementById('articleIdTextBox')
const articleIdForm = document.getElementById('articleIdForm')
const articleTitle = document.getElementById('articleTitle')
const articleAuthor = document.getElementById('articleAuthor')
const articleTime = document.getElementById('articleTime')
const articleUrl = document.getElementById('articleUrl')


function getStoryIdKeys() {
    return `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
}

function getArticleUrl(articleId) {
    return `https://hacker-news.firebaseio.com/v0/item/${articleId}.json?print=pretty`
}

async function getStoryId(articleId, articlesDownloaded) {
    const articleUrl = getArticleUrl(articleId)
    try {
        let response = await fetch(articleUrl)
        let articleData = await response.json()
        articlesDownloaded(articleData)
    } catch (error) {
        console.log(error)
    }
}


articleIdForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const articleId = articleIdTextBox.value
    getStoryIdKeys()
    getStoryId(articleId, function(info) {
        displayInfo(info)
    })
})


function displayInfo(info) {
    articleTitle.innerHTML = info.title
    articleAuthor.innerHTML = `by: ${info.author}`
    articleUrl.innerHTML = `link: ${info.url}`
    articleTime.innerHTML = `poster at: ${info.time}`
}