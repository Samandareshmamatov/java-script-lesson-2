let a = -12;
let b = 9;
let c = 0;
if ((a > 0 && b <= 0 && c <= 0) || (b > 0 && a <= 0 && c <= 0) || (c > 0 && a <= 0 && b <= 0)) {
    console.log('Berilgan sonlar orasida 1 ta musbat son bor');
} else if ((a > 0 && b > 0 && c <= 0) || (b > 0 && a <= 0 && c > 0) || (c > 0 && a > 0 && b <= 0)) {
    console.log('Berilgan sonlar orasida 2 ta musbat son bor');
} else if (a > 0 && b > 0 && c > 0) {
    console.log('Berilgan sonlar orasida 3 ta musbat son bor');
} else {
    console.log("Berilgan sonlar orasida musbat son yo'q");
}