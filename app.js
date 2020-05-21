document.addEventListener("DOMContentLoaded", function(){
  const circleBtn = document.getElementById('circleBtn');
  let redLight = document.getElementById('red');
  let yellowLight = document.getElementById('yellow');
  let greenLight = document.getElementById('green');
  let activeLight = 1;
  circleBtn.onclick = function (){
    activeLight++;
    if(activeLight > 2){
      activeLight = 0;
    }
    switch (activeLight){
      case 0:
      greenLight.style.backgroundColor = '#8a8a8a';
      redLight.style.backgroundColor = 'red';
      break;

      case 1:
      redLight.style.backgroundColor = '#8a8a8a';
      yellowLight.style.backgroundColor = 'yellow';
      break;
      
      case 2:
      yellowLight.style.backgroundColor = '#8a8a8a';
      greenLight.style.backgroundColor = 'green';
      break; 
    
      default:
      activeLight = 1;
    };
    
  }

  //2.1 Number to String
  const simpleNum = [" ", "один ", "два ", "три ", "четыре ", "пять ", "шесть ", "семь ", "восемь ", "девять "];

  const tensNum = ["десять ", "одиннадцать ", "двенадцать ", "тринадцать ", "четырнадцать ", "пятнадцать ", "шестнадцать ", "семнадцать ", "восемнадцать ", "девятнадцать "];

  const bigNum = [" ", " ", "двадцать ", "тридцать ", "сорок ", "пятьдесят ", "шестьдесят ", "семьдесят ", "восемьдесят ", "девяносто "];

  let numToStrBtn = document.getElementById('numToStrBtn');
    
  numToStrBtn.onclick = function() {
    let numToStr = document.getElementById('numToStr').value;
    let numToStrRes = document.getElementById('numToStrRes');
    
    if(numToStr >= 0 || numToStr <= 9){
      numToStrRes.innerHTML = simpleNum[numToStr];

  }
   if(numToStr >= 10 && numToStr <= 19){
    numToStrTens = numToStr.split('');
    
    numToStrRes.innerHTML = tensNum[numToStr[1]];

}
    if(numToStr >= 20 && numToStr <= 99){
      //37
      let numToStrBig = numToStr.split('');
      //gпллучаем 3 и 7
      numToStrRes.innerHTML = bigNum[numToStrBig[0]] + simpleNum[numToStrBig[1]];
      
    }
  }//onclick
  

});//End DOMContentLoaded