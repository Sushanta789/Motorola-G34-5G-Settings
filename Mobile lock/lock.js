let enteredPIN = '';
const correctPIN = '5629'; // Set your PIN here
const pinDisplay = document.getElementById('pinDisplay');
const message = document.getElementById('message');

function pressKey(num) {
  if (enteredPIN.length < 4) {
    enteredPIN += num;
    updateDisplay();
    speak(num);
  }
}

function clearPIN() {
  enteredPIN = enteredPIN.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  pinDisplay.textContent = enteredPIN.padEnd(4, '_');
}

function submitPIN() {
  if (enteredPIN === correctPIN) {
    message.style.color = 'lightgreen';
    message.textContent = '✅ Unlocked';
    speak('PIN correct, unlocking');
    setTimeout(() => {
      window.location.href = '/Settings/settings.html';
    }, 1000);
  } else {
    message.style.color = '#f44336';
    message.textContent = '❌ Incorrect PIN';
    speak('Incorrect PIN');
    enteredPIN = '';
    updateDisplay();
  }
}

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(msg);
}
