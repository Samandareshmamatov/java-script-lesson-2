let a = 31;
let b = 22;
let c = -8; // 3 ta xar xil son uchun dastur
if (b > a && c > a) {
    console.log('Kichik son a : ' + a);
} else if (a > b && c > b) {
    console.log('Kichik son b : ' + b);
} else {
    console.log('Kichik son c : ' + c);
}

if (a > b && a > c) {
    console.log('Katta son a : ' + a);
} else if (b > a && b > c) {
    console.log('Katta son b : ' + b);
} else {
    console.log('Katta son c : ' + c);
}