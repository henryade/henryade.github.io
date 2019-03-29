const 	username = document.getElementById("usernames"),
 		submit = document.getElementById("submit"),
 		accountInformation = document.getElementById("accountInformation"),
 		accNumber = document.getElementById("accNum"),
	  	transactType = document.getElementById("transactType"),
	  	transactAmount = document.getElementById("transactAmount"),
	  	emailNotification = document.getElementById("emailNotification"),
	  	transactbtn = document.getElementById("transactbtn");

const loadAcc = () => {
	accountInformation.innerHTML = `
	<form action="#pop-up9">
		<h1>New Transaction</h1>
		<p>
		<label for="transactionType">Choose Transaction Type: </label>
		<select id="transactType">
			<option value="">--Please choose an option--</option>
			<option value="debit">Debit</option>
			<option value="credit">Credit</option>
		</select>
		</p>
	
		<p>
			<div>
				<label for="name">Name: </label>
				<input type="text" id="name" name="name" required class="authInput accTransactInput" />
			</div>
			<div>
				<label for="mobile">Phone Number: </label>
				<input type="tel" id="mobile" name="mobile" required class="authInput accTransactInput" />
			</div>
			<div>
				<label  for="amount">Amount: </label>
				<input type="number" id="transactAmount" name="amount" required class="authInput accTransactInput" />
			</div>
		</p>
		<button id="transactbtn" class="createbtn authBtn">Submit</button>
	</form>
	<div id="accInfo">
		<h1>Account Details</h1>
		<p>
			<span>Account Name:</span> David Flush
		</p>
		<p>
			<span>Account Number:</span> ${accNumber.value}
		</p>
		<p>
			<span>Account Balance:</span> N1,000,000
		</p>
	</div>
	`;

}

const removeAcc = () => {
	accountInformation.innerHTML = "";
	accNumber.value = "";
}

const selectUser = (submit) => {
	if(username.value.toLowerCase() === "admin") submit.action = "Dashboard-admin.html";
	else if (username.value.toLowerCase() === "staff") submit.action = "Dashboard-staff.html";
	else submit.action = "Dashboard-user.html";
}





