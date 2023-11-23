//import json-server library in index.js file (use keyword 'require' instead of 'import')
const jsonServer = require('json-server')

//create server using json-server library
const videoPlayerServer = jsonServer.create()

//create a path to database.json
const router = jsonServer.router('database.json')

//middleware to convert js to json
const middleware = jsonServer.defaults()

//Connect
videoPlayerServer.use(middleware) //need to connect middleware first then router !!
videoPlayerServer.use(router)

//by default json servr will also run on port:3000 
//set up port for server for avoiding clash between back end and front end
const port = 5000 || process.env.PORT //(process.env.PORT) if clash occur with another project when hosting the website 

//monitor 5000
videoPlayerServer.listen(port,()=>{
    console.log(`videoPlayerServer is listening to ${port} and waiting for the request`); //helps to make us know if the port is running successfully
})