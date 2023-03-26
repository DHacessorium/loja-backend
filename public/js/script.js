window.addEventListener('load', function() {
 
  const nav = document.querySelector('nav');
  const links = nav.querySelectorAll('a');
  const main = document.querySelector('main');
  const button = document.querySelectorAll('button');
  const form = this.document.querySelector('.cadastro');
  const nome = this.document.querySelector('#nome');
  
  
  
  
 
  links.forEach(function(link) {
    link.addEventListener('mouseover', function() {
      link.style.color = '#006400';
      link.style.fontWeight = 'bold'
    });
    
    
    link.addEventListener('mouseout', function() {
      link.style.color = '';
      link.style.fontWeight = ''
    });
  });

 
  button.forEach(function(button) {
    button.addEventListener('mouseover', function(){
      button.style.backgroundColor = '#00FF00';
    });
  
    button.addEventListener('mouseout', function(){
      button.style.backgroundColor = '';
    });
   
  });



  

});





/*-------script do carrosel*********/ 
$(document).ready(function(){
    $('.carrossel').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    
    });
  });




  
  /*-------script do menu hamburger---------*/ 
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
      
  menuToggle.addEventListener('click', () => {
  menu.classList.toggle('ativo');
        });
      

