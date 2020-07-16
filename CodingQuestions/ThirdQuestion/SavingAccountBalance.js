const openBalanceInput = document.getElementById('openingSum')
const interestRateInput  = document.getElementById('interestRate')
const taxFreeLimitInput  = document.getElementById('taxFreeLimit')
const taxRateInput  = document.getElementById('taxRate')
const numMonthsInput  = document.getElementById('numMonths')
const btn = document.getElementById('btn')
const resultShow = document.getElementById('result')

let myBalance,interestRate,taxFreeLimit,taxRate,numMonths,result

openBalanceInput.addEventListener('keyup', (e) =>{
    myBalance = parseFloat(e.target.value)
})
interestRateInput.addEventListener('keyup',(e) =>{
    interestRate = parseFloat(e.target.value)
})
taxFreeLimitInput.addEventListener('keyup',(e) => {
    taxFreeLimit = parseFloat(e.target.value)
})
taxRateInput.addEventListener('keyup',(e) => {
    taxRate = parseFloat(e.target.value)
})
numMonthsInput.addEventListener('keyup',(e)=>{
    numMonths =  parseFloat(e.target.value)
})

const balance = (mainMoney,interest,taxFree,tax, period) =>{
    let totalInterest = 0
    let totalTax = 0
   for(let i = 0; i< numMonths;i++){
        if(mainMoney < taxFree){
            totalInterest = mainMoney * (interest/100)
            mainMoney +=totalInterest
        }
        else{
            totalTax = (mainMoney - taxFree) * (tax/100)
            totalInterest = (mainMoney) *(interest/100)
            mainMoney =  mainMoney + totalInterest -  totalTax
        }
   }
   return mainMoney 
}
btn.addEventListener('click', (e) =>{
    e.preventDefault()
   result = balance(myBalance,interestRate,taxFreeLimit,taxRate,numMonths)
   resultShow.innerText = result.toString()
   result=""
})