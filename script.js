function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

  
  
  // Function to apply selected color
  function applyColor(color) {
    document.documentElement.style.setProperty('--primary-color', color);
  }

  // On page load, check localStorage and apply saved color
  window.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
      applyColor(savedColor);
    }
  });

  // Color button click event
  document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', () => {
      const selectedColor = button.getAttribute('data-color');
      applyColor(selectedColor);
      localStorage.setItem('selectedColor', selectedColor);
    });
  });

  
  const buttons = document.querySelectorAll('.color-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const color = button.getAttribute('data-color');
      document.documentElement.style.setProperty('--primary-color', color);
    });
  });

  
  const colorButtons = document.querySelectorAll('.color-btn');
      colorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedColor = btn.getAttribute('data-color');
          document.documentElement.style.setProperty('--main-bg-color', selectedColor);
        });
      });



  