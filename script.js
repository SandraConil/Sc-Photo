 // pour rendre ma nav active  1er test pour mon menu qui fonctionne bien

// //1. je crée une variable pour l'icone burger en recuperant le nom de la classe de mon html qui est nav-toogle

 let iconeBurger = document.querySelector(".nav-toogle");

 //2. je crée une variable navigation en recuperant la class nav menu

  let navigation = document.querySelector("nav");


 //3. j'ajoute un evenement quand on clic sur les 3 barres.pour ecouter un événement.
  iconeBurger.addEventListener("click",toogleNav);

  //4.je recupere tous mes liens

 let lienNav = document.querySelectorAll("a");
 console.log(lienNav);


  //5. je crée la fonction de toogleNav que j'ai mis au dessus
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


 


 //5. je veux changer la couleur de mon titre Sandra Conil
 let titreSc = document.querySelector("#accueil");
 console.log(titreSc);

titreSc.addEventListener('mouseout', function(){
    titreSc.style.color = '#d75c9a';
}
);

titreSc.addEventListener('mouseleave',function(){
titreSc.style.color ="white";
});














