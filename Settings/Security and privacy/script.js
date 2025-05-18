
// Toggle Play Protect scanning
function toggleItem(element) {
  const span = element.querySelector("span");
  if (span.innerText === "On") {
    span.innerText = "Off";
    span.style.color = "red";
    speak("Play Protect scanning turned off");
  } else {
    span.innerText = "On";
    span.style.color = "green";
    speak("Play Protect scanning turned on");
  }
}

// Voice output using speech synthesis
function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-US";
  window.speechSynthesis.speak(msg);
}

function ScreenLock() {
  // Redirect to next page (e.g., settings.html)
  window.location.href ="Device unlock/device-unlock.html";
}