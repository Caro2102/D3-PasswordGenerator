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
  var defpass="";
  var retpass="";
  var simbolosi= confirm("¿Desea tener SIMBOLOS en su contraseña?");
  var minsi=confirm("¿Desea tener MINUSCULAS en su contraseña?");
  var mayussi=confirm("¿Desea tener MAYUSCULAS en su contraseña?");
  var numerossi=confirm("¿Desea tener NUMEROS en su contraseña?");
  }
  // Ciclo hasta que se acepte un caracter
  while(simbolosi===false && minsi===false && mayussi===false && numerossi===false){
    alert("Al menos un tipo de los siguientes caracteres debe ser selecciondo");
    var simbolosi= confirm("¿Desea tener SIMBOLOS en su contraseña?");
    var minsi=confirm("¿Desea tener MINUSCULAS en su contraseña?");
    var mayussi=confirm("¿Desea tener MAYUSCULAS en su contraseña?");
    var numerossi=confirm("¿Desea tener NUMEROS en su contraseña?");
  }
  // Se agregan caracteres si se aceptan 
  if(simbolosi) {
    defpass+=simbolos;
  }
   if(minsi) {
    defpass+=letrasmin;
  }
   if(mayussi){
    defpass+=letrasmay;
  }
  if(numerossi){
    defpass+=numeros;
  }
  // Contraseña aleatoria
  for (var i = 0; i < num; i++) {
    retpass+=defpass[Math.floor(Math.random() * defpass.length)];
    }
    return retpass;

}
// Agregar oyente de eventos para generar el botón
generateBtn.addEventListener("click", writePassword);
