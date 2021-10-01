const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=347afd7fddd09b141a26541e0e2e3fb1&query=' + latitude +',' + longitude + '&units=f'

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } 
    else if (response.body.error) {
      callback("Unable to find location", undefined);
    } 
    else {
      callback(undefined, response.body.current.weather_descriptions[0]+". it is currently "+response.body.current.temperature+ " degrees out. It feels like "+response.body.current.feelslike+" degrees out"
      )
    }
  })
}
module.exports= forecast


