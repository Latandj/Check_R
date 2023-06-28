//window.onload = function() {
//  setInterval(function(){
//    location.reload();
//  }, 1000);
//}


const hrst_1k = 101.09; //ч ст ох 1 к

const hrst_st2k = 120; //ч ст ст ох 2 к (5 р).

const hrst_st4k = 146.58; //ч ст ст оx 4 к (ст абк).

const hrst_5k = 161.75; //ч ст ох 5 к (ст моб).

const hrst_7k = 180.00; //ч ст ох 7 к (оп д).

const hrst_4r = 90.51; //ч ст ох 4 р (старое).

const hrst_5r = 101.18; //ч ст ох 5 р (старое).

const hrst_str = 141.39; //ч ст ст ох 4 р (старое).


var choice = 1;
var st_vibor = 1;

var staw = 1;

var rpr = 9;
var dpr = 1;


function updateValue() {
  var selectElement = document.getElementById("dols");
  var selectedValue = selectElement.value;
  choice = parseInt(selectedValue);
}
function updateValue1() {
  var selectElement = document.getElementById("prem");
  var selectedValue = selectElement.value;
  rpr = parseInt(selectedValue);
}
function updateValue2() {
  var selectElement = document.getElementById("dprem");
  var selectedValue = selectElement.value;
  dpr = parseInt(selectedValue);
}
function updateValue3() {
  var selectElement = document.getElementById("stas");
  var selectedValue = selectElement.value;
  staw = parseInt(selectedValue);
}


function recalculate() {


if(choice == 1) {st_vibor = hrst_1k}
else if(choice == 2) {st_vibor = hrst_st2k}
else if(choice == 3) {st_vibor = hrst_st4k}
else if(choice == 4) {st_vibor = hrst_5k}
else if(choice == 5) {st_vibor = hrst_7k}
else if(choice == 6) {st_vibor = hrst_4r}
else if(choice == 7) {st_vibor = hrst_5r}
else if(choice == 8) {st_vibor = hrst_str}
else {console.log("Stavka shit, brah")}

const podnst = 0.4
const nst = st_vibor * podnst; //ноч ст


var hr = 0; //кол ч.
var nhr = 0; //кол н ч.
var phr = 0; //кол пр ч.


var hrsInput = document.getElementById("hrs");
hr = parseInt(hrsInput.value);
var nhrsInput = document.getElementById("nhrs");
nhr = parseInt(nhrsInput.value);
var prhrsInput = document.getElementById("prhrs");
phr = parseInt(prhrsInput.value);

// новое!!

//  const input = document.getElementById("hrs");
//  input.addEventListener("input", function() {
//    if (input.value === "") {
//      input.value = "0";
//    }
//  });


 const inputs = document.querySelectorAll(".inhr");

inputs.forEach(input => {
  input.addEventListener("focus", function() {
    if (input.value === "0") {
      input.value = "";
    }
    // Установка курсора в конец поля
    input.selectionStart = input.selectionEnd = input.value.length;
  });

  input.addEventListener("input", function() {
    // Удаление любых символов, не являющихся цифрами
    input.value = input.value.replace(/[^0-9]/g, "");
    // Ограничение ввода до трех знаков
    input.value = input.value.slice(0, 3);
    // Ограничение максимального значения до 250
       if (Number(input.value) > 250) {
      input.value = "250";
    }
  });

  input.addEventListener("blur", function() {
    if (input.value === "") {
      input.value = "0";
    }
  });
});


// новое!!

var rrpr = 0.4;
var ddpr = 0.0; //пр за доп. сл.
var staaw = 0.0; //% стажа.
var skf = 0.8; //с ко.
var rkf = 0.7; //р ко.


//function updateValue() {
//  var selectElement = document.getElementById("prem");
//  var selectedValue = selectElement.value;
 // rpr = parseInt(selectedValue);
//}

if(rpr == 1) {rrpr = 0.0}
else if(rpr == 2) {rrpr = 0.05}
else if(rpr == 3) {rrpr = 0.1}
else if(rpr == 4) {rrpr = 0.15}
else if(rpr == 5) {rrpr = 0.2}
else if(rpr == 6) {rrpr = 0.25}
else if(rpr == 7) {rrpr = 0.3}
else if(rpr == 8) {rrpr = 0.35}
else if(rpr == 9) {rrpr = 0.4}
else {console.log("rpr shit, brah")}

if(dpr == 1) {ddpr = 0.0}
else if(dpr == 2) {ddpr = 0.05}
else if(dpr == 3) {ddpr = 0.1}
else if(dpr == 4) {ddpr = 0.15}
else if(dpr == 5) {ddpr = 0.2}
else if(dpr == 6) {ddpr = 0.25}
else if(dpr == 7) {ddpr = 0.3}
else if(dpr == 8) {ddpr = 0.35}
else if(dpr == 9) {ddpr = 0.4}
else {console.log("dpr shit, brah")}

if(staw == 1) {staaw = 0.0}
else if(staw == 2) {staaw = 0.03}
else if(staw == 3) {staaw = 0.05}
else if(staw == 4) {staaw = 0.07}
else if(staw == 5) {staaw = 0.1}
else {console.log("staw shit, brah")}




var ddh = 0; //доп дох.


//далее расчёт:.
var a1 = st_vibor * hr; //ч опл общ.
var s1 = staaw * a1; // стаж * на кол ч
var a2 = nst * nhr; //ч опл за н ч
var a3 = st_vibor * phr; //ч опл за пр ч.

var aa4 = a1 * ddpr; //пр доп сл.
var a4 = (a1 + a2 + aa4 + s1) * rrpr; //пр от пр.
var a5 = (a1 + a2 + a3 + a4 + aa4 + s1) * rkf; //р ко.
var a6 = (a1 + a2 + a3 + a4 + aa4 + s1) * skf; //с ко.


var dopdoh = 0;


var pre = a1 + a2 + a3+ aa4 + s1 + a4 + a5 + a6 + dopdoh;
var preout = pre / 100 * 13;
var out = pre - preout;


a1 = a1.toFixed(2);
a2 = a2.toFixed(2);
a3 = a3.toFixed(2);
s1 = s1.toFixed(2);
aa4 = aa4.toFixed(2);
a4 = a4.toFixed(2);
a5 = a5.toFixed(2);
a6 = a6.toFixed(2);
pre = pre.toFixed(2);
preout = preout.toFixed(2);
out = out.toFixed(2);

//var out = 240123.23

// Добавляем пробелы между каждыми тремя цифрами
pre = pre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

preout = preout.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

out = out.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

console.log("Часы" + " - " + a1);
console.log(a2);
console.log(a3);
console.log(aa4);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(pre);
console.log("13%" + " - " + preout);
console.log(choice);
console.log(rrpr);
console.log(ddpr);
console.log(skf + " " + "сев коэф");
console.log(rkf + " " + "рай коэф");


document.getElementById("outpre").value = pre;

document.getElementById("outpree").value = preout;

document.getElementById("output").value = out;

document.getElementById("khrs").value = hr;

document.getElementById("shrs").value = a1;

document.getElementById("knhrs").value = nhr;

document.getElementById("snhrs").value = a2;

document.getElementById("kphrs").value = phr;

document.getElementById("sphrs").value = a3;

document.getElementById("ptstw").value = staaw;

document.getElementById("sstw").value = s1;

document.getElementById("dslow").value = ddpr;

document.getElementById("sdslow").value = aa4;

document.getElementById("ppprem").value = rrpr;

document.getElementById("sppprem").value = a4;

document.getElementById("rrrkf").value = rkf;

document.getElementById("srrrkf").value = a5;

document.getElementById("ssskf").value = skf;

document.getElementById("sssskf").value = a6;
}


setInterval(function() {
recalculate();
}, 200);
