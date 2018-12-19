const express = require('express')
const app = express()
const port = 4001

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World! Pablo')
})

app.get('/devices', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json([{
        id:1, name:"dongle"
    }, {
        id:2, name:"tablet"
    }]);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))