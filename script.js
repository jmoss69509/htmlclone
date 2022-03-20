function processData(){
   let dataIn = document.getElementById('textBox').value;

   //alert (dataIn);
   let dataArr =  dataIn.split("")
   document.getElementById('centre').innerHTML=dataArr[4];
   
}