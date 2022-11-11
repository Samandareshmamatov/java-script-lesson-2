let a = 37;
let b = 1;
let c = -8;
if ((a > b && b > c) || (a < b && b < c)) {
    a *= 2;
    b *= 2;
    c *= 2;
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
} else {
    a *= -1;
    b *= -1;
    c *= -1;
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
}