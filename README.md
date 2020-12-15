# Twilio SMS Example App

## Overview

This application gives you an example of how to send SMS messages 
with Twilio via a simple frontend UI.

## Setup Requirements

Before we begin, you will need to collect 3 pieces of information to run the application:
- Account SID: Your primary Twilio account identifier - find this [in the console here](https://www.twilio.com/console).
- Auth Token: Your primary Twilio Authentication Token - find this [in the console here](https://www.twilio.com/console).
- Twilio Number: Your SMS capable Twilio phone number (in E.164 format) you'd like to send messages from - find this [in the console here](https://www.twilio.com/console/phone-numbers/incoming)

## Setting up the application

Open the config.json file in the root directory

```bash
    "accountSID": "",
    "authToken": "",
    "twilioNumber": ""
```

and edit the file with the configuration parameters we gathered previously. Make sure the twilioNumber is in E.164 format.

Next, we need to install our dependencies for our backend server.

```bash
npm install
```

And, we do the same for our React frontend

```bash
cd client && npm install
```

## Running the application

Now we should be all set! To run both the frontend (client) and backend:

```bash
npm start
```

![app](https://github.com/mmenschig/twilios-smexample/blob/master/app.png?raw=true)

Your application should now be running at [http://localhost:3000](http://localhost:3000). Internal API requests from the frontend will be proxied to the [Express Server](https://expressjs.com/)] running at [http://localhost:5000](http://localhost:5000).

Requests from the Express server will be proxied to http://api.twilio.com
