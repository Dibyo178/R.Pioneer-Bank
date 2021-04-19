//   Login Button event handler...

const loginButton=document.getElementById('login');

loginButton.addEventListener('click',function(){
    const loginArea=document.getElementById('login-area');
    loginArea.style.display='none';

    const transaction=document.getElementById('transaction-area');

    transaction.style.display='block';
})

// deposit button event handler..

 const depositBtn= document.getElementById('add deposit');
    depositBtn.addEventListener('click',function(){
    const depositAmount =document.getElementById('depositAmount').value;
    const depositNumber=parseFloat(depositAmount); // parseFloat - string number k int convert korbe..

    const currentDeposit =document.getElementById('currentDeposit').innerText;
    const currentDepositNumber=parseFloat(currentDeposit);
    const totalDeposit=depositNumber+currentDepositNumber;
    
    

    document.getElementById('currentDeposit').innerText=totalDeposit; //write kortechi currentDeposit k..innerText diye

    document.getElementById('depositAmount').value=""; // depositAmount er value add korar por empty hoye jabe..
    

      // add deposit total balance

      const addBalance=document.getElementById('balance').innerText;

      const balanceNumber=parseFloat(addBalance);

      const depositBalance=totalDeposit+balanceNumber;

      document.getElementById('balance').innerText=depositBalance;
})

// withdraw event handler..

const withdrawBtn=document.getElementById('withdraw');

withdrawBtn.addEventListener('click',function(){
    const withdrawNumber=document.getElementById('withdrawNumber').value;
    const withdrawValue=parseFloat(withdrawNumber);


    const countWithdraw=document.getElementById('countWithdraw').innerText;
    const countWithdrawNumber=parseFloat(countWithdraw);
    const totalWithdraw=withdrawValue+countWithdrawNumber;

    document.getElementById('countWithdraw').innerText=totalWithdraw;
    document.getElementById('withdrawNumber').value="";

    //withdraw from total balance..

    const withdrawBalance=document.getElementById('balance').innerText;
    const withdrawBalanceNumber=parseFloat(withdrawBalance);
    const totalWithdrawNumber= withdrawBalanceNumber-totalWithdraw;

    document.getElementById('balance').innerText=totalWithdrawNumber;
})

