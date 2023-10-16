const express = require('express');
const app = express();


app.get('/api/', (req, res) => {
    let dateNow = new Date();
    res.json({
        'unix': Date.now(),
        'utc': dateNow.toUTCString()
    });
})

app.get('/api/:date_string', (req, res) => {
    let date_string = req.params.date_string;
    let simpleDateFormat = "";

    if(date_string.includes("-") == false) 
    {
        simpleDateFormat = new Date(+date_string);
        if(simpleDateFormat != 'Invalid Date') 
        {
            res.json({
                'unix': simpleDateFormat.getTime(),
                'utc': simpleDateFormat.toUTCString()
            });
        } 
    }

    if(date_string.includes("-") == true) 
    {
        simpleDateFormat = new Date(date_string).toUTCString();
        if(simpleDateFormat != 'Invalid Date') 
        {
            res.json({
                'unix': new Date(date_string).getTime(),
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
