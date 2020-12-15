const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.json')

const app = express()

const jsonParser = bodyParser.json();

const accountSid = config.accountSID;
const authToken = config.authToken;
const twilioNumber = config.twilioNumber

const PORT = 5000;

const twilio = require('twilio');

app.get('/', function(req, res) {
    res.json({ message: "Success! Server is running"})
})

app.post('/sendSMS', jsonParser, function(req, res) {

    console.log(req.body); // For debugging
    const { messageBody, recipientNumber } = req.body;
    
    const client = new twilio(accountSid, authToken)
    client.messages.create({
        body: messageBody,
        to: recipientNumber,
        from: twilioNumber
    })
    .then(message => {
        console.log(message);
        res.send(message);
    })
    .catch(error => {
        console.error(`${error}`);
        res.send(error);
    });
});

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}!`)
})