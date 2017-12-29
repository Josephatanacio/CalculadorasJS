//variables de Operaciones
var tagn,a,b,c;
//variable para operaciones 
var tag="",resultado="";
//function MOver(){
//   
//document.getElementById("on").addEventListener("mouseover", mouseOver);
//document.getElementById("on").addEventListener("mouseout", mouseOut);
//document.getElementById("sign").addEventListener("mouseover", mouseOver);
//document.getElementById("sign").addEventListener("mouseout", mouseOut);
//document.getElementById("raiz").addEventListener("mouseover", mouseOver);
//document.getElementById("raiz").addEventListener("mouseout", mouseOut);
//
//}
function entradaValores(){
document.getElementById("on").addEventListener("click", function() {
     tag=document.getElementById("on").alt;
     document.getElementById("display").innerHTML="";
});
document.getElementById("sign").addEventListener("click", function() {
     tag=document.getElementById("sign").alt;
     if((document.getElementById("display").innerHTML)!="0"){
     a=(-1)*(document.getElementById("display").innerHTML);
     document.getElementById("display").innerHTML=a;}
});
document.getElementById("raiz").addEventListener("click", function() {
     tag=document.getElementById("raiz").alt;
 a=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML="";
});
document.getElementById("dividido").addEventListener("click", function() {
     tag=document.getElementById("dividido").alt;
  a=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML="";
});
document.getElementById("por").addEventListener("click", function() {
     tag=document.getElementById("por").alt;
   a=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML="";
});
document.getElementById("menos").addEventListener("click", function() {
     tag=document.getElementById("menos").alt;
        a=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML="";
  
});
document.getElementById("punto").addEventListener("click", function() {
     tag=document.getElementById("punto").alt;
     document.getElementById("display").innerHTML+='.';
});

document.getElementById("mas").addEventListener("click", function() {
     tag=document.getElementById("mas").alt;
     a=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML="";
  
});
document.getElementById("0").addEventListener("click", function() {
     tagn=document.getElementById("0").alt;
    if((document.getElementById("display").innerHTML).length<8){
         document.getElementById("display").innerHTML+=tagn;
    }
});
document.getElementById("1").addEventListener("click", function() {
     tagn=document.getElementById("1").alt;
     if((document.getElementById("display").innerHTML).length<8){
         document.getElementById("display").innerHTML+=tagn;
    }
});
document.getElementById("2").addEventListener("click", function() {
     tagn=document.getElementById("2").alt;
    if((document.getElementById("display").innerHTML).length<8){
         document.getElementById("display").innerHTML+=tagn;
    }
});
document.getElementById("3").addEventListener("click", function() {
     tagn=document.getElementById("3").alt;
         if((document.getElementById("display").innerHTML).length<8){
         document.getElementById("display").innerHTML+=tagn;
    }
});
document.getElementById("4").addEventListener("click", function() {
     tagn=document.getElementById("4").alt;
         if((document.getElementById("display").innerHTML).length<8){
         document.getElementById("display").innerHTML+=tagn;
    }
});
document.getElementById("5").addEventListener("click", function() {
     tagn=document.getElementById("5").alt;
       if((document.getElementById("display").innerHTML).length<8){
         document.getElementById("display").innerHTML+=tagn;
    }
});
document.getElementById("6").addEventListener("click", function() {
     tagn=document.getElementById("6").alt;
        if((document.getElementById("display").innerHTML).length<8){
         document.getElementById("display").innerHTML+=tagn;
    }
});
document.getElementById("7").addEventListener("click", function() {
     tagn=document.getElementById("7").alt;
    if((document.getElementById("display").innerHTML).length<8){
         document.getElementById("display").innerHTML+=tagn;
    }
});
document.getElementById("8").addEventListener("click", function() {
     tagn=document.getElementById("8").alt;
     if((document.getElementById("display").innerHTML).length<8){
         document.getElementById("display").innerHTML+=tagn;
    }
});
document.getElementById("9").addEventListener("click", function() {
     tagn=document.getElementById("9").alt;
     if((document.getElementById("display").innerHTML).length<8){
         document.getElementById("display").innerHTML+=tagn;
    }
});
}
function  operaciones(){
document.getElementById("igual").addEventListener("click", function() {
     tagi=document.getElementById("igual").alt;
       b=document.getElementById("display").innerHTML;
        switch (tag) {
            case "mas":
                c = parseFloat(a) + parseFloat(b);

                resultado = (c).toString();
                c = resultado.length;
                if (c <= 8) {
                    document.getElementById("display").innerHTML = resultado;
                } else {
                    
                    document.getElementById("display").innerHTML = resultado.substr(0,7);
                }
                break;
            case "menos":
                c = parseFloat(a) - parseFloat(b);
                resultado = (c).toString();
                c = resultado.length;
                if (c <= 8) {
                    document.getElementById("display").innerHTML = resultado;
                } else {
                    
                    document.getElementById("display").innerHTML = resultado.substr(0,8);
                }
                break;
            case "por":
                c = parseFloat(a) * parseFloat(b);
                resultado = (c).toString();
                c = resultado.length;
                if (c <= 8) {
                    document.getElementById("display").innerHTML = resultado;
                } else {
             
                    document.getElementById("display").innerHTML =resultado.substr(0,8);
                }
                break;
            case "dividido":
                c = parseFloat(a) / parseFloat(b);
                resultado = (c).toString();
                c = resultado.length;
                if (c <= 8) {
                    document.getElementById("display").innerHTML = resultado;
                } else {
                    
                    document.getElementById("display").innerHTML = resultado.substr(0,8);
                }
                break;
            case "raiz":
                c = Math.sqrt(Number(a));

                resultado = (c).toString();
                c = resultado.length;
                if (c <= 8) {
                    document.getElementById("display").innerHTML = resultado;
                } else {
                   
                    document.getElementById("display").innerHTML = resultado.substr(0,8);
                }

                break;
}  
});
}

//function mouseOver() {
//    
//    document.getElementById(tdiv).style.width="23%";
//    document.getElementById(tdiv).style.height="68.91px";
//}
//
//function mouseOut() {
//    document.getElementById(tdiv).style.width="";
//    document.getElementById(tdiv).style.height="";
// 
//}

entradaValores();
operaciones();
//MOver();





