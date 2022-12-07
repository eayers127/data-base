const mongoose = require('mongoose');
const uri = "mongodb+srv://ethanayers88:EthanDGM3760@cluster0.pvhwusn.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(
    uri,
    {
        useNewUrlParser: true
    }
)
.then(e=> console.log("MongoDB Ready"))
.catch(console.log('error'))

// //require('./query')
require('./createUser')
// require('./update')
// //require('./delete')