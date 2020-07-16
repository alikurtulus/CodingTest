console.log("Connected ...")
//Define variables what we need to 
const userInput = document.getElementById('userInput')
const btnFind = document.getElementById('btn')
const resultShow = document.getElementById('showResult')
let getInput=""


//to get user input
userInput.addEventListener('keyup',(e) => {
   // We get user input and make that  the characters of string lowercase
   getInput = e.target.value;
   console.log(getInput)
})
const secondLowest = (arr) => {
    let charArr = arr.split(',')
    let frequencyArr= []
    //This object is for frequency of char
    const frequencyChar = {};
    //Find the Char's frequency
    charArr.forEach((el) => {
        frequencyChar[el] = frequencyChar[el] ? (frequencyChar[el] += 1) : 1;
    });
    //made array to use for loop easily and find frequency of chars
    const newArr = Object.entries(frequencyChar)
    
    for(let i=0;i<newArr.length;i++){
        for(let j=1; j<newArr[i].length;j++){
            //If there is a frequency for this char and push this char to frequencyArr
            if(newArr[i][j] > 1){
              frequencyArr.push(newArr[i][j-1])
            }
        }
    }
    //If we do not have frequency char just pick second smallest char in array.
    if(frequencyArr.length === 0){
        //if we have more than elements of array just pick second smallest char in array.
        if(charArr.length >1){
            charArr = charArr.sort(function(a,b){
                return a - b
            })
            return charArr[1]
        }
        //If we have just one element just return that element
        else{
            return charArr[0]
        }
    }
    //If We have just one frequency char return that
    else if(frequencyArr.length === 1){
        return frequencyArr[0]
    }
    // If We have more than one frequency char just pick second frequency char and return it.
    else{
        frequencyArr = frequencyArr.sort(function(a,b){
            return a - b
        })
        return frequencyArr[1]
    }
}
btnFind.addEventListener('click',(e)=>{
    
    let secondLowestChar = secondLowest(getInput)
    resultShow.innerText = secondLowestChar.toString()
    resultShow =""
})

