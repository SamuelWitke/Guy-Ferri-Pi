const express = require('express');
const PORT = process.env.PORT || 3000;
const Player = require('player');
let app = express();
let player = new Player('./Guy Fieri Saying Flavortown.mp3');

app.get('/', (req, res) => {
	try {
		player.play();
	} catch(err) {
		console.log(err);
	}
	res.send('Ferri server started');
});

app.listen(PORT, () => {
	console.log(`Doorbell listening on port ${PORT}`);
});
