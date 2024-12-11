import './style.css';

let num_buttons = [];

for (let i = 0; i <= 9; i++) {
  num_buttons.push(document.getElementById(String(i)));
}

let question = '';
for (let i = 0; i <= 9; i++) {
  num_buttons[i].addEventListener('click', function () {
    question += String(i);
    
    equate(question);
  });
}

document.getElementById('add').addEventListener('click', function () {
  question += '+';
  equate(question);
});

document.getElementById('mult').addEventListener('click', function () {
  question += '*';
  equate(question);
});

document.getElementById('div').addEventListener('click', function () {
  question += '/';
  equate(question);
});

document.getElementById('sub').addEventListener('click', function () {
  question += '-';
  equate(question);
});

document.getElementById('eq').addEventListener('click', function () {
  let ans = eval(question);
  equate(ans);
});

function equate(dum) {
  document.getElementById('res').innerText = dum; //String(dum);
  console.log(dum);
}

document.getElementById('c').addEventListener('click', function () {
  question = '';
  equate('');
});
