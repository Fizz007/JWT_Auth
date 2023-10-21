const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017',{
    dbName:'RealState'
}).then(()=>{
    console.log('DB Connected')
}).catch((err)=>{
    console.log(`Error ${err.message}`)
})