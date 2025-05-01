const reponse = document.getElementById("reponse");

let liste = [];
document.getElementById("btn-recherche").onclick = function rechercher() {
  let valeur = document.getElementById("recherche").value;
  liste.push(valeur);
  liste.sort();
  reponse.innerHTML = `${liste}<br>`;
};
