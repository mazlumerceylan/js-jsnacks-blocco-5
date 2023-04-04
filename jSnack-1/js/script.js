
// Elenco utenti 
const utenti = [
  { 
    nome: "Mario",
    cognome: "Rossi",
    eta: 25 
  },
  {
    nome: "Luigi", 
    cognome: "Verdi", 
    eta: 18 
  },
  { 
    nome: "Giovanna", 
    cognome: "Bianchi", 
    eta: 70 },
  { 
    nome: "Carlo", 
    cognome: "Neri", 
    eta: 45 
  },
  { nome: "Anna", 
    cognome: "Gialli", 
    eta: 8
  },
  { 
    nome: "Paolo", 
    cognome: "Rosa", 
    eta: 60 
  },
  { 
    nome: "Martina", 
    cognome: "Marroni", 
    eta: 15 
  },
  { 
    nome: "Giacomo", 
    cognome: "Blu", 
    eta: 70 
  }
];

// Trovare i minorenni e gli over 65 e stamparli a schermo
const utentiLista = document.getElementById("utenti-lista");

utenti.forEach((utente) => {
  if (utente.eta < 18 || utente.eta > 65) {
      const li = document.createElement("li");
      li.textContent = `Nome: ${utente.nome}, Cognome: ${utente.cognome}, Età: ${utente.eta}`;
      utentiLista.appendChild(li);
      console.log(`Nome: ${utente.nome}, Cognome: ${utente.cognome}, Età: ${utente.eta}`);
  }
});
