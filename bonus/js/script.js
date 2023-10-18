
const btn=document.querySelector('button')
console.log(btn)


btn.addEventListener('click',function(){

  let sceltadifficoltà = document.getElementById('Difficoltà').value;
  const squarebox = document.getElementById('squarebox')
  squarebox.innerHTML='';
  console.log(sceltadifficoltà)
  let numeroquadratini;
  if(sceltadifficoltà ==='facile'){
      numeroquadratini = 100;
  }
  else if(sceltadifficoltà==='medio'){
      numeroquadratini = 81;
  }
  else{
     numeroquadratini=49;
  }
   
   
   for(let i = 0; i < numeroquadratini;i++){
    let square = boxadd(i,numeroquadratini);
    squarebox.append(square);
   }
})

function boxadd(quadratinoattuale,numsquare){
    squarewidth= Math.sqrt(numsquare)
    const square = document.createElement('div')
    square.classList.add('box')
    square.style.width=`calc(100% / ${squarewidth})`
    square.style.height=`calc(100% / ${squarewidth})`
    square.innerHTML=quadratinoattuale + 1;
    square.addEventListener('click',function(){
      square.classList.add('clicksquare')
    })
    return square
}