function goBack() {
  window.history.back(); // or window.location.href = "security.html";
}

// Voice output using Speech Synthesis
function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-US";
  window.speechSynthesis.cancel(); // stop previous speech
  window.speechSynthesis.speak(msg);
}
