const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = "https://api.darksky.net/forecast/03516b4d2a76bef2a40e0bd3f36b89c2/" + latitude + "," + longitude + "?lang=en";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(undefined, {
        summary: body.daily.data[0].summary,
        temperature: body.currently.temperature,
        chanceOfRain: body.currently.precipProbability
      });
    }
  });
};

// console.log(response.body.daily.data[0].summary + ' It is currently: ' + response.body.currently.temperature + ' degrees out.  There is a ' + response.body.currently.precipProbability + '% chance of rain.');

module.exports = forecast;