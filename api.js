// GET DATA
const fetchData = () => {
    fetch("https://gorest.co.in/public/v1/users").then(response => {
        if (!response.ok) {
            throw Error("Error Found")
        }
        return response.json()
    }).then(data => {
        const arrData = data.data
        const html = arrData.map(user => {
            return `
            <div class="user">
                <p>Name: ${user.name}</p>
                <p>Email: ${user.email}</p>
                <p>Name: ${user.gender}</p>
            </div>
            `
        }).join("")
        document.querySelector("#app").insertAdjacentHTML('afterbegin', html)
        console.log(data.data)
    }).catch(error => {
        console.log(error)
    })

}
fetchData()


let form = document.getElementById('form')
console.log(form)


// POST DATA
// const token = "d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3"
// const postData = () => {
//     console.log(name, email, gender, status)

//     fetch("https://gorest.co.in/public/v1/users", {
//         method: 'POST',
//         body: JSON.stringify({
//             email,
//             gender,
//             name,
//             status
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//             'Authorization': `Bearer ${token}`
//         }
//     }).then(response => {
//         if (!response.ok) {
//             throw Error("Error Found")
//         }
//         return response.json()
//     }).then(data => {
//         return alert("Created")
//     }).catch(error => {
//         console.log(error)
//     })

// }
// postData()