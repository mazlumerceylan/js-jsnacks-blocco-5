// array di oggetti squadra di calcio
const teams = [
  { nome: "Juventus", punti: 0, falli: 0 },
  { nome: "Inter", punti: 0, falli: 0 },
  { nome: "Milan", punti: 0, falli: 0 },
  { nome: "Fiorentina", punti: 0, falli: 0 },
  { nome: "Empoli", punti: 0, falli: 0 },
  { nome: "Genova", punti: 0, falli: 0 },
  { nome: "Parma", punti: 0, falli: 0 },
  { nome: "Livorno", punti: 0, falli: 0 },
  { nome: "Ancona", punti: 0, falli: 0 },
  { nome: "Torino", punti: 0, falli: 0 },
];

// genera numeri casuali per le proprietà punti e falli
teams.forEach(team => {
  team.punti = Math.floor(Math.random() * 100);
  team.falli = Math.floor(Math.random() * 50);
});

// crea un nuovo array con solo nomi e falli subiti
const nomeEFalli = teams.map(({ nome, falli }) => ({ nome, falli }));

// aggiungi righe alla tabella
const table = document.querySelector("#teams-table");

teams.forEach(team => {
  const row = `<tr>
                 <td>${team.nome}</td>
                 <td>${team.punti}</td>
                 <td>${team.falli}</td>
               </tr>`;
  table.innerHTML += row;
});

// stampa l'array con solo nomi e falli subiti nella console
console.log(nomeEFalli);

