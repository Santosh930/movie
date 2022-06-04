var Data = JSON.parse(localStorage.getItem("data")) || [];
document.querySelector("#form").addEventListener("submit", myfunction);



function myfunction(){
    event.preventDefault();
    // console.log("insidefunction");

    

    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var contact=document.getElementById("contact").value;
    
    var obj = {
        Name: name,
        Email: email,
        Password: password,
        Contact:contact
    };

  

    Data.push(obj);
    console.log(Data);
    
    localStorage.setItem("data", JSON.stringify(Data));
    document.querySelector("#name").value=null;
    document.querySelector("#email").value="";
    document.querySelector("#password").value=null;
    document.getElementById("contact").value="";
    

    





}