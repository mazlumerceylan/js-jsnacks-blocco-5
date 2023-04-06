// Definizione dell'elenco degli studenti
const studenti = [
  {
    nome: "Mario",
    cognome: "Rossi",
    matricola: "435346",
    voti: [25, 28, 26, 27]
  },
  {
    nome: "Luca",
    cognome: "Bianchi",
    matricola: "239485",
    voti: [30, 29, 28, 26]
  },
  {
    nome: "Marco",
    cognome: "Azzurrino",
    matricola: "107463",
    voti: [24, 29, 30, 26]
  },
  {
    nome: "Gianpaolo",
    cognome: "Marrone",
    matricola: "165743",
    voti: [25, 27, 22, 29]
  },
  {
    nome: "Paolo",
    cognome: "Gialli",
    matricola: "382598",
    voti: [26, 28, 30, 26]
  },
  {
    nome: "Marianna",
    cognome: "Turchese",
    matricola: "843859",
    voti: [27, 23, 26, 22]
  }
];

// Funzione per calcolare la media dei voti
function calcolaMediaVoti(voti) {
  let somma = 0;
  for (let i = 0; i < voti.length; i++) {
    somma += voti[i];
  }
  return somma / voti.length;
}

// Ottenere la lista dal file HTML
const list = document.getElementById("studentiList");

// Iterare attraverso l'elenco degli studenti e creare gli elementi della lista
for (let i = 0; i < studenti.length; i++) {
  const listItem = document.createElement("li");
  
  // Calcolare la media dei voti
  const mediaVoti = calcolaMediaVoti(studenti[i].voti);
  
  // Assegnare il contenuto all'elemento della lista
  listItem.innerHTML = "<strong>" + studenti[i].nome + " " + studenti[i].cognome + "</strong><br>Matricola: " + studenti[i].matricola + "<br>Media Voti: " + mediaVoti.toFixed(2);
  
  // Aggiungere l'elemento alla lista
  list.appendChild(listItem);
}
