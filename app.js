
const geocode = require('./utils/geocode')
const forecast  = require('./utils/forecast')

geocode('Bangalore', (error,data)=>{
  console.log('Error',error)
  console.log('data',data)

})

forecast(12.972442,77.580643,(error, data) => {
  console.log("Error", error)
  console.log("Data", data)
})


