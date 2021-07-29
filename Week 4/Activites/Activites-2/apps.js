const friendsUL = document.getElementById("friendsUL")

let friends = [
    { title: "John", lastName: "Doe", hobby: "mowing" },
    { firstName: "John", lastName: "Doe", hobby: "mowing" },
    { firstName: "John", lastName: "Doe", hobby: "mowing" },
    { firstName: "John", lastName: "Doe", hobby: "mowing" }

]
for (let index = 0; index < friends.length; index++) {
    const friend = friends[index]
    console.log(friend.hobby)


    const friendItem = `
        <li>
            <p>${friend.firstName}, ${friend.lastName} - ${friend.hobby}</p>
            
        </li>
    `
}


friendsUL.insertAdjacentHTML("beforeend", friendItem)