let a = 12;
let b = 1;
if (b > a) {
    console.log("Katta son b = " + b);
    console.log("kichik son a = " + a);
} else if (a > b) {
    a = b + a - (b = a);
    console.log("b va a ning qiymatlarini almashtirdik");
    console.log("Katta son b = " + b);
    console.log("kichik son a = " + a);
} else {
    console.log("Ikki son teng a = b = " + a);
}