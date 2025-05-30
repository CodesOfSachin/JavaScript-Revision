const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log('Promise Consumed');
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Task 2 is completed.')
        resolve()
    }, 1000);
})
.then(() => {
    console.log('Promise 2 Consumed.');
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Sachin", age: "22", email: "Sachin@gmail.com"})
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        if(!error) {
            resolve({username: "Sachin", age: "22", email: "Sachin@gmail.com"})
        } else {
            reject("Something went wrong.")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
})
.then((name) => {
    console.log(name);
})
.catch((err) => {
    console.log(err);
})
.finally(() => console.log("The promise is either resolved or rejected"));


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false;
        if(!error) {
            resolve({username: "JavaScript", email: "JS@gmail.com"})
        } else {
            reject("Something went wrong.")
        }
    }, 1000)
})

const consumePromise = async () => {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

consumePromise()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data)
//     } catch (err) {
//         console.log("E: ", err);
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log("Error: ", err);
})