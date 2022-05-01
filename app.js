const express = require('express');

const app = express();

const port = 3000
//Routes

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/launchx', (req, res)=>{
  res.send('Welcome to LaunchX')
})
app.get('/explorersInNode', (req, res)=>{
  const explorer = {name: "Explorer", msg: "Hello"}
  res.send(explorer)
})

//Initialize app
app.listen (port, ()=>{
	console.log(`Example app listening on port ${port}`)
})
