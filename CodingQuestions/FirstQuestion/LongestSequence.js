console.log("Connected ...")
//Define variables what we need to 
const userInput = document.getElementById('userInput')
const btnSend = document.getElementById('btn')
const resultShow = document.getElementById('showResult')
let getInput=''

//to get user input
userInput.addEventListener('keyup',(e) => {
   // We get user input and make that  the characters of string lowercase
   getInput = e.target.value;
   getInput = getInput.toLowerCase()
})

//define our function
const longestSequence = (str) => {
   let maxCount = 1
   let isMaxOne = false
   let sameLengthArr = []
   let maxChar = null
   let prevChar = null
   let count = 0
   console.log(str)
   for(let i = 0;i< str.length; i++){
       let currentChar = str.charAt(i)
        if(prevChar === currentChar){
            count +=1
        }
        else{
            count = 1
        }
        if(count > maxCount){
            maxCount = count
            maxChar = currentChar
            isMaxOne = true
        }
        else if(count === maxCount){
           isMaxOne = false
           count = maxCount
           sameLengthArr.push(currentChar)
        }
        prevChar = currentChar
   }
   const result = {}
    if(!isMaxOne){
      sameLengthArr = sameLengthArr.sort()
      result[sameLengthArr[0]] = maxCount
    }
    else{
       result[maxChar]= maxCount
    }
    return result
}
// Click to see the result
btnSend.addEventListener('click',(e)=> {
    e.preventDefault()
    const result = longestSequence(getInput)
    console.log(result)
    resultShow.innerText = JSON.stringify(result)

})
