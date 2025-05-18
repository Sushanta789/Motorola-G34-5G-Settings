const airplaneToggle = document.getElementById("airplaneToggle");

airplaneToggle.addEventListener("change", () => {
  const status = airplaneToggle.checked ? "ON" : "OFF";
  alert("Aeroplane Mode is " + status);
});
