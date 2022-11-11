alert("Welocome to our website 👍👍");
let firstName = prompt("Ismingizni kiriting : ")
let yourMoney = Number(prompt("Hisobingizdagi mablag'ni kiriting ( so'mda ) : "))
let dollar = 11000.34;
let euro = 12354.03;
let cost = 500 * dollar + 250 * dollar + 120 * euro;
if ((yourMoney - cost) >= 0) {
    document.write("Borish-kelish samolyot bileti - $500;" + `<br>` +
        "Mehmonxona to’lovi (to’liq safar davomiyligi uchun) - $250;" + `<br>` +
        "Muzey va ko’ngilochar joylar uchun - 120 yevro;" + `<br>` +
        "Hozirda kurs : " + `<br>` +
        "$1 = 11000.34 so’m" + `<br>` +
        "1 yevro = 12354.03 so’m" + `<br><br>`)
    document.write(`Sizning mablag'ingiz : ${yourMoney} so'm va ${yourMoney - cost} so'm ortiqcha pulingiz bor\n` + `<br><br>`);
    document.write(`Oq yo'l ${firstName} ✈️✈️`);
} else {
    document.write("Borish-kelish samolyot bileti - $500;" + `<br>` +
        "Mehmonxona to’lovi (to’liq safar davomiyligi uchun) - $250;" + `<br>` +
        "Muzey va ko’ngilochar joylar uchun - 120 yevro;" + `<br>` +
        "Hozirda kurs : " + `<br>` +
        "$1 = 11000.34 so’m" + `<br>` +
        "1 yevro = 12354.03 so’m" + `<br><br>`)
    document.write(`Sizning mablag'ingiz : ${yourMoney} so'm va ${Math.abs(yourMoney - cost)} so'm yetmaydi\n` + `<br><br>`);
    document.write(`${firstName}, ozgina sabr qilish kerak bo’lar ekan 😔😔`);

}

/* 
Borish-kelish samolyot bileti - $500
Mehmonxona to’lovi (to’liq safar davomiyligi uchun) - $250
  Muzey va ko’ngilochar joylar uchun - 120 yevro
$1 = 11000.34 so’m
1 yevro = 12354.03 so’m

*/