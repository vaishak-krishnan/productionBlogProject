// conncetion for mongoDB

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://vaishakkrishnan:11Knights@fsdmain.4y3vqzk.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true

}).then(()=>{
    console.log('..........mongoDB connected..........')
}).catch((error)=>{
    console.log(error)
})