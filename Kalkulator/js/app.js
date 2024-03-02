let btns = document.getElementsByClassName("btn");
let btnsCount = btns.length - 1;

let wynik = document.getElementById("wynik");
let currentBtnValue;
let dzialanie;

function button() {
    if (currentBtnValue == 0) {
        wynik.value = ``;
    } else if (currentBtnValue == 1) {
        wynik.value = wynik.value+`/`;
    } else if (currentBtnValue == 2) {
        wynik.value = wynik.value+`7`;
    } else if (currentBtnValue == 3) {
        wynik.value = wynik.value+`8`;
    } else if (currentBtnValue == 4) {
        wynik.value = wynik.value+`9`;
    } else if (currentBtnValue == 5) {
        wynik.value = wynik.value+`*`;
    } else if (currentBtnValue == 6) {
        wynik.value = wynik.value+`4`;
    } else if (currentBtnValue == 7) {
        wynik.value = wynik.value+`5`;
    } else if (currentBtnValue == 8) {
        wynik.value = wynik.value+`6`;
    } else if (currentBtnValue == 9) {
        wynik.value = wynik.value+`-`;
    } else if (currentBtnValue == 10) {
        wynik.value = wynik.value+`1`;
    } else if (currentBtnValue == 11) {
        wynik.value = wynik.value+`2`;
    } else if (currentBtnValue == 12) {
        wynik.value = wynik.value+`3`;
    } else if (currentBtnValue == 13) {
        wynik.value = wynik.value+`+`;
    } else if (currentBtnValue == 14) {
        wynik.value = wynik.value+`#`;
    } else if (currentBtnValue == 15) {
        wynik.value = wynik.value+`0`;
    } else if (currentBtnValue == 16) {
        wynik.value = wynik.value+`.`;
    } else if (currentBtnValue == 17) {
        wynik.value = eval(wynik.value);
    } else {
        console.log("ERROR");
    }
}

function c() {
    currentBtnValue = 0;
    return currentBtnValue;
}
function di() {
    currentBtnValue = 1;
    return currentBtnValue;
}
function s() {
    currentBtnValue = 2;
    return currentBtnValue;
}
function e() {
    currentBtnValue = 3;
    return currentBtnValue;
}
function n() {
    currentBtnValue = 4;
    return currentBtnValue;
}
function x() {
    currentBtnValue = 5;
    return currentBtnValue;
}
function f() {
    currentBtnValue = 6;
    return currentBtnValue;
}
function fi() {
    currentBtnValue = 7;
    return currentBtnValue;
}
function si() {
    currentBtnValue = 8;
    return currentBtnValue;
}
function min() {
    currentBtnValue = 9;
    return currentBtnValue;
}
function o() {
    currentBtnValue = 10;
    return currentBtnValue;
}
function t() {
    currentBtnValue = 11;
    return currentBtnValue;
}
function th() {
    currentBtnValue = 12;
    return currentBtnValue;
}
function p() {
    currentBtnValue = 13;
    return currentBtnValue;
}
function h() {
    currentBtnValue = 14;
    return currentBtnValue;
}
function z() {
    currentBtnValue = 15;
    return currentBtnValue;
}
function d() {
    currentBtnValue = 16;
    return currentBtnValue;
}
function eq() {
    currentBtnValue = 17;
    return currentBtnValue;
}