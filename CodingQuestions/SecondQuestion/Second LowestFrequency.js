console.log("Connected ...")
//Define variables what we need to 
const userInput = document.getElementById('userInput')
const btnSend = document.getElementById('btn')
const resultShow = document.getElementById('showResult')
let getInput


//to get user input
userInput.addEventListener('keyup',(e) => {
   // We get user input and make that  the characters of string lowercase
   getInput = e.target.value;
   console.log(getInput)
   
  
})

const secondLowest = (arr) => {
 const newArr = arr.split('')
}