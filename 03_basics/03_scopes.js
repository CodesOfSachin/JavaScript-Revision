function one() {
    const userName = "Sachin"

    function two() {
        const website = "Github"
        console.log(userName);
        
    }
    // console.log(website);
    
    two()
}

// one()

if(true) {
    const userName = "Sachin"
    if(userName === "Sachin") {
        const website = "Github"
        console.log(userName + " " + website);
    }
    // console.log(website);      
}

// console.log(userName);

// +++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++

addOne(5) // it will work here too
function addOne(num) {
    return num + 1
}

// addOne(5) // it will work here 

// addTwo(5) // it won't work b'coz it can't access function which is defined in variable after executing this function
const addTwo = function(num) {
    return num + 2
}

addTwo(5) // it will work here b'coz we are executing function after variable or expression function