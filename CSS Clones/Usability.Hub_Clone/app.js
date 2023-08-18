let toggle = document.querySelector('#toggler');
let navLinks = document.querySelector('#nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})