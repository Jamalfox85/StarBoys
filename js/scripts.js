const ARIES = document.getElementById('aries');
const TAURUS = document.getElementById('taurus');
const GEMINI = document.getElementById('gemini');
const CANCER = document.getElementById('cancer');
const LEO = document.getElementById('leo');
const VIRGO = document.getElementById('virgo');
const LIBRA = document.getElementById('libra');
const SCORPIO = document.getElementById('scorpio');
const SAGITTARIUS = document.getElementById('sagittarius');
const CAPRICORN = document.getElementById('capricorn');
const AQUARIUS = document.getElementById('aquarius');
const PISCES = document.getElementById('pisces');
const NEXT = document.getElementById('next');
const PREVIOUS = document.getElementById('previous');
const ANAV = document.getElementById('anav');
const TNAV = document.getElementById('tnav');
const GNAV = document.getElementById('gnav');
const CNAV = document.getElementById('cnav');
const LNAV = document.getElementById('lnav');
const VNAV = document.getElementById('vnav');
const LINAV = document.getElementById('linav');
const SNAV = document.getElementById('snav');
const SAGNAV = document.getElementById('sagnav');
const CAPNAV = document.getElementById('capnav');
const AQNAV = document.getElementById('aqnav');
const PNAV = document.getElementById('pnav');
var signs = [ARIES, TAURUS, GEMINI, CANCER, LEO, VIRGO, LIBRA, SCORPIO, SAGITTARIUS, CAPRICORN, AQUARIUS, PISCES];
var slide = 0;
updateCard()


NEXT.addEventListener('click', next);
PREVIOUS.addEventListener('click', prev);
ANAV.addEventListener('click', aries);
TNAV.addEventListener('click', taurus);
GNAV.addEventListener('click', gemini);
CNAV.addEventListener('click', cancer);
LNAV.addEventListener('click', leo);
VNAV.addEventListener('click', virgo);
LINAV.addEventListener('click', libra);
SNAV.addEventListener('click', scorpio);
SAGNAV.addEventListener('click', sagittarius);
CAPNAV.addEventListener('click', capricorn);
AQNAV.addEventListener('click', aquarius);
PNAV.addEventListener('click', pisces);


function next() {
    if (slide < 11){
        slide += 1;
        signs[slide-1].style.display="none";
    } else {
        slide = 0;
        signs[slide+11].style.display="none";
    }
    updateCard();
}
function prev() {
    if (slide > 0){
        slide -= 1;
        signs[slide+1].style.display="none";
    } else {
        slide = 11;
        signs[slide-11].style.display="none";
    }
    updateCard();
}
function updateCard() {
    signs[slide].style.display = "block";
}
function clearCard() {
    signs.style.display = "none";
}

function aries() {
    signs[slide].style.display = "none";
    slide = 0;
    updateCard();
}
function taurus() {
    signs[slide].style.display = "none";
    slide = 1;
    updateCard();
}
function gemini () {
    signs[slide].style.display = "none";
    slide = 2;
    updateCard();
}
function cancer() {
    signs[slide].style.display = "none";
    slide = 3;
    updateCard();
}
function leo() {
    signs[slide].style.display = "none";
    slide = 4;
    updateCard();
}
function virgo() {
    signs[slide].style.display = "none";
    slide = 5;
    updateCard();
}
function libra () {
    signs[slide].style.display = "none";
    slide = 6;
    updateCard();
}
function scorpio() {
    signs[slide].style.display = "none";
    slide = 7;
    updateCard();
}
function sagittarius() {
    signs[slide].style.display = "none";
    slide = 8;
    updateCard();
}
function capricorn() {
    signs[slide].style.display = "none";
    slide = 9;
    updateCard();
}
function aquarius () {
    signs[slide].style.display = "none";
    slide = 10;
    updateCard();
}
function pisces() {
    signs[slide].style.display = "none";
    slide = 11;
    updateCard();
}