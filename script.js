// lorsque on clique sur menu_container alors on affiche notre menu

let burger = document.querySelector('.menu_container');
let menu = document.querySelector('.nav_menu');

burger.addEventListener('click', function(){
    menu.classList.toggle('toggle');
});