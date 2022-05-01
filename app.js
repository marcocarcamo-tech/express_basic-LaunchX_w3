const express = require('express');

const app = express();

const port = 3000
//Home route
app.get('/', (req, res) => {
  res.send('Hello World')
})
//launchx route
app.get('/launchx', (req, res)=>{
  res.send('Welcome to LaunchX')
})

//Initialize app
app.listen (port, ()=>{
	console.log(`Example app listening on port ${port}`)
})
