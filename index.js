// let a = [1,2,3,4]

// let sum = 0

// for (let i = 0; i < a.length; i++) {
//   sum +=a[i]
// }
// console.log('a:',a);
// console.log(sum);

//prev -  вычисляемое значение
//prev - ДО старта равно нулевой элемент массива если мы не укажем сами  a[0]
// если мы указываем его сразу (2)  то будет равен нулю
// let b = a.reduce(function name(prev, item, index) {
  
// })

/*
let b = a.reduce(function name(prev, item, index) {

},0)
*/

// // простой вариант рабочий
// let b = a.reduce(function name(prev, item, index) {
//   return prev + item
// })
//console.log(b);


//нахождение максимального элемента массива



let a1 = [5,3,8,4,2,1, 2, 3, 4]

let max = a1[0];
for (let i = 0; i < a1.length; i++) {
    if(a1[i]> max){
      max = a1[i]
    }
}
console.log(max);


let c = a1.reduce((prev,item)=>{
  if(prev < item) {
    return item;
  } else {
    return prev;
  }
})

console.log(c);


// индекс

let d = a1.reduce((prev, item, index) => {
 if (item >  prev[1]) {
   return [index, item]
 } else {
   return prev
 }
},[0,a1[0]])

console.log(d);
