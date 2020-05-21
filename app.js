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
  
  const checkStringBtn = document.getElementById('checkStringBtn');

  checkStringBtn.onclick = function() {
    let resTask22Value = document.getElementById('resTask22Value');
    let checkString = document.getElementById('checkString').value;
    let quantityOfNum = checkString.length-checkString.replace(/\d/gm,'').length;

    let qStr = checkString;
    let quantityqStr = qStr.length-qStr.replace(/[a-zA-Zа-яА-я]/gm,'').length;

    resTask22Value.innerHTML = 'Количество цифр в строке - '+quantityOfNum+'шт.   ' + 'Количество символов '+quantityqStr+'шт.'
  }

  const regOfSymBtn = document.getElementById('regOfSymBtn');

  regOfSymBtn.onclick = function(){
    let regOfSym = document.getElementById('regOfSym').value;
    let regOfSymRes ='';
    let resValue = document.getElementById('resValue');
    for(let i=0; i< regOfSym.length; i++){
      if(regOfSym[i] === regOfSym[i].toLowerCase()){
        regOfSymRes += regOfSym[i].toUpperCase();
      }
      if(regOfSym[i] === regOfSym[i].toUpperCase()){
        regOfSymRes += regOfSym[i].toLowerCase();
      }
      
    }
    resValue.innerHTML = regOfSymRes;
  }







  // Task 4
  let taskFourArr = ['Яблоко', 'Банан','Ананас'];

   let mapRes = taskFourArr.map(el=>el[0]);
   console.log(mapRes);




  //  const reduceLikeAMap = taskFourArr.reduce((red, str)=> {
  //   let newAddfrr = taskFourArr[0];
  //   return taskFourArr;
  //  }, []);
  //  console.log(reduceLikeAMap);
 








});//End DOMContentLoaded