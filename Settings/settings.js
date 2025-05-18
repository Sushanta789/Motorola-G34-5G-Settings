    // Filter settings based on search input
    function filterSettings() {
      const input = document.getElementById("search").value.toLowerCase();
      const items = document.querySelectorAll(".setting-item");
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
      });
    }
    
    // Open the settings page
    function openPage(page) {
      document.body.classList.add('fade-out');
      setTimeout(() => window.location.href = page, 300);
      playSound();
    }
    
    // Play sound when setting is clicked
    function playSound() {
      const audio = new Audio('click-sound.mp3');
      audio.play();
    }
    
  function playSound() {
  const audio = new Audio('click-sound.mp3');
  audio.play();

  const message = "You have selected the settings page";
  const speech = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(speech);
}
