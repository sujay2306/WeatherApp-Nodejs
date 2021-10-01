const request =  require('request')

const geocode = (adress,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +encodeURIComponent(adress)+'.json?access_token=pk.eyJ1Ijoic3VqYXlrcyIsImEiOiJja3U3MnJ0aWQ1M3UwMm9ucWg1NDZ5N3NhIn0.C1CpLOWSUmYrK3qVK95pWw&limit=1'
    
      request({url:url,json:true},(error,response)=>{
        if(error){
          callback('Unable to connect',undefined)
        }
        else if(response.body.features.length==0){
          callback('Location not found',undefined)
        }
        else{
          callback(undefined, {
            latitude:response.body.features[0].center[0],
            longitude:response.body.features[0].center[1],
            location:response.body.features[0].place_name   
          })
    
        }
      
      })
    }

    module.exports=geocode