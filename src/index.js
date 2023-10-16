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
    let simpleDateFormat = "";

    if(date.includes("-") == false) 
    {
        simpleDateFormat = new Date(Number(date));
        
        if(simpleDateFormat != 'Invalid Date') 
        {
            res.json({
                'unix': simpleDateFormat.getTime(),
                'utc': simpleDateFormat.toUTCString()
            });
        } 
    }

    if(date.includes("-") == true) 
    {
        simpleDateFormat = new Date(date).toUTCString();
        if(simpleDateFormat != 'Invalid Date') 
        {
            res.json({
                'unix': new Date(date).getTime(),
                'utc': simpleDateFormat
            });
        } 
    }

    if(simpleDateFormat == 'Invalid Date') 
    {
        res.json({
            'error': 'Invalid Date'
        });
    }
})

app.listen(3000);
console.log('Server is listening on port', 3000);
