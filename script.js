const mensagem = document.getElementById('mensagem');
const botaoMensagem = document.getElementById('btn-msg');
const botaoCor = document.getElementById('btn-cor');

botaoMensagem.addEventListener("click", function(){
    mensagem.innerHTML="Sou a segunda mensagem :D"
});

botaoCor.addEventListener("click",function(){
    document.body.style.backgroundColor = "#000000";
});