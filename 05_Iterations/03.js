// for of 

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const num of arr) {
    //console.log(num);
}

const greetings = "Hello World"
for(const greet of greetings) {
    if(greet === " ") {
        // console.log("-");
        continue
    }
    // console.log(greet);
}

// Maps

const map = new Map()
map.set("Name", "Sachin")
map.set("email", "Sachin@google.com")
map.set("Age", "22")

// console.log(map);

// map is iterable with for of loop
for(const key of map) {
    // console.log(key);
}

for(const [key, value] of map) {
    // console.log(key);
    // console.log(value);
    //console.log(`Key is "${key}" and value is "${value}"`);
}


// object isn't iterable with for of 
const myObject = {
    'game1': 'NFS',
    'game2': 'SpiderMan'
}

// for(const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }