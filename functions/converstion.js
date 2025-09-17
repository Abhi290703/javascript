let dm=false;

function toggle(){
    if(dm==false){
        document.body.style.background="black";
        document.body.style.color="white";
        dm=true;
    }
    else{
        document.body.style.background="white";
        document.body.style.color="black";
        dm=false;
    }
}