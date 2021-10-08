const cu1 = document.querySelector('.cu1');

cu1.addEventListener('click', () => {

  const isShowing = document.querySelector('.cus1').classList.contains('disappear');

  if(isShowing){
  document.querySelector('.cus1').classList.remove('disappear');
  document.querySelector('.cu1').querySelector('i.fas').classList.add('fa-times');
  document.querySelector('.cu1').querySelector('i.fas').classList.remove('fa-plus');
} else{
  document.querySelector('.cus1').classList.add('disappear');
  document.querySelector('.cu1').querySelector('i.fas').classList.add('fa-plus');
  document.querySelector('.cu1').querySelector('i.fas').classList.remove('fa-times');
}

});



const cu2 = document.querySelector('.cu2');

cu2.addEventListener('click', () => {

  const isShowing = document.querySelector('.cus2').classList.contains('disappear');

  if(isShowing){
  document.querySelector('.cus2').classList.remove('disappear');
  document.querySelector('.cu2').querySelector('i.fas').classList.add('fa-times');
  document.querySelector('.cu2').querySelector('i.fas').classList.remove('fa-plus');
} else{
  document.querySelector('.cus2').classList.add('disappear');
  document.querySelector('.cu2').querySelector('i.fas').classList.add('fa-plus');
  document.querySelector('.cu2').querySelector('i.fas').classList.remove('fa-times');
}

});


const cu3 = document.querySelector('.cu3');

cu3.addEventListener('click', () => {

  const isShowing = document.querySelector('.cus3').classList.contains('disappear');

  if(isShowing){
  document.querySelector('.cus3').classList.remove('disappear');
  document.querySelector('.cu3').querySelector('i.fas').classList.add('fa-times');
  document.querySelector('.cu3').querySelector('i.fas').classList.remove('fa-plus');
} else{
  document.querySelector('.cus3').classList.add('disappear');
  document.querySelector('.cu3').querySelector('i.fas').classList.add('fa-plus');
  document.querySelector('.cu3').querySelector('i.fas').classList.remove('fa-times');
}

});



const cu4 = document.querySelector('.cu4');

cu4.addEventListener('click', () => {

  const isShowing = document.querySelector('.cus4').classList.contains('disappear');

  if(isShowing){
  document.querySelector('.cus4').classList.remove('disappear');
  document.querySelector('.cu4').querySelector('i.fas').classList.add('fa-times');
  document.querySelector('.cu4').querySelector('i.fas').classList.remove('fa-plus');
} else{
  document.querySelector('.cus4').classList.add('disappear');
  document.querySelector('.cu4').querySelector('i.fas').classList.add('fa-plus');
  document.querySelector('.cu4').querySelector('i.fas').classList.remove('fa-times');
}

});


const cu5 = document.querySelector('.cu5');

cu5.addEventListener('click', () => {

  const isShowing = document.querySelector('.cus5').classList.contains('disappear');

  if(isShowing){
  document.querySelector('.cus5').classList.remove('disappear');
  document.querySelector('.cu5').querySelector('i.fas').classList.add('fa-times');
  document.querySelector('.cu5').querySelector('i.fas').classList.remove('fa-plus');
} else{
  document.querySelector('.cus5').classList.add('disappear');
  document.querySelector('.cu5').querySelector('i.fas').classList.add('fa-plus');
  document.querySelector('.cu5').querySelector('i.fas').classList.remove('fa-times');
}

});


const cu6 = document.querySelector('.cu6');

cu6.addEventListener('click', () => {

  const isShowing = document.querySelector('.cus6').classList.contains('disappear');

  if(isShowing){
  document.querySelector('.cus6').classList.remove('disappear');
  document.querySelector('.cu6').querySelector('i.fas').classList.add('fa-times');
  document.querySelector('.cu6').querySelector('i.fas').classList.remove('fa-plus');
} else{
  document.querySelector('.cus6').classList.add('disappear');
  document.querySelector('.cu6').querySelector('i.fas').classList.add('fa-plus');
  document.querySelector('.cu6').querySelector('i.fas').classList.remove('fa-times');
}

});




// let cu = document.querySelectorAll('.cu');
// for (var i = 0; i < cu.length; i++) {
//       cu[i].addEventListener('click', () => {
//
//         let isShowing = document.querySelectorAll('.cus').classList.contains('disappear');
//
//         if(isShowing[i]){
//         isShowing[i].classList.remove('disappear');
//         document.querySelector(cu[i]).querySelector('i.fas').classList.add('fa-times');
//         document.querySelector(cu[i]).querySelector('i.fas').classList.remove('fa-plus');
//       } else{
//         isShowing[i].classList.add('disappear');
//         document.querySelector(cu[i]).querySelector('i.fas').classList.add('fa-plus');
//         document.querySelector(cu[i]).querySelector('i.fas').classList.remove('fa-times');
//       }
//       })
// }
