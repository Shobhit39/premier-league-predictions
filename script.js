let fixtures = [
  { team1: "Leicester FC", team2: "Nottm Forest", team1Logo: "images/leicester.png", team2Logo: "images/forest.png" },
  { team1: "Manchester City", team2: "Southampton", team1Logo: "images/city.png", team2Logo: "images/southampton.png" },
  { team1: "Brentford", team2: "Ipswich Town", team1Logo: "images/brentford.png", team2Logo: "images/ipswich.png" },
  { team1: "Brighton", team2: "Wolves", team1Logo: "images/brighton.png", team2Logo: "images/wolves.png" },
  { team1: "Aston Villa", team2: "Bournemouth", team1Logo: "images/villa.png", team2Logo: "images/bournemouth.png" },
  { team1: "Everton", team2: "Fulham", team1Logo: "images/everton.png", team2Logo: "images/fulham.png" },
  { team1: "Crystal Palace", team2: "Tottenham", team1Logo: "images/palace.png", team2Logo: "images/tottenham.png" },
  { team1: "Chelsea", team2: "Newcastle", team1Logo: "images/chelsea.png", team2Logo: "images/newcastle.png" },
  { team1: "West Ham", team2: "Manchester United", team1Logo: "images/westham.png", team2Logo: "images/united.png" },
  { team1: "Arsenal", team2: "Liverpool", team1Logo: "images/arsenal.png", team2Logo: "images/liverpool.png" }
];

// Load fixtures and display them
async function loadFixtures() {
  const fixtureList = document.getElementById('fixture-list');
  fixtureList.innerHTML = ""; // Clear previous fixtures
  fixtures.forEach((fixture, index) => {
    let fixtureDiv = document.createElement('div');
    fixtureDiv.classList.add('fixture');
    fixtureDiv.innerHTML = `
      <img src="${fixture.team1Logo}" alt="${fixture.team1} Logo" class="team-logo">
      <span>${fixture.team1}</span>
      <input type="number" id="team1-score-${index}" placeholder="0" min="0">
      <span class="vs">vs</span>
      <input type="number" id="team2-score-${index}" placeholder="0" min="0">
      <span>${fixture.team2}</span>
      <img src="${fixture.team2Logo}" alt="${fixture.team2} Logo" class="team-logo">
    `;
    fixtureList.appendChild(fixtureDiv);
  });
}

// Submit predictions and display them
function submitPredictions() {
  let predictions = [];
  fixtures.forEach((fixture, index) => {
    let team1Score = document.getElementById(`team1-score-${index}`).value || 0;
    let team2Score = document.getElementById(`team2-score-${index}`).value || 0;
    predictions.push({
      team1: fixture.team1,
      team2: fixture.team2,
      team1Score: team1Score,
      team2Score: team2Score,
      team1Logo: fixture.team1Logo,
      team2Logo: fixture.team2Logo
    });
  });

  // Display the predictions and add print button
  displayPredictions(predictions);
}

// Display predictions and add print button
function displayPredictions(predictions) {
  const fixtureList = document.getElementById('fixture-list');
  fixtureList.innerHTML = ""; // Clear the fixture list
  predictions.forEach(fixture => {
    let predictionDiv = document.createElement('div');
    predictionDiv.classList.add('prediction');
    predictionDiv.innerHTML = `
      <img src="${fixture.team1Logo}" alt="${fixture.team1} Logo" class="team-logo">
      <div class="team">${fixture.team1}</div>
      <div class="score">${fixture.team1Score}</div>
      <div class="dash">-</div>
      <div class="score">${fixture.team2Score}</div>
      <div class="team">${fixture.team2}</div>
      <img src="${fixture.team2Logo}" alt="${fixture.team2} Logo" class="team-logo">
    `;
    fixtureList.appendChild(predictionDiv);
  });

  // Add print button
  const printButton = document.createElement('button');
  printButton.textContent = 'Print Predictions';
  printButton.onclick = () => window.print();
  fixtureList.appendChild(printButton);

  // Hide the submit button after displaying predictions
  const submitButton = document.getElementById('submit-predictions');
  if (submitButton) {
    submitButton.style.display = 'none'; // Hide the submit button
  }
}

// Initial load of fixtures
loadFixtures();
