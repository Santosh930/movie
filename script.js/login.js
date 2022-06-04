document.querySelector("#form").addEventListener("submit", myfunction);
   var Data = JSON.parse(localStorage.getItem("data")) || [];
   console.log(Data);


   function myfunction(){
       event.preventDefault();
    //    console.log("santosh")

   
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;

   var val = true;
    
   
   for( var i=0 ; i<Data.length; i++){
      
       if( email == Data[i].email && pass == Data[i].pass){
           
           window.location.href = "./index.html";
           val = false;
       }
   }
   if(val){
       alert("invalid Credentials");
   }

};