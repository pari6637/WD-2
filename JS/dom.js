//document.writeIn("hello");

function result(){
    let inputData=document.getElementById("inputText").value;
    document.getElementById('text').textContent=inputData;

    if(inputData>=18){
        alert("Valid Data");
    }
    else{
        alert("Not Valid");

    }
        
    let changeColor=document.getElementById('text');
    changeColor.style.color="Red";
    
    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="pink";
}

let para=document.getElementById("paratext");
function changetextColor() {
    para.style.backgroundColor="#"+Math.floor(Math.random() * 16777)
}
para.addEventListener('mouseover', changetextColor);