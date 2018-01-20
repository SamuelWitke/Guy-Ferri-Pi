const express = require('express');
const PORT = process.env.PORT || 3000;
const stream = require('youtube-audio-stream')
const url = 'https://www.youtube.com/watch?v=CwqGhL-v6Is'
const decoder = require('lame').Decoder
const speaker = new require('speaker')

let app = express();
app.get('/', (req, res) => {
    stream(url)
        .pipe(decoder())
        .pipe(speaker())
    res.send('Ferri server started');
});

app.listen(PORT, () => {
    console.log(`Doorbell listening on port ${PORT}`);
});
