let attention = document.querySelector('.attention');
let test = 0;

function blink (){

  if (test < 1){
    test++;
    attention.style.opacity = '1';
  } else {
    test = 0;
    attention.style.opacity = '0';
  }

}


setInterval(blink, 500)