// for in loop

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    ts: "TypeScript"
}

for(const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming) {
    // console.log(`${key} :- ${programming[key]}`);   
}

// maps aren't iterable with for in loops
const map = new Map()
map.set("Name", "Sachin")
map.set("email", "Sachin@google.com")
map.set("Age", "22")
// it doesn't give error but still for in doesn't work with maps
for(const key in map) {
    console.log(key);
}