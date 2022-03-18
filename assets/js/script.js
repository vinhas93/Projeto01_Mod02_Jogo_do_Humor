let cont = 0
const botao = document.querySelector("#botao");
const Entrada = document.querySelector("#Entrada");
const Balcao = document.querySelector("#Balcao");
const Barman = document.querySelector("#Barman");



botao.addEventListener("click", () =>{
   cont++ 
   // alert("teste")
   if(cont === 0){
      document.querySelector("#estado7").className ="estados"
      document.querySelector("#estado1").className ="atual"
         
   }else if(cont === 1){
      document.querySelector("#estado1").className ="estados"
      document.querySelector("#estado2").className ="atual"
      
   }else if(cont === 2){
      document.querySelector("#estado2").className ="estados"
      document.querySelector("#estado3").className ="atual"
      
   }else if(cont === 3){
      document.querySelector("#estado3").className ="estados"
      document.querySelector("#estado4").className ="atual"
      
   }else if(cont === 4){
      document.querySelector("#estado4").className="estados"
      document.querySelector("#estado5").className="atual"
      

   }else if(cont === 5){
      document.querySelector("#estado5").className="estados"
      document.querySelector("#estado6").className="atual"
      
   }else if(cont === 6){
      document.querySelector("#estado6").className="estados"
      document.querySelector("#estado7").className="atual"
      cont = -1

   }
})

Entrada.addEventListener("click", () =>{
   document.querySelector(".entrada").style.display = "flex";
   document.querySelector(".balcao").style.display = "none";
   document.querySelector(".barman").style.display = "none";
})

Balcao.addEventListener("click", () =>{
   document.querySelector(".entrada").style.display = "none";
   document.querySelector(".balcao").style.display = "flex";
   document.querySelector(".barman").style.display = "none";
})

Barman.addEventListener("click", () =>{
   document.querySelector(".entrada").style.display = "none";
   document.querySelector(".balcao").style.display = "none";
   document.querySelector(".barman").style.display = "flex";
})

