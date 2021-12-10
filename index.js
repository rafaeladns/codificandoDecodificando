//Criado uma variável para selecionar a opção select//
var select = document.querySelector("select");

//Criado uma variável para selecionar o botão//
var botao = document.querySelector("#botao")

//Criado uma variável para armazenar a msg digitada pelo usuário//
var texto = document.querySelector("#texto");

//Criado uma variável para selecionar a div oculta//
var addContainer = document.getElementById("addContainer")

//Criado variável para o input texto resultado//
var resultado = document.querySelector("#textoResult")

//Variáveis para selecionar os radio buttom//
var codificar = document.querySelector("#codificar")
var decodificar = document.querySelector("#decodificar")


//Aqui estou adicionando um evento para quando o usuário interagir com a opção select//
//O change evento é acionado para <input>, <select> e <textarea>, quando uma alteração ao valor do elemento é cometida pelo usuário.//
select.addEventListener("change", function(event){
    var addContainer = document.getElementById("addContainer")
    if (event.target.value == "cifraCesar") {

        addContainer.style = "display: block";
      } else {
    
        addContainer.style = "display: none";
      }
    });



//evento criado para evitar o comportamento de ao clicar no botão a página recarregar//
botao.addEventListener("click", function(event){
console.log(texto.value);
event.preventDefault()
});

//Evento para mudar a escrita do botão conforme o codificar ou decodificar é selecionado//


codificar.addEventListener("click", function() {
  botao.innerText = "Codificar Texto";
});

decodificar.addEventListener("click", function() {
  botao.innerText = "Decodificar Texto"
});

var passo = document.querySelector("#incremento")

botao.addEventListener("click", function() {
    if(passo.value > 26){
      return resultado.value = `O valor que você usou foi de ${passo.value}. Digite um valor de 1 a 25.`
    }
  if(codificar.checked && select.value == "cifraCesar"){
    resultado.value = cifra(parseInt(passo.value), texto.value);
  //codificar cifra//
  }else if(codificar.checked && select.value == "base.64"){
    resultado.value = codificandoABase64(texto.value)
    //codificar base 64/
  }else if(decodificar.checked && select.value == "cifraCesar"){
    resultado.value = decifra(parseInt(passo.value), texto.value);
    //decodificar cifra//
  }else if(decodificar.checked && select.value == "base.64"){
    resultado.value = decodificandoABase64(texto.value)
    //decodificar base//
  }
  });

  

  function cifra (passo, texto){
    var textoCodificado = ""
    var codigo = 0
    for(var i = 0; i < texto.length; i++){
      if(texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90){
        codigo = (((texto.charCodeAt(i) - 65) + passo) % 26) + 65;
      }else if(texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122){
        codigo = (((texto.charCodeAt(i) - 97) + passo) % 26) + 97;
      }else if(texto.charCodeAt(i) == 32){
        codigo = 32
      }
      textoCodificado += String.fromCharCode(codigo)
    }
    return textoCodificado;
  }
  
  function decifra (passo, texto){
    var textoCodificado = ""
    var codigo = 0
    for(var i = 0; i < texto.length; i++){
      if(texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90){
        if((texto.charCodeAt(i) - 65) - passo < 0){
          codigo = (((texto.charCodeAt(i) - 65) - passo + 26) % 26) + 65;
        }else{
          codigo = (((texto.charCodeAt(i) - 65) - passo) % 26) + 65;
        }
        
      }else if(texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122){
        if((texto.charCodeAt(i) - 97) - passo < 0){
          codigo = (((texto.charCodeAt(i) - 97) - passo + 26) % 26) + 97;
        }else{
          codigo = (((texto.charCodeAt(i) - 97) - passo) % 26) + 97;
        }
        
      }else if(texto.charCodeAt(i) == 32){
        codigo = 32
      }
      textoCodificado += String.fromCharCode(codigo)
    }
    return textoCodificado;
  }

  

  //btoa e atob funções js//
  function codificandoABase64(texto) {
    return btoa(texto);
  }
  
  function decodificandoABase64(texto) {
    return atob(texto);
  }
 