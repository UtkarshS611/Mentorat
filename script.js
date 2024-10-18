// Mobile nav
function menuToggle() {
    var mobile_nav = document.querySelector('.mobile_nav');
    mobile_nav.classList.toggle('menu_animation');
}

document.getElementById('getStartedBtn').addEventListener('click', function() {
    alert('Thank you for your interest! We\'ll get you started soon.');
});