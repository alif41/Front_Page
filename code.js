<script>
  // Handle search when a button is clicked
  function searchGoogle() {
    const query = document.getElementById('search-input').value;
    if (query.trim() !== "") {
      const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
      window.open(url, "_blank");
    }
  }

  // Handle "I'm Feeling Lucky" button (goes to first result)
  function feelingLucky() {
    const query = document.getElementById('search-input').value;
    if (query.trim() !== "") {
      const url = "https://www.google.com/search?btnI=I&q=" + encodeURIComponent(query);
      window.open(url, "_blank");
    }
  }
</script>
