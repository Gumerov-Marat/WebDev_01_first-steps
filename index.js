console.log('Забираем данные с инпута и помещаем данные ниже инпута');

// document.querySelector('button').onclick = myClick;

// function myClick() {
//   console.log("work");
//   let a = document.querySelector('.i-1').value;
//   console.log(a);

//   document.querySelector('.out').innerHTML = a;
// }

// // value - получить текст из input
// // innerHTML - получить - написать  текст в первый тег


// Второй более актиуальный способ
document.querySelector('button').addEventListener('click', myClick)

function myClick() {
  console.log("work");
  let a = document.querySelector('.i-1').value;
  console.log(a);

  document.querySelector('.out').innerHTML = a;
}

// value - получить текст из input
// innerHTML - получить - написать  текст в первый тег