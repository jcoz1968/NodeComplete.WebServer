var request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiamNvejY4IiwiYSI6ImNqdXE5NDdtYjA0cGU0ZHRrZmVwMXBjdHYifQ.80nKYcOtAVicmRgsDHrm6Q";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services.", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

const alteredString = (stringToParse) => {
  //last character
  const alteredText = stringToParse.slice(0, stringToParse.length - 1);
  //first character
  return alteredText.slice(1);
};

module.exports = geocode;
