let dialedNumber = "";

function pressKey(key) {
  dialedNumber += key;
  document.getElementById("dialed-number").textContent = dialedNumber;
}

function clearDialer() {
  dialedNumber = "";
  document.getElementById("dialed-number").textContent = "Enter a number...";
}

function makeCall() {
  if (dialedNumber === "") {
    alert("Please enter a number to call!");
  } else {
    alert(`Calling ${dialedNumber}...`);
    clearDialer();
  }
}

function dialContact(name, number) {
  dialedNumber = number;
  document.getElementById("dialed-number").textContent = `Calling ${name} (${number})...`;
}
