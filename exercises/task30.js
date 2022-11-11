let x = Math.round(Math.random() * 1000);
console.log(x);
if (x >= 100) {
    if (x % 2 === 0) {
        console.log(x + " - 3 xonali juft son");
    } else {
        console.log(x + " - 3 xonali toq son");
    }
} else if (x >= 10) {
    if (x % 2 === 0) {
        console.log(x + " - 2 xonali juft son");
    } else {
        console.log(x + " - 2 xonali toq son");
    }
} else {
    if (x % 2 === 0) {
        console.log(x + " - 1 xonali juft son");
    } else {
        console.log(x + " - 1 xonali toq son");
    }
}