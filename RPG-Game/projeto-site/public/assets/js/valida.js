var mensagem = document.querySelector("#msg");
var mensagem2 = document.querySelector("#msg2");

function validaLogin() {
  var emailSign = signin.nome.value;
  var senhaSign = signin.senha.value;

  if (emailSign == "" || senhaSign == "") {
    mensagem.innerHTML = "Erro ao logar";
    mensagem.style.color = "red";
    return false;
  } else if (emailSign == "joao@bandtec.com.br" && senhaSign == "bandtec") {
    mensagem.innerHTML = "Logando";
    mensagem.style.color = "green";
    return true;
  }
  return false;
}

function validaCadastro() {
  var emailCad = signup.emailCadastro.value;
  var usr = signup.usuario.value;
  var senha = signup.senha.value;
  var senha2 = signup.confirmaSenha.value;
  mensagem.innerHTML = "";

  if (emailCad == "" || emailCad.indexOf("@") == -1) {
    mensagem2.innerHTML = "Preencha o campo Email corretamente";
    signup.emailCadastro.focus();
    mensagem2.style.color = "red";
    return false;
  }
  if (usr == "") {
    mensagem2.innerHTML = "Preencha o campo Usuario corretamente";
    signup.usuario.focus();
    mensagem2.style.color = "red";
    return false;
  }
  if (senha == "") {
    mensagem2.innerHTML = "Preencha o campo Password corretamente";
    signup.senha.focus();
    mensagem2.style.color = "red";
    return false;
  }
  if (senha2 == "") {
    mensagem2.innerHTML = "Preencha o campo confirmar senha corretamente";
    signup.senha2.focus();
    mensagem2.style.color = "red";
    return false;
  }
  if (senha2 != senha) {
    mensagem2.innerHTML = "As senhas não são iguais";
    signup.senha2.focus();
    mensagem2.style.color = "red";
    return false;
  }
  window.location = 'usuarioCadastrado.html';
}