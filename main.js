const square_count = document.getElementById('square');
square_count.addEventListener('click', square_place);
const triangle_count = document.getElementById('triangle');
triangle_count.addEventListener('click', triangle_place);
const circle_count = document.getElementById('circle');
circle_count.addEventListener('click', circle_place);

const addSquareBоx = () => {
  const rootDiv = document.getElementsByClassName("place");
  const square = document.createElement("div");
  square.classList.add('square-box');
  rootDiv[0].appendChild(square);
  //случайные значения (размер, местоположение)
  const rand_width = `${Math.floor(Math.random()*(200))}px`
  square.style.width =  rand_width;
  square.style.height = rand_width;
  const max = 80;
  square.style.top =  `${Math.floor(10+Math.random()*(max-30))}%`
  square.style.left = `${Math.floor(Math.random()*max)}%` 
}

const addTriangleBоx = () => {
  const rootDiv = document.getElementsByClassName("place");
  const triangle = document.createElement("div");
  triangle.classList.add('triangle-box');
  rootDiv[0].appendChild(triangle); 
  const max = 80;
  triangle.style.top =  `${Math.floor(10+Math.random()*(max-10))}%`
  triangle.style.left = `${Math.floor(Math.random()*max)}%`
}

const addCircleBоx = () => {
  const rootDiv = document.getElementsByClassName("place");
  const circle = document.createElement("div");
  circle.classList.add('circle-box');
  rootDiv[0].appendChild(circle);
  //случайные значения (размер, местоположение)
  const rand_width = `${Math.floor(Math.random()*(200))}px`
  circle.style.width =  rand_width;
  circle.style.height = rand_width;
  const max = 80;
  circle.style.top =  `${Math.floor(10+Math.random()*(max-30))}%`
  circle.style.left = `${Math.floor(Math.random()*max)}%` 
}

function square_place () {
  var tmp = document.getElementById('count').value;
  for (var i = 0; i < tmp; i++) {
    addSquareBоx();
  }
}

function triangle_place () {
  var tmp = document.getElementById('count').value;
  for (var i = 0; i < tmp; i++) {
    addTriangleBоx();
  }
}

function circle_place () {
  var tmp = document.getElementById('count').value;
  for (var i = 0; i < tmp; i++) {
    addCircleBоx();
  }
}

function temp (event) {
  var t = event.target || event.srcElement
  t.remove();
}
