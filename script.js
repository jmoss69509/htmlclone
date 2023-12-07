let dataIn = "1234567dhdhwbndbfh12345678hawhwh1723421!!!WW81726354";
let dataInArr = dataIn.split("");
let searchExp = "[0-9]";
let dataOutArr = [];
function numberDetect() {
  for (let i = 0; i < dataIn.length; i++) {
    if (dataInArr[i].match(searchExp)) {
      console.log(i + " True");
      dataOutArr.push(dataInArr[i]);
    } else {
      console.log(i + " False");
      dataOutArr.push("£");
    }
  }
}

function stripPounds(){
  for (i = 1; i < dataOutArr.length; i++) {
    let posOne = i+1;
    let posTwo = i;
    
    if (dataOutArr[posOne] === ("£") & dataOutArr[posTwo] ===("£")){
      dataOutArr.splice(posTwo, 1);
    }
    console.log ('Function Working');
  }
}
console.log("String length: " + dataIn.length);
console.log("dataOutArr length " + dataOutArr.length);
console.log(dataIn);

numberDetect();
//console.log(dataInArr);
console.log(dataOutArr.join(''));
console.log("dataOutArr length " + dataOutArr.length);
stripPounds();
stripPounds();
console.log (dataOutArr.join(''));

function stripPounds(){
  for (i = 1; i < dataOutArr.length; i++) {
    let posOne = i+1;
    let posTwo = i;
    
    if (dataOutArr[posOne] === ("£") & dataOutArr[posTwo] ===("£")){
      dataOutArr.splice(posTwo, 1);
    }
    console.log ('Function Working');
  }
}
window.document.write ('Javascript is working');
console.log (2);

