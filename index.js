const express = require('express');
const PORT = process.env.PORT || 3000;
const Player = require('player');
let app = express();
let player = new Player('./SONG MADE FROM GUY FIERI SOUNDS (FLAVORTOWN REMIX).mp3');

app.get('/', (req, res) => {
    player.play(function(err, player){
      console.log('playend!');
    });
	res.send('Ferri server started');
});

app.listen(PORT, () => {
	console.log(`Doorbell listening on port ${PORT}`);
});
