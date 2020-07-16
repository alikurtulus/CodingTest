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
})

const reverseString = (str) => {
    let [firstLetter, ...rest] = str
    console.log(rest)
    if(str === "")
      return ""
    else if(str.length === 1)
      return str
    else{
        return reverseString(rest) + firstLetter;
    }

}
btnSend.addEventListener('click',(e) => {
    e.preventDefault()
    const reverseStr = reverseString(getInput)
    resultShow.innerText = reverseStr

})
