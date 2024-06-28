//=================================================
// burger-menu
document.addEventListener("click", function (e) {
   const targetElement = e.target;
   // .menu-icon це клас кнопки при кліку на яку буде спрацьовувати код додаватись до тегу html клас menu-open 
   if (targetElement.closest('.menu-icon')) {
      document.documentElement.classList.toggle('menu-open');
      e.preventDefault();
   }
})
//=================================================