
var bt = document.getElementById("bt");
var bt2 = document.getElementById("btsum");

bt.addEventListener("click", function () {
var txt = document.getElementById("txt");
var res = document.getElementById("res");

if(txt.value == ""){
alert("enter your name");
txt.focus();
}else{
//alert("hi " + txt.value);
res.style.color = "red";
res.innerHTML += "hi " + txt.value + "<br>";
txt.value = "";
txt.focus();
}


});


bt2.addEventListener("click", () => {
var txt1 = document.getElementById("n1");
var txt2 = document.getElementById("n2");
var res = document.getElementById("res2");

var suma = parseInt(txt1.value) + parseInt(txt2.value);

if(isNaN(suma)){
    res.style.color = "red";
   res.innerHTML="hubo un problema con los valores "
}else{
    res.style.color = "blue";
   res.innerHTML = "suma:" + suma;
}



});