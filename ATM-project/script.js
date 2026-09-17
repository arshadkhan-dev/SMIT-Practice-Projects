let account = {
  name: "Student Account",
  pin: "1234",
  balance: 5000,
};

let transaction = [];

function resetATM() {
  alert("Card has ejected. \n Insert your card to begin.");
}

function startATM() {
  alert("Card inserted. Please enter your PIN");
  let accessGranted = false;

  while (!accessGranted) {
    let enteredPIN = prompt("Enter 4-digit PIN");
    if (enteredPIN === account.pin) {
      accessGranted = true;
    } else {
      enteredPIN = prompt("Incorrect PIN.Enter 4-digit PIN agian");
    }
  }
  let exit = false;
  while (!exit) {
    let menuText = "1. Check Balance \n2. Deposit \n3. Withdraw \n4. Exit";
    let choice = Number(prompt(menuText));

    switch (choice) {
      case 1: {
        alert("Your current balance is Rs:  " + account.balance);
        break;
      }
      case 2: {
        let depositAmount = Number(prompt("Enter amount to deposit:"));
        if (isNaN(depositAmount) || depositAmount <= 0) {
          alert("Invalid Amount");
          break;
        }
        account.balance = account.balance + depositAmount;
        alert(
          "Deposit Rs: " +
            depositAmount +
            " New Balance is Rs: " +
            account.balance,
        );
        break;
      }
      case 3: {
        let withdrawAmount = Number(prompt("Enter amount to withdraw: "));
        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
          alert("Invalid Amount");
        } else if (withdrawAmount > account.balance) {
          alert(
            "Insufficient Balanace. Your balance is Rs: " + account.balance,
          );
        } else {
          account.balance = account.balance - withdrawAmount;
          alert(
            "Withdraw: " +
              withdrawAmount +
              " New Balance is Rs: " +
              account.balance,
          );
        }
        break;
      }

      case 4: {
        let confirmExit = confirm("Are you sure you want  to exit?");
        if (confirmExit) {
          exit = true;
          alert("Card ejected.");
          alert("Thanks for using our ATM");
        }
        break;
      }
      default:
        alert("Invalid option. Please choose 1 to 4");
    }
  }
}
