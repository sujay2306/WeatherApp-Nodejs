 request = require('request')
//weatherstackAPI
// request =  require('request')
const url = 'http://api.weatherstack.com/current?access_key=347afd7fddd09b141a26541e0e2e3fb1&query=37.8267,-122.4233&units=m'
request({url:url,json:true}, (error,response)=>{
  console.log( response.body.current.weather_descriptions[0]+". it is currently "+response.body.current.temperature+ " degrees out. It feels like "+response.body.current.feelslike+" degrees out")
})  
//geocodingAPI
const curl =  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3VqYXlrcyIsImEiOiJja3U3MnJ0aWQ1M3UwMm9ucWg1NDZ5N3NhIn0.C1CpLOWSUmYrK3qVK95pWw'

request({url:curl, json:true}, (error,response)=>{
  const latitude = response.body.features[0].center[1]
  const longitude = response.body.features[0].center[0]
  console.log(latitude,longitude)
})