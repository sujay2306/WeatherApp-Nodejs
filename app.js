request =  require('request')
const url = 'http://api.weatherstack.com/current?access_key=347afd7fddd09b141a26541e0e2e3fb1&query=37.8267,-122.4233&units=m'
request({url:url,json:true}, (error,response)=>{
  console.log( response.body.current.weather_descriptions[0]+". it is currently "+response.body.current.temperature+ " degrees out. It feels like "+response.body.current.feelslike+" degrees out")
})  