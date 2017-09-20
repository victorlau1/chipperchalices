const config = require('config')['passport'];
const axios = require('axios');


module.exports.saveGoogleEvent = (req, res) => {

  const postData = {
     "end": {
      "dateTime": req.body.endTime,
      "timeZone": "US/Pacific"
     },
     "start": {
      "dateTime": req.body.startTime,
      "timeZone": "US/Pacific"
     },
     "location": req.body.location,
     "summary": req.body.event
    };

  const urlAPI = `https://www.googleapis.com/calendar/v3/calendars/primary/events?sendNotifications=true&key={${config.Google.clientID}}`

    axios.post(urlAPI, postData)
    .then(response => {
      console.log('RESPONSE: ', response);
      res.sendStatus(200);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    })

};




