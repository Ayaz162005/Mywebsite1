const swiper = new Swiper('.swiper', {
 autoplay: {
delay:3000,
disableOnInterraction:false,



 },   
    
    loop: true,
  
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
  });

let d,a,b,c; 

  function myfunction11(){
d=document.getElementById("special-login");
a=d.style.display;
c=true;
if(a=="none"){
  d.style.display="block";
}
else{
  d.style.display="none";
}


  }
  let y,z;
 function myfunc(){
y=document.getElementById("special-nav");
z=y.style.display

if(z=="none"){
  y.style.display="block"
}
else{
  y.style.display="none";
}


 }