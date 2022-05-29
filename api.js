const token = "d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3"

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

                <button class="btn btn-primary" onclick='deleteOne(${user.id})'>Delete</button>
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


// Get from FORM DATA
let formData = {}
let PostForm = document.getElementById('postForm')
PostForm.addEventListener('submit', function (e) {
    e.preventDefault()
        ;[...this.elements].forEach(el => {
            if (el.type !== 'submit') {
                formData[el.name] = el.value
            }
        })
    // console.log(formData)
    // CALL POST function
    postData(formData.email, formData.name, formData.gender, formData.status)
})


// POST DATA fetch
const postData = (email, name, gender, status) => {
    console.log("Data", email, name, gender, status)
    fetch("https://gorest.co.in/public/v1/users", {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            name: name,
            gender: gender,
            status: status
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => {
        if (!response.ok) {
            throw Error("Error Found")
        }
        return response.json()
    }).then(data => {
        // Success
        return alert("Created")
    }).catch(error => {
        console.log(error)
    })

}





// DELETE Data fetch
const deleteOne = (id) => {
    console.log("delete", id)
    fetch(`https://gorest.co.in/public/v1/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => {
        if (!response.ok) {
            throw Error("Error Found")
        }
    }).then(data => {
        // Success
        return alert("Deleted")
    }).catch(error => {
        console.log(error)
    })
}


// Update Fetch
// const update = (id) => {
//     console.log("update", id)
//     fetch(`https://gorest.co.in/public/v1/users/${id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//             'Authorization': `Bearer ${token}`
//         }
//     }).then(response => {
//         if (!response.ok) {
//             throw Error("Error Found")
//         }
//     }).then(data => {
//         // Success
//         return alert("Deleted")
//     }).catch(error => {
//         console.log(error)
//     })
// }


