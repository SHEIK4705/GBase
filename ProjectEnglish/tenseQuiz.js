// nav bar
window.addEventListener("scroll",function () {
     var n = document.querySelector("nav");
     n.classList.toggle("scroll", window.scrollY > 250)
     })
     


 // Scroll Function
 
 function scrollToTop() {
      window.scrollTo(0,0);
 }   

//Open Quiz

function openQuiz() {  

     alert("sp - simple present\npc - present continuous\npp - present perfect\nppc - present perfect ");  
    scrollToTop();
    noo(); document.getElementById("main").style.display = "none";
     document.getElementById("quiz").style.display = "block";
     
}
 
 //Quiz   
 
 function show(){
      
      var btns = document.querySelectorAll('input[type="radio"]')
for(var i=0;i<btns.length;i++){
      btns[i].required;
 }
      document.getElementById("result").style.display ="block";  
               var score = 0;
               if(document.getElementById('ans1').checked)
               {
                    score++;
               }
               if(document.getElementById('ans2').checked)
               {
                    score++;
               }
               if(document.getElementById('ans3').checked)
               {
                    score++;
               }
               if(document.getElementById('ans4').checked){
                    score++;
               }
                if(document.getElementById('ans5').checked)
               {
                    score++;
               }
          if(document.getElementById('ans6').checked)
               {
                    score++;
               }
          if(document.getElementById('ans7').checked)
               {
                    score++;
               }         if(document.getElementById('ans8').checked)
               {
                    score++;
               }     
        if(document.getElementById('ans9').checked)
               {
                    score++;
               }
          if(document.getElementById('ans10').checked)
               {
                    score++;
               }                
         
         
         
         if(score==10) {
              document.getElementById("result").innerHTML="Result : "+score+" out of 10"+"<br>"+"Excellent!";                          
         }
         else if((score>=8)&& (score<=9)) {
              document.getElementById("result").innerHTML="Result : "+score+" out of 10"+"<br>"+"Great!";            
         }
         else if((score>=6)&& (score<=7)){
             document.getElementById("result").innerHTML="Result : "+score+" out of 10"+"<br>"+"Very Good!"; 
         } 
         else if((score>=4)&& (score<=5)){
              document.getElementById("result").innerHTML="Result : "+score+" out of 10"+"<br>"+"Good"; 
         } 
         else{
              document.getElementById("result").innerHTML="Result : " +score+ " out of 10"+"<br>"+"Work Hard!"; 
         } 
        
     document.getElementById("answer").style.display ="block";         
         } 
         
    function noo(){       
         document.getElementById("myForm").reset(); document.getElementById("answer").style.display ="none";    
    document.getElementById("result").style.display ="none"; 
    }     
    function hide() {
       scrollToTop();      
       document.getElementById("main").style.display = "block";
        document.getElementById("quiz").style.display = "none";
    }
