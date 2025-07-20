function loadNavbar() {
    fetch("../html/navbar.html")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load navbar.html: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        const navbarPlaceholder = document.getElementById("navbar-placeholder");
        if (navbarPlaceholder) {
          navbarPlaceholder.innerHTML = data;
  
          // Highlight active link
          const currentPage = location.pathname.split("/").pop() || "index-updated.html"; // Fallback to index-updated.html
          document.querySelectorAll(".nav-links a").forEach(link => {
            const href = link.getAttribute("href");
            if (href === currentPage || (currentPage === "" && href === "index-updated.html")) {
              link.classList.add("active");
            } else {
              link.classList.remove("active"); // Ensure only the active link has the class
            }
          });
        } else {
          console.error("Navbar placeholder element not found");
        }
      })
      .catch(error => {
        console.error("Error loading navbar:", error);
      });
  }
  
  // Load navbar when DOM is fully loaded
  document.addEventListener("DOMContentLoaded", loadNavbar);