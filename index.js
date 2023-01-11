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


let navBar = document.querySelector('.navbar');
let allLi = document.querySelectorAll('li')

allLi.forEach((item)=>{

  item.addEventListener('click', e => {
      navBar.querySelector('.active-list').classList.remove('active-list')

      item.classList.add('active-list')
  })

});