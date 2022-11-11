let a = 23;
let b = 61;
let c = 48; // 3 ta xar xil son uchun dastur
if ((a < b && a > c) || (a > b && a < c)) {
    console.log("O'rtadagi son a : " + a);
} else if ((b < a && b > c) || (b > a && b < c)) {
    console.log("O'rtadagi son b : " + b);
} else {
    console.log("O'rtadagi son c : " + c);
}