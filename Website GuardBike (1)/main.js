const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
  
menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


