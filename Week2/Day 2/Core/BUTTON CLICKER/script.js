console.log("page loaded...")


function message(){
  alert("ninja was liked");
}


function login(element){
    if (element.innerText =="login"){
        element.innerText = "logout";

    } else {
        element.innerText ="login" ;
    }
}  
    function hide(el){
        el.remove();
    }