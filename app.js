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





});//End DOMContentLoaded