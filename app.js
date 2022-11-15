const express = require('express')
const cors = require('cors')
const logger = require('morgan') // for seeing api calls in terminal
const PORT = 3000
const app = new express()

require('./middlewares/mongoDB') //to init mongoDB

app.use(cors()) //to connect frontend and backend without any disturbance
app.use(express.json()) // to recieve data from front end
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

//api

const DATA = require('./models/blog')

// get post put dele here


// read full blog list
app.get('/api/bloglist', async(req,res) => {
    try {

        const list = await DATA.find()
        res.send(list)
        
    } catch (error) {
        console.log(error)
    }

})



// add blog
app.post('/api/blog', async(req,res) =>  {
    try {
        console.log(req.body)

        let item = {
            title : req.body.title,
            author : req.body.author,
            details : req.body.details,
            coments : req.body.coments
        }

        const newBlog = new DATA(item)
        const saveBlog = await newBlog.save()

        res.send(saveBlog)
        
    } catch (error) {
        console.log(error)
    }

})



// delete blog 
app.delete('/api/blog/:id', async(req,res) => {
    try {
        let id = req.params.id
        const deleteBlog = await DATA.findByIdAndDelete(id)
        res.send(deleteBlog)
        
    } catch (error) {
        console.log(error)
    }

})



//  update blog

app.put('/api/blog', async(req,res) =>   {
    try {

        let id = req.body.id
        let item = {
            title : req.body.title,
            author : req.body.author,
            details : req.body.details,
            coments : req.body.coments
        }

        let updateData = {
            $set:item
        }

        let updateBlog = await DATA.findByIdAndUpdate({'id':id},updateData)

        res.send(updateBlog)
        
    } catch (error) {
        console.log(error)
    }

})


// read one blog record

app.get('/api/blog/:id', async(req,res) => {
    try {
        let id  = req.params.id
        const singleBlog = await DATA.findById(id)
        res.send(singleBlog)
        
    } catch (error) {
        console.log(error)
    }

})




// end api

const path = require('path'); 
app.use(express.static('./dist/blog-project')); 


// custom routes
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/blog-project/index.html'));
});

// Server code 
app.listen(PORT, () => {
    console.log(`...........Server running at ${PORT}.............`)
})