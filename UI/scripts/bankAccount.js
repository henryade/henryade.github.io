const SingleBankAccount = document.getElementById("viewOne"),
	  AllBankAccount = document.getElementById("viewAll"),
	  UpdateBankAccountbtn = document.getElementById("updateAccNum"),
	  viewSingleBankAccountBtn = document.getElementById("bankAccbtn"),
	  Deletebtn = document.getElementById("deletebtn"),
	  BankAccountNumber = document.getElementById("bankAccNum"),
	  bankAccountClosebtn = document.getElementById("bankAccClosebtn");


window.onload = function(){
	SingleBankAccount.style.display = "none"; 
}
viewSingleBankAccountBtn.addEventListener("click", ()=>{
	UpdateBankAccountbtn.innerHTML = BankAccountNumber.value;
	SingleBankAccount.style.display = "block"; 
	AllBankAccount.style.display = "none";
})
bankAccountClosebtn.addEventListener("click", ()=>{
	SingleBankAccount.style.display = "none";
	AllBankAccount.style.display = "block";
	BankAccountNumber.value = ""; 
})

Deletebtn.addEventListener("click", ()=>{
	BankAccountNumber.value = "";
	SingleBankAccount.style.display = "none";
	AllBankAccount.style.display = "block";
})
 
