const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=347afd7fddd09b141a26541e0e2e3fb1&query=' + latitude +',' + longitude + '&units=f'

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } 
    else if (body.error) {
      callback("Unable to find location", undefined);
    } 
    else {
      callback(undefined, body.current.weather_descriptions[0]+". it is currently "+body.current.temperature+ " degrees out. It feels like "+body.current.feelslike+" degrees out"
      )
    }
  })
}
module.exports= forecast


