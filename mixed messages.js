let players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe', 'Lewandowski', 'Dembele', 'Benzema', 'Haaland', 'Vinnicus', 'Bale', 'Pulisic']

let randomPlayer = players[Math.floor(Math.random() * players.length)];

document.body.innerHTML = "`${randomPlayer} loves the game of football`"