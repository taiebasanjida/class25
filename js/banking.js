document.getElementById('deposit-button').addEventListener('click',function(){
    // get deposit input from html tag and convert it number
   const depositInputField=document.getElementById('deposit-input')
  
  const inputText=depositInputField.value;
   const newDepositeAmount=parseFloat(inputText)

//   get previous deposit number and convert it number
  const depositTotal=document.getElementById('deposit-total');
 const previousDepositText= depositTotal.innerText
 const previousDepositAmount= parseFloat(previousDepositText)


// add previous deposit with new deposit and update in previous deposithtml tag
 const newDepositTotal=previousDepositAmount+newDepositeAmount;
 depositTotal.innerText=newDepositTotal

//  clear the input value
depositInputField.value=''

 
//  update new balance
 const previousBalanceTotal=document.getElementById('balace-total')
  const previousBalanceTotalText=previousBalanceTotal.innerText
  const previousBalanceTotalAmount=parseFloat(previousBalanceTotalText)
  const newBalanceTotal=previousBalanceTotalAmount+newDepositeAmount
  previousBalanceTotal.innerText=newBalanceTotal
   
    
})


  document.getElementById('withdra-button').addEventListener('click',function(){

     const withdrawInputField=document.getElementById('withdraw-input');
    const withdrawInputText= withdrawInputField.value;
    const newWithdrawAmount = parseFloat(withdrawInputText)
   
    // get previous withdraw number and convert it number

const withdrawTotal=document.getElementById('withdraw-total')
const withdrawTotalText = withdrawTotal.innerText;
 const previousWithdrawTotalAmount=parseFloat(withdrawTotalText)


// add previous withdraw with new withdraw and update in previous withdraw html tag
const newWithdawTotl=previousWithdrawTotalAmount+newWithdrawAmount
withdrawTotal.innerText=newWithdawTotl
 
//  update new balance
const previousBalanceTotal=document.getElementById('balace-total')
const previousBalanceTotalText=previousBalanceTotal.innerText
const previousBalanceTotalAmount=parseFloat(previousBalanceTotalText)
const newBalanceTotal=previousBalanceTotalAmount-newWithdrawAmount;
previousBalanceTotal.innerText= newBalanceTotal

//  clear the input value
withdrawInputField.value=''

    
  })
