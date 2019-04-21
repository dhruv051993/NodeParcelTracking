const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const auth = require('./apis/authentication');
const delivery = require('./apis/delivery');

const app = express();

app.set('port', process.env.PORT || 5002);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/authenticate', auth.authenticateUser);
app.get('/getDeliveryDetailsAdmin', delivery.getDeliveryDetailsAdmin);
app.post('/setDeliveryStatus', delivery.changeDeliveryStatus);
app.get('/getParcelDetailsUser', delivery.getParcelDetailsUser);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});