let attention = document.querySelector('.attention');
let test = 0;

const title = document.querySelector('h1');
const developer = document.querySelector('#dev');

function typeWriter(element){

  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((lyrics, i) => {

    setTimeout(() => element.innerHTML += lyrics, 150 * i);

  });

}




function blink (){

  if (test < 1){
    test++;
    attention.style.opacity = '1';
  } else {
    test = 0;
    attention.style.opacity = '0';
  }

}



typeWriter(title)

setInterval(blink, 500)