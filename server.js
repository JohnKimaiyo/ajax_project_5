const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');
const { response } = require('express');

const hostname = '127.0.0.1';
const port = 3001;

// consfigure bodyParser
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlEncodedParser);

// consfigure cors
app.use(cors());

// configure the router
app.use('/api', router)

// get
app.get('/', (request, response) => {
    response.send(`<h2>welcome to express server of employee portal <h2>`)
});

app.listen(port, hostname, () => {
    response.send(`express server is tatrted at http://${hostname} : ${port}`)
});
