//vamos chamar a função que criamos no botão.
function addUser(){
 var nomeJogador1 = document.getElementById("nomeJogador1").value;
 var nomeJogador2 = document.getElementById("nomeJogador2").value;


 localStorage.setItem("nomeJogador1" , nomeJogador1);
 localStorage.setItem("nomeJogador2" , nomeJogador2);

 window.location = "game.html";

}