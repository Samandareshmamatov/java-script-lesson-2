let a = 20;
let b = 12;
let c = 24;
if (Math.abs(a - b) < Math.abs(a - c)) {
    console.log("Yaqin nuqta b : " + b);
    console.log("Ular orasidagi masofa : " + Math.abs(a - b));
} else if (Math.abs(a - b) > Math.abs(a - c)) {
    console.log("Yaqin nuqta c : " + c);
    console.log("Ular orasidagi masofa : " + Math.abs(a - c));
} else {
    console.log("Ikkala nuqta teng uzoqlikda b = " + b + " c = " + c);
    console.log("Ular orasidagi masofa : " + Math.abs(a - b));
}