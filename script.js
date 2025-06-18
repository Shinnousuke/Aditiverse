// Theme toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});



// Smooth scroll & activate nav links
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    e.preventDefault();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Activate selected
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      target.classList.add('active');
    });
  });
});
document.querySelectorAll('.accordion-header').forEach((button) => {
  button.addEventListener('click', () => {
    const body = button.nextElementSibling;
    body.classList.toggle('open');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});
