const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

// Middleware to parse form data from Twilio
app.use(express.urlencoded({ extended: false }));

// Route to handle incoming speech from Twilio
app.post('/voice', (req, res) => {
  const speechResult = req.body.SpeechResult;
  
  // Log what the caller said
  console.log('Caller said:', speechResult);
  
  // Respond with TwiML for the next question
  res.type('text/xml');
  res.send(`
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <Say>Got it. What type of vehicle is it?</Say>
    </Response>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});