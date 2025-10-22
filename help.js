    function performSearch() {
      const query = document.getElementById('searchInput').value;
      if (query) {
        alert(`You searched for: ${query}`);
        // Replace with actual search logic or redirect
        // Example: window.location.href = `https://www.google.com/search?q=${query}`;
      } else {
        alert('Please enter a search term.');
      }
    }