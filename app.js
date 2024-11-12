// 1-masala

// Declaration
function greeting(name){
    return `Assalomu alaykum ${name}`;
}

// Expression
const greetingExpr = function(name) {
    return `Assalomu alaykum ${name}`;
};

// Arrow function
const greetingArrow = (name) => `Assalomu alaykum ${name}`;

// 2-masala

// Declaration
function range(a, b){
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}

// Expression
const rangeExpr = function(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
};

// Arrow function
const rangeArrow = (a, b) => {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
};

// 3-masala

// Declaration
function booleanToNumber(bool) {
    return bool ? 1 : 0;
}

// Expression
const booleanToNumberExpr = function(bool) {
    return bool ? 1 : 0;
};

// Arrow function
const booleanToNumberArrow = (bool) => bool ? 1 : 0;

// 4-masala

// Declaration
function getFirstLetter(name){
    return name.charAt(0);
}

// Expression
const getFirstLetterExpr = function(name) {
    return name.charAt(0);
};

// Arrow function
const getFirstLetterArrow = (name) => name.charAt(0);

// 5-masala

// Declaration
function sum(...numbers){
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Expression
const sumExpr = function(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
};

// Arrow function
const sumArrow = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);








// Clock

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('day').textContent = days[now.getDay()];

    const day = String(now.getDate()).padStart(2, '0');
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    document.getElementById('date').textContent = `${day}-${month}-${year}`;
}

setInterval(updateClock, 1000);
updateClock();