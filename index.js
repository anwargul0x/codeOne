'use strict'
const express =  require( 'express' )
const bodyParser =require('body-parser')
const request = require('request')

const app =express()

app.set('port',(process.env.PORT|| 500))

// process data
app.use(body-parser.urlencoded({extend: false}))
app.use(bodyParser.json())

//Routes

app.get('/', function(req,res){
	res.send("Hi Chatbot is Here")
})

// fb

app.get('/webhook/',function(req,res){
	if(req.query['hub.verify_token'] === "anwargul"){
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong Token")
})

app.listen(app.get('port'),function(){
	console.log("running: port")
})