// import json-server

import { create, router as _router, defaults } from 'json-server';


// create a server application using jasonServer

const docServer = create()

//setup path for db.json

const router = _router('db.json')

//return a middleware used by json server

const middleware = defaults()

// setup port

const port = 3001

// use in server

docServer.use(middleware)
docServer.use(router)


//to run a port

docServer.listen(port,()=>{

console.log('Doc server is listening on port'+port);

})