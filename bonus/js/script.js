
const btn=document.querySelector('button')
console.log(btn)


btn.addEventListener('click',function(){
  let sceltadifficoltà = document.getElementById('Difficoltà').value;
  console.log(sceltadifficoltà)
  
   const squarebox = document.getElementById('squarebox')
   const numeroquadratini = 100;
   for(let i = 0; i < numeroquadratini;i++){
    let square = boxadd(i);
    squarebox.append(square);
   }
})

function boxadd(quadratinoattuale){
    const square = document.createElement('div')
    square.classList.add('box')
    square.innerHTML=quadratinoattuale + 1;
    square.addEventListener('click',function(){
      square.classList.add('clicksquare')
    })
    return square
}