//variables de los botones
var limpia=document.getElementById("clearDisp");
var numeros=document.getElementsByClassName("numero");
var presSuma=document.getElementById("adicion");
var presDif=document.getElementById("resta");
var presPor=document.getElementById("producto");
var presDiv=document.getElementById("divide");
var dispResult=document.getElementById("muestraResult");
var igualA=document.getElementById("igual");
var abreParent=document.getElementById("parentIn");
var cierraParent=document.getElementById("parentOut");

var resultado=0;
var pantallaDisplay="";
igualA.style.backgroundColor="#268BC8";

dispResult.placeholder="0";

function limpiar(){
  resultado=0;
  pantallaDisplay="";
  document.getElementById("muestraNum").value=pantallaDisplay;
  dispResult.style.color="#000000";
  dispResult.value=resultado;
}
function suma(){
  var signMas=presSuma.value;
  document.getElementById("muestraNum").value=pantallaDisplay+signMas;
  pantallaDisplay=document.getElementById("muestraNum").value;
  //dispResult.value=resultado;
}
function diferencia(){
  var signDif=presDif.value;
  document.getElementById("muestraNum").value=pantallaDisplay+signDif;
  pantallaDisplay=document.getElementById("muestraNum").value;
}
function multiplica(){
  var signProd=presPor.value;
  document.getElementById("muestraNum").value=pantallaDisplay+signProd;
  pantallaDisplay=document.getElementById("muestraNum").value;
}
function division(){
  var signDiv=presDiv.value;
  document.getElementById("muestraNum").value=pantallaDisplay+signDiv;
  pantallaDisplay=document.getElementById("muestraNum").value;
}
function igual(){
  dispResult.style.color="#C82626";
  resultado=eval(pantallaDisplay);
  dispResult.value="= "+resultado;
  pantallaDisplay="";
}
function parent0(){
  var par0=abreParent.value;
  document.getElementById("muestraNum").value=pantallaDisplay+par0;
  pantallaDisplay=document.getElementById("muestraNum").value;
  //dispResult.value=resultado;
}
function parentf(){
  var parf=cierraParent.value;
  document.getElementById("muestraNum").value=pantallaDisplay+parf;
  pantallaDisplay=document.getElementById("muestraNum").value;
  //dispResult.value=resultado;
}
//accion de eventos de numeros
/*para los eventos al array "numeros", se pasará a definir funciones anónimas
para cada evento, no se usará bucle for porque sólo afectaría al último
elemento, por eso se reescribirá cada addEventListener*/
/*for(var i=0;i<numeros.length;i++){
  numeros[i].addEventListener("click",function(){
    document.getElementById("muestraNum").value=pantallaDisplay+numeros[i].value;
    pantallaDisplay=document.getElementById("muestraNum").value;
    resultado=eval(pantallaDisplay);
    dispResult.value=resultado;
    },false);
}*/
numeros[0].addEventListener("click",function(){
  document.getElementById("muestraNum").value=pantallaDisplay+numeros[0].value;
  pantallaDisplay=document.getElementById("muestraNum").value;
  resultado=eval(pantallaDisplay);
  dispResult.value=resultado;
  },false);
numeros[1].addEventListener("click",function(){
  document.getElementById("muestraNum").value=pantallaDisplay+numeros[1].value;
  pantallaDisplay=document.getElementById("muestraNum").value;
  resultado=eval(pantallaDisplay);
  dispResult.value=resultado;
  },false);
numeros[2].addEventListener("click",function(){
  document.getElementById("muestraNum").value=pantallaDisplay+numeros[2].value;
  pantallaDisplay=document.getElementById("muestraNum").value;
  resultado=eval(pantallaDisplay);
  dispResult.value=resultado;
  },false);
numeros[3].addEventListener("click",function(){
  document.getElementById("muestraNum").value=pantallaDisplay+numeros[3].value;
  pantallaDisplay=document.getElementById("muestraNum").value;
  resultado=eval(pantallaDisplay);
  dispResult.value=resultado;
  },false);
numeros[4].addEventListener("click",function(){
  document.getElementById("muestraNum").value=pantallaDisplay+numeros[4].value;
  pantallaDisplay=document.getElementById("muestraNum").value;
  resultado=eval(pantallaDisplay);
  dispResult.value=resultado;
  },false);
numeros[5].addEventListener("click",function(){
  document.getElementById("muestraNum").value=pantallaDisplay+numeros[5].value;
  pantallaDisplay=document.getElementById("muestraNum").value;
  resultado=eval(pantallaDisplay);
  dispResult.value=resultado;
  },false);
numeros[6].addEventListener("click",function(){
  document.getElementById("muestraNum").value=pantallaDisplay+numeros[6].value;
  pantallaDisplay=document.getElementById("muestraNum").value;
  resultado=eval(pantallaDisplay);
  dispResult.value=resultado;
  },false);
numeros[7].addEventListener("click",function(){
  document.getElementById("muestraNum").value=pantallaDisplay+numeros[7].value;
  pantallaDisplay=document.getElementById("muestraNum").value;
  resultado=eval(pantallaDisplay);
  dispResult.value=resultado;
  },false);
numeros[8].addEventListener("click",function(){
  document.getElementById("muestraNum").value=pantallaDisplay+numeros[8].value;
  pantallaDisplay=document.getElementById("muestraNum").value;
  resultado=eval(pantallaDisplay);
  dispResult.value=resultado;
  },false);
numeros[9].addEventListener("click",function(){
  document.getElementById("muestraNum").value=pantallaDisplay+numeros[9].value;
  pantallaDisplay=document.getElementById("muestraNum").value;
  resultado=eval(pantallaDisplay);
  dispResult.value=resultado;
},false);

//eventos de operadores
presSuma.addEventListener("click",suma);
presDif.addEventListener("click",diferencia);
presPor.addEventListener("click",multiplica);
presDiv.addEventListener("click",division);
limpia.addEventListener("click",limpiar);
igualA.addEventListener("click",igual);
abreParent.addEventListener("click",parent0);
cierraParent.addEventListener("click",parentf);
/*for(var z=0;z<numeros.length;z++){
  console.log(numeros[z].value);
}*/
//console.log(resultado);
