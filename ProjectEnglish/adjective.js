// nav bar
window.addEventListener("scroll",function () {
     var n = document.querySelector("header");
     n.classList.toggle("scroll", window.scrollY > 300)
     })
     
           
 function hide() {      
      window.scrollTo(0,0); document.getElementById("article").style.display = "block";
        document.getElementById("quiz").style.display = "none";
        
        document.querySelector(".openTest").style.display = "block";
    }
  function openQuiz() {  
      noo();
      alert("Don't Write Any Unwanted Space");    
     window.scrollTo(0,0);      document.getElementById("article").style.display = "none";
     document.getElementById("quiz").style.display = "block";
     document.querySelector(".openTest").style.display = "none";
}

function noo(){       
          document.getElementById("answer").style.display ="none";    
    document.getElementById("resultAdj").style.display ="none";
    }     