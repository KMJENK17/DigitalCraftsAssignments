
// ACTIVITY 2 - Posts 
const postsUL = document.getElementById("postsUL")

const numbers = [1,2,3,4,5,6]

let resultArray = numbers.map(function(no) {
    return no * 2
})


/*
const numbers = [1,2,3,4,5,6]
let doubleNumbers = [] 

for(let index = 0; index < numbers.length; index++) {
    const result = 2 * numbers[index]
    doubleNumbers.push(result)
}

console.log(doubleNumbers)

// map is an array helper function 
// it is also known as transform function 
// map function never modifies the original array it always returns a brand new array 
let resultArray = numbers.map(function(no) {
    return no * 2
})

console.log(resultArray)
*/

// ACTIVITY 2 - USING MAP ARRAY HELPER 

const postItems = posts.map(function(post) {
    
    const postItem = `
    <li>
        <b>${post.title}</b>
        <p>${post.body}</p>
    </li>
`
    return postItem 
})

console.log(postItems)

postsUL.innerHTML = postItems.join("")

/*
for(let index = 0; index < posts.length; index++) {
    const post = posts[index]

    const postItem = `
        <li>
            <b>${post.title}</b>
            <p>${post.body}</p>
        </li>
    `

    postsUL.insertAdjacentHTML('beforeend', postItem)
} */


/*
console.log(posts)


const friendsUL = document.getElementById("friendsUL")

let friends = [
    {firstName: "John", lastName: "Doe", hobby: "Gardening"},
    {firstName: "Mary", lastName: "Doe", hobby: "Movies"}, 
    {firstName: "Alex", lastName: "Doe", hobby: "Music"}, 
]

for(let index = 0; index < friends.length; index++) {

    const friend = friends[index]

    // console.log(friends[index].hobby) SAME AS BELOW

    const friendItem = `
        <li>
            <p>${friend.firstName}, ${friend.lastName} - ${friend.hobby}</p>
        </li>
    `

    // += will concatenate and create strings each time it is appended. This is because strings are immutable 
    //friendsUL.innerHTML += friendItem
    
    // No new strings are created. All new items are just appended at the end
    friendsUL.insertAdjacentHTML('beforeend', friendItem)
} */

