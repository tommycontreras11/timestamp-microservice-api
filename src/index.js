const express = require('express');
const app = express();


app.get('/api/', (req, res) => {
    let dateNow = new Date();
    res.json({
        'unix': Date.now(),
        'utc': dateNow.toUTCString()
    });
})

const isInvalidDate = (date) => date.toUTCString() === "Invalid Date";

app.get('/api/:date', (req, res) => {
    let date = new Date(req.params.date);

    if(isInvalidDate(date)) 
    {
        date = new Date(+req.params.date);
    }

    if(isInvalidDate(date)) 
    {
        res.json({ error: "Invalid Date" });
        return;
    }

    res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    });

})

app.listen(3000);
console.log('Server is listening on port', 3000);
