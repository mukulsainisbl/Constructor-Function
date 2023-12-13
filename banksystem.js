  bankAccount=function(AccountNumber,Name,Type,Balance){
    this.AccountNumber=AccountNumber;
    this.Name=Name;
    this.Type=Type;
    this.Balance=Balance;


    this.deposite=function(amount){
        this.Balance+=amount

    }

    this.withdraw=function(amount){
   if(amount <=this.Balance){
   
    console.log("Withdraw succesfull",amount)
    this.Balance -=amount
   }
   else{
    console.log("You  have insufficient balnace", `and your balance is ${this.Balance}`)
   }    
    }
}

let acc1= new bankAccount(1234,"Mukul Saini","Saving",500);
console.log(acc1)
 
acc1. deposite(1200)

acc1 .withdraw(200)

let acc2= new bankAccount(5678,"Ankit Saini","Saving",1000)

acc2.deposite(500)
acc2.withdraw(300)

let acc3 = new bankAccount(1234,"Pankaj Saini", "saving" ,1000)
acc3.deposite(500)
acc3.withdraw(200)


let accounts = [ acc1,acc2,acc3]
console.log(accounts)


function getTotalBalance(accounts){
    let total=0;
    for(let i=0; i < accounts.length;i++){
        total += accounts[i].Balance
    }
    console.log(total)
}
getTotalBalance(accounts)