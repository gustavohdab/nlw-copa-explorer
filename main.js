let delay = -0.5;

function createGame(team1, hour, team2) {
  return `
  <li>
    <img src="assets/icon.${team1}.svg" alt="${team1} icon svg" />
      <strong>${hour}</strong>
    <img src="assets/icon.${team2}.svg" alt="${team2} icon svg" />
  </li>
`
}

function createCard(date, day, games) {
  delay = delay + 0.5
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("11/24", "thursday",
    createGame("switzerland", "07:00", "cameroon") +
    createGame("uruguay", "10:00", "south-korea") +
    createGame("portugal", "13:00", "ghana") +
    createGame("brazil", "16:00", "serbia")
  ) +
  createCard("11/28", "monday",
    createGame("cameroon", "07:00", "serbia") +
    createGame("south-korea", "10:00", "ghana") +
    createGame("brazil", "13:00", "switzerland") +
    createGame("portugal", "16:00", "uruguay")
  ) +
  createCard("12/02", "sunday",
    createGame("south-korea", "07:00", "portugal") +
    createGame("ghana", "10:00", "uruguay") +
    createGame("serbia", "13:00", "switzerland") +
    createGame("cameroon", "16:00", "brazil")
  )

