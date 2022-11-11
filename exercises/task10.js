let a = 14;
let b = 9;
if (a !== b) {
    a = a + b;
    b = a;
    console.log("Ikki son bir biriga teng emas");
    console.log("Natija a = " + a);
    console.log("Natija b = " + b);
} else {
    a = 0;
    b = a;
    console.log("Ikki son bir biriga teng");
    console.log("Natija a = " + a);
    console.log("Natija b = " + b);
}