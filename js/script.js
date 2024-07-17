const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});




// Function to set active class on the clicked link
function setActiveLink(event) {
  // Get all links
  const links = document.querySelectorAll('.links a');
  
  // Remove active class from all links
  links.forEach(link => link.classList.remove('active'));
  
  // Add active class to the clicked link
  event.target.classList.add('active');
}

// Attach click event listener to all links
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', setActiveLink);
});
