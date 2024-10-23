// Letter to Value Mapping
const letterToValue = {
  A: 2,
  B: 2,
  C: 2,
  D: 3,
  E: 3,
  F: 3,
  G: 4,
  H: 4,
  I: 4,
  J: 5,
  K: 5,
  L: 5,
  M: 6,
  N: 6,
  O: 6,
  P: 7,
  Q: 7,
  R: 7,
  S: 7,
  T: 8,
  U: 8,
  V: 8,
  W: 9,
  X: 9,
  Y: 9,
  Z: 9,
};

// Convert letters to numbers and show result
function calculateLetterSum() {
  const input = document.getElementById("lettersInput").value;
  let result = "";
  for (let char of input.toUpperCase()) {
    if (letterToValue[char]) {
      result += letterToValue[char]; // Show only base number
    }
  }
  document.getElementById("resultValue").innerText = result || "0"; // Default to 0 if empty

  // Show notification
  showNotification();
}

// Show notification
function showNotification() {
  const notification = document.getElementById("notification");
  notification.classList.add("show"); // Make notification visible
  setTimeout(() => {
    notification.classList.remove("show"); // Hide after 3 seconds
  }, 3000);
}

// Toggle Dark Mode
function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById("darkModeToggle");
  body.classList.toggle("dark-mode");
  toggleButton.classList.toggle("active");
}
