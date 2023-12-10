function toggleNav() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}
document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.querySelector('form');
    const thankYouSection = document.getElementById('thank-you-section');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        feedbackForm.style.display = 'none';
        thankYouSection.style.display = 'block';
    });
});
function about(){
  window.location.href='about.html'
  
}
function contact(){
  window.location.href='contact.html';
}
function home(){
 window.location.href='index.html';
}
function feedback(){
  window.location.href='feedback.html'
}
function store(){
  window.location.href='store.html'
}