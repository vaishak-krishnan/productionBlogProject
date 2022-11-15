// const express = require('express')
// const router = express.Router()  // routing funtion
// const DATA = require('../models/blog')

// // get post put dele here


// // read full blog list
// router.get('/api/bloglist', async(req,res) => {
//     try {

//         const list = await DATA.find()
//         res.send(list)
        
//     } catch (error) {
//         console.log(error)
//     }

// })



// // add blog
// router.post('/api/blog', async(req,res) =>  {
//     try {
//         console.log(req.body)

//         let item = {
//             title : req.body.title,
//             author : req.body.author,
//             details : req.body.details,
//             coments : req.body.coments
//         }

//         const newBlog = new DATA(item)
//         const saveBlog = await newBlog.save()

//         res.send(saveBlog)
        
//     } catch (error) {
//         console.log(error)
//     }

// })



// // delete blog 
// router.delete('/api/blog/:id', async(req,res) => {
//     try {
//         let id = req.params.id
//         const deleteBlog = await DATA.findByIdAndDelete(id)
//         res.send(deleteBlog)
        
//     } catch (error) {
//         console.log(error)
//     }

// })



// //  update blog

// router.put('/api/blog', async(req,res) =>   {
//     try {

//         let id = req.body.id
//         let item = {
//             title : req.body.title,
//             author : req.body.author,
//             details : req.body.details,
//             coments : req.body.coments
//         }

//         let updateData = {
//             $set:item
//         }

//         let updateBlog = await DATA.findByIdAndUpdate({'id':id},updateData)

//         res.send(updateBlog)
        
//     } catch (error) {
//         console.log(error)
//     }

// })


// // read one blog record

// router.get('/api/blog/:id', async(req,res) => {
//     try {
//         let id  = req.params.id
//         const singleBlog = await DATA.findById(id)
//         res.send(singleBlog)
        
//     } catch (error) {
//         console.log(error)
//     }

// })














// // exporting 
// module.exports = router


