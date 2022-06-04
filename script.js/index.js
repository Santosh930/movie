let i=0;
let id;
function start(){
    let data=JSON.parse(localStorage.getItem("items"));
    let container=document.querySelector("#container");
    id=setInterval(function(){
        if(i==data.length){
            i=0;
        }
        container.innerHTML=null;
        let image=data[i];
        console.log("i:",i);
        let img=document.createElement("img");
        img.src=image;
        document.getElementById("container").append(img);
        i++;
    },2000);
}
function pause(){
    clearInterval(id);
}