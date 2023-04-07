// Creazione della lista degli studenti
const students = [
  { id: 213, name: 'Marco della Rovere', grades: [78, 89, 73] },
  { id: 110, name: 'Paola Cortellessa', grades: [96, 87, 78] },
  { id: 250, name: 'Andrea Mantegna', grades: [48, 64, 77] },
  { id: 145, name: 'Gaia Borromini', grades: [74, 56, 68] },
  { id: 196, name: 'Luigi Grimaldello', grades: [68, 34, 99] },
  { id: 102, name: 'Piero della Francesca', grades: [50, 50, 65] },
  { id: 120, name: 'Francesca da Polenta', grades: [84, 54, 87] }
];

// Modifica del nome degli studenti tutto in maiuscolo
students.forEach(student => {
  student.name = student.name.toUpperCase();
  const totalExams = student.grades.length;
  const totalGrades = student.grades.reduce((a, b) => a + b, 0);
  const averageGrade = totalGrades / totalExams;
  student.averageGrade = averageGrade;
});

// Creazione della lista degli studenti con un totale di voti superiori a 70
const studentsAbove70 = students.filter(student => {
  return student.averageGrade > 70;
});

// Creazione della lista degli studenti con un totale di voti superiori a 70 e id superiore a 120
const studentsAbove70AndIdAbove120 = students.filter(student => {
  return student.averageGrade > 70 && student.id > 120;
});

// Aggiunta delle liste al DOM
const studentsContainer = document.getElementById('studentsContainer');

const createCard = (student) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = student.name;
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerHTML = `<strong>ID:</strong> ${student.id}<br><strong>Media voti:</strong> ${student.averageGrade || 'N/A'}`; // Usiamo 'N/A' per indicare che non c'è una media dei voti se non esiste.
  cardBody.appendChild(cardText);

  return card;
};


const studentsList = document.getElementById('studentsList');
students.forEach(student => {
  const card = createCard(student);
  studentsList.appendChild(card);
});

const studentsAbove70List = document.getElementById('studentsAbove70List');
studentsAbove70.forEach(student => {
  const card = createCard(student);
  studentsAbove70List.appendChild(card);
});

const studentsAbove70AndIdAbove120List = document.getElementById('studentsAbove70AndIdAbove120List');
studentsAbove70AndIdAbove120.forEach(student => {
  const card = createCard(student);
  studentsAbove70AndIdAbove120List.appendChild(card);
});
