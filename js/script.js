
const btn=document.querySelector('button')
console.log(btn)

btn.addEventListener('click',function(){
   const squarebox = document.getElementById('squarebox')
})

function boxadd(){
    const square = document.createElement('div')
    square.classList.add('box')
    square.addEventListener('click',function(){
      square.classList.add('clicksquare')
    })
    return square
}