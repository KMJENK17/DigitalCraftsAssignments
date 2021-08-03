const emailId = document.getElementById("emailId")
const coffeeType = document.getElementById("coffeeType")
const coffeeSize = document.getElementById("coffeeSize")
const coffeePrice = document.getElementById("coffeePrice")
const saveButton = document.getElementById("saveButton")
const usersUL = document.getElementById("usersUL")
const getButton = document.getElementById("getButton")
const delButton = document.getElementById("delButton")


saveButton.addEventListener('click', function() {
    const email = emailId.value
    const type = coffeeType.value
    const size = coffeeSize.value
    const price = coffeePrice.value

    let request = new XMLHttpRequest()
    request.open('POST', 'https://troubled-peaceful-hell.glitch.me/orders')
    request.setRequestHeader('Content-Type', 'application/json')
    request.addEventListener('load', function() {
        console.log(this.responseText)
        const userAdd = JSON.parse(this.responseText)
        const userItems = `<li>
                            <h1>${userAdd.email}</h1>
                            <h1>${userAdd.type}</h1>
                            <h1>${userAdd.size}</h1>
                            <h1>${userAdd.price}</h1>`
        usersUL.insertAdjacentHTML('beforeend', userItems)
        console.log(userAdd)

    })
    const body = {
        email: email,
        type: type,
        size: size,
        price: price
    }
    request.send(JSON.stringify(body))
})





getButton.addEventListener('click', function() {
    let request = new XMLHttpRequest()
    request.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders')
    request.addEventListener('load', function() {
        const result = JSON.parse(this.responseText)
        const list = `<li>
            <h1>${result.email}</h1>
            <h1>${result.type}</h1>
            <h1>${result.size}</h1>
            <h1>${result.price}</h1>
            `
        usersUL.innerHTML = list.join("")
    })

})


let delButton = new XMLHttpRequest()
delButton.open('DELETE', `https://troubled-peaceful-hell.glitch.me/orders/${userAdd.email}`)
alert("Order was deleted!")
delButton.send()