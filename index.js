// Search Google with the entered query
function searchGoogle() {
  const query = document.getElementById("search-input").value.trim();
  if (query !== "") {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, "_blank");
  }
}

// Open the top result directly (I'm Feeling Lucky)
function feelingLucky() {
  const query = document.getElementById("search-input").value.trim();
  if (query !== "") {
    const luckyUrl = `https://www.google.com/search?btnI=I&q=${encodeURIComponent(query)}`;
    window.open(luckyUrl, "_blank");
  }
}

// Trigger search on pressing Enter key
function handleKeyPress(event) {
  if (event.key === "Enter") {
    searchGoogle();
  }
}

// Add event listener when page loads
window.onload = function () {
  const input = document.getElementById("search-input");
  input.addEventListener("keypress", handleKeyPress);
};
