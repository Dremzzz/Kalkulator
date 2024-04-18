let btns = document.getElementsByClassName("btn");
let btnsCount = btns.length - 1;

let wynik = document.getElementById("wynik");

function button(n) {
    if (n == 0) {
        wynik.value = eval(wynik.value);
        wynik.value = Math.sqrt(wynik.value);
    } else if (n == 1) {
        wynik.value += `%`;
    } else if (n == 2) {
        wynik.value = ``;
    } else if (n == 3) {
        wynik.value += `/`;
    } else if (n == 4) {
        wynik.value += `7`;
    } else if (n == 5) {
        wynik.value+= `8`;
    } else if (n == 6) {
        wynik.value += `9`;
    } else if (n == 7) {
        wynik.value += `*`;
    } else if (n == 8) {
        wynik.value += `4`;
    } else if (n == 9) {
        wynik.value += `5`;
    } else if (n == 10) {
        wynik.value += `6`;
    } else if (n == 11) {
        wynik.value += `-`;
    } else if (n == 12) {
        wynik.value += `1`;
    } else if (n == 13) {
        wynik.value += `2`;
    } else if (n == 14) {
        wynik.value += `3`;
    } else if (n == 15) {
        wynik.value += `+`;
    } else if (n == 16) {
        wynik.value += ``;
    } else if (n == 17) {
        wynik.value += `0`;
    } else if (n == 18) {
        wynik.value += `.`;
    } else if (n == 19) {
        wynik.value = eval(wynik.value);
    } else {
        console.log("ERROR");
    }
}