// pour rendre ma nav active

//1. je crée une variable pour l'icone burger en recuperant le nom de la classe de mon html qui est nav-toogle

 let iconeBurger = document.querySelector(".nav-toogle");

 //2. je crée une variable navigation en recuperant la class nav menu

 let navigation = document.querySelector("nav");


 //3. j'ajoute un evenement quand on clic sur les 3 barres. 
 iconeBurger.addEventListener("click",toogleNav);

 //4.

 let lienNav = document.querySelectorAll("a");
 console.log(lienNav);

 //4. je crée la fonction de toogleNav que j'ai mis au dessus
 // et j'ajoute la fonction pour la navigation en fonction qu'on clic sur le menu
 
 function toogleNav(){
    iconeBurger.classList.toggle("active")
    navigation.classList.toggle("nav-taille") 
    navigation.style.transition ='all ease 1s';
        
    for(let i=0;i < lienNav.length;i++){
lienNav[i].classList.toggle('ecriture')
lienNav[i].style.transition ='all ease 1s';
    }

 }










