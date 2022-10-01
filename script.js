// Variables
var letrasmin=["abcdefghijklmnopqrstuvwxyz"];
var letrasmay=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numeros=["0123456789"];
var simbolos=["!#$%&'()*+,-./;<>=?@[]_{}|~"];
// Código de asignación
var generateBtn = document.querySelector("#generate");

// Escriba la contraseña en la entrada #password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  // Numero de caracteres permitidos 
var num= window.prompt("De cuantos caracteres es tu contraseña");
  if(num <= 7 || num >= 129) {
    alert("Tu contraseña debe tener al menos 8 caracteres y no mas de 128");
    return;
  } else{
  alert("Al menos un tipo de los siguientes caracteres debe ser selecciondo");
  }
}
// Agregar oyente de eventos para generar el botón
generateBtn.addEventListener("click", writePassword);
