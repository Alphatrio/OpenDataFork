

const axios = require('axios')
const express = require('express')
const request = require('request')
const fs = require('fs')
const XLSX = require('xlsx');
const puppeteer = require('puppeteer')


app.get('/', function (req, res) {
    res.send('Hello World!')
  })
  
  var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('App listening at http://%s:%s', host, port)
  })



  app.get('/bio', function(req,response){

})



app.listen(PORT, function(){
	console.log('Hello :'+ PORT)
})



function searchOne(nomVille,file){
    let openFile = fs.readFileSync('Data/bioScore.json')
    let bioScore = JSON.parse(openFile)

    let res = bioScore.forEach(x => {
        if (x.nomCommune == nomVille){
            return x.scoreBio
        }
    })

}




