const express = require('express');
const app = express();

app.get('/api/', (req, res) => {
    let dateNow = new Date();
    res.json({
        'unix': Date.now(),
        'utc': dateNow.toUTCString()
    });
})

app.get('/api/:date?', (req, res) => {
    let date = req.params.date;

    if(date.length != 0 && isNaN(date)) 
    {
        res.json({
            'error': 'Invalid Date'
        });
    }

    if(!isNaN(date)) 
    {
        let dateConverted = new Date(parseInt(date));
        res.json({
            'unix': parseInt(date),
            'utc': dateConverted.toUTCString()
        });
    }

    let dateNow = new Date.now();
    res.json({
        'unix': parseInt(dateNow),
        'utc': dateConverted.toUTCString()
    });
})

app.listen(3000);
console.log('Server is listening on port', 3000);
