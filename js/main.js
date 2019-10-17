var nome = prompt ("scrivi qui il tuo nome");

console.log(nome);

var cognome = prompt ("mi serve anche il tuo cognome")

console.log(cognome);

var colore = prompt ("ora il tuo colore preferito")

console.log(colore);

document.getElementById('mioid').innerHTML = nome + cognome + colore + "<strong>19</strong>";
