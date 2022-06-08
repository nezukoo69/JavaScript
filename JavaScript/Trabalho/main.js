var loginCadastro = "bianca";
var senhaCadastrada = "212";

var tentativas = 1;

while(tentativas <= 3) {
    loginInformado = prompt("Informe seu login");
    senhaInformada = prompt("Informe sua senha");

    if(loginCadastro == loginInformado && senhaCadastrada == senhaInformada){
        alert("Bem-vindo ao sistema " + loginInformado);
        
        break;
    }else{
        window.location.href = 'pagina1.html';
        alert("Deu ruim aqui meu parceiro, tente novamente");
        tentativas++;
    }
}
