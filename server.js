const express = require('express');
const mongoose = require('mongoose');
const appRoutes = require('./routes/appRoutes');
const Cors = require('cors');

//configuracion de app
const app = express();
const port = process.env.PORT || 8001;

//conexion de mongodb atlas 
const connection_url = 'mongodb+srv://root:12345@appmerndb.ragum.mongodb.net/appmernDB?retryWrites=true&w=majority'

//Middlewares

app.use(express.json())
app.use(Cors())

//configuracion de base de datos con mongoose
//https://exerror.com/mongoparseerror-options-usecreateindex-usefindandmodify-are-not-supported/


mongoose.connect(
    connection_url,
    async(err)=>{
        if(err) throw err;
        console.log("conncted to db")
    }
)



//Api endpoints
app.use('/',appRoutes);

//Listener
app.listen(port, () => console.log(`Listening on : http://localhost:8001/${port}`))

