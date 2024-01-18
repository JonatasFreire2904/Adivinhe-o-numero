let listaDeNumerosSorteados = [];
let limiteNumerosSorteados = 10;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
      
    ResponsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensagemInicial(){
   
   exibirTextoNaTela('h1','Jogo do número secreto' );
   exibirTextoNaTela('p','Escolha um número entre 1 e 10');

}

exibirMensagemInicial();

function verificarChute() {
   let chute = document.querySelector('input').value;

   if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número =D, com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');        
   } else {       
      if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O numero secreto é menor');
      } else {
         exibirTextoNaTela('p', 'O numero secreto é maior');    
      }
      tentativas++
      limparCampo();
   }

}

function geraNumeroAleatorio(){
    
   let numeroEscolhido = parseInt(Math.random()* limiteNumerosSorteados + 1);
   let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

   if(quantidadeElementosNaLista == limiteNumerosSorteados){
      listaDeNumerosSorteados = [];
   }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
      return geraNumeroAleatorio();
   }else{
      listaDeNumerosSorteados.push(numeroEscolhido);
      return numeroEscolhido;
   }
}

function limparCampo() {

   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo(){

   numeroSecreto = geraNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',true);
}