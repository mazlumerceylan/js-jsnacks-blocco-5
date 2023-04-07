const bikes = [
  { 
    brand: 'Trek',
    weight: 7 
  },
  { 
    brand: 'Specialized',
    weight: 8 
  },
  { 
    brand: 'Bianchi',
    weight: 6 
  }
];

const bikeInfoContainer = document.getElementById('bike-info');

const getBikeInfo = () => {
  const bikeBrand = document.getElementById('bike-brand').value.toLowerCase();

  if (bikeBrand === '') {
    bikeInfoContainer.textContent = 'Seleziona una marca di bicicletta.';
    return;
  }

  const selectedBike = bikes.find(bike => bike.brand.toLowerCase() === bikeBrand);

  if (!selectedBike) {
    bikeInfoContainer.textContent = `La marca "${bikeBrand}" non esiste nella nostra lista di biciclette.`;
    return;
  }

  const bikeWeight = selectedBike.weight;
  let bikeWeightDesc = '';
  
  if (bikeWeight < 7) {
    bikeWeightDesc = 'leggera';
  } else if (bikeWeight > 7) {
    bikeWeightDesc = 'pesante';
  } else {
    bikeWeightDesc = 'di peso medio';
  }

  bikeInfoContainer.innerHTML = `La bicicletta ${selectedBike.brand} ha un peso di ${selectedBike.weight} kg ed è considerata ${bikeWeightDesc}.`;
};

document.getElementById('check-bike').addEventListener('click', getBikeInfo);
