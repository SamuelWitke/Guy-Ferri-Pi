const express = require('express');
const PORT = process.env.PORT || 3000;
const Player = require('player');
let player = new Player('./SONG MADE FROM GUY FIERI SOUNDS (FLAVORTOWN REMIX).mp3');



let app = express();
app.get('/', (req, res) => {
  res.send('Ferri server started');
  player.play(function(err, player){
    console.log('playend!');
  });
});

app.listen(PORT, () => {
	    console.log(`Doorbell listening on port ${PORT}`);
});
