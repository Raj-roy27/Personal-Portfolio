const sideMenu = document.querySelector("#sideMenu");
let navBar = document.querySelector("nav");
let navLinks = document.querySelector("nav ul");
let darkModeButton = document.querySelector("#darkButton");


function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
    
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
    
}

window.addEventListener("scroll", ()=>{
    if(scrollY > 50){
        navBar.classList.add( 'bg-[#fffff0]','backdrop-blur-lg', 'shadow-sm', 'transition', 'duration-400',);
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    } else{
        navBar.classList.remove("bg-white", 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
});




  ///////////////
  // Scroll Reveal Animation
  ///////////////
  const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',

  });

  animate.reveal(".nav");
  animate.reveal(".animation-left", {origin: "left"});
  animate.reveal(".animation-bottom", {origin: "bottom"});
  animate.reveal(".animation-right",{origin : "right"});
  animate.reveal(".boxes", {intervel: 100});