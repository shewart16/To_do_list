const express = require('express')
const router = express.Router()
const homework = require('../model/model')

router.get('/', async (req,res) => {
    const alltodo = await homework.find()
    res.render('index', {item:alltodo})
})

router.post('/', (req,res) => {
    const item = new homework({
        item: req.body.homework
    })
    item.save()
    res.redirect('/')
})

router.get('/delete/:id', (req,res)=> {
    const id = req.params.id
    homework.findByIdAndDelete(id,err =>{
        if (err) {
            return res.send(500,err)
        }
        res.redirect('/')
    })
} )

module.exports = router