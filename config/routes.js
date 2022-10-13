const express=require('express')
const router=express.Router()
const urlController=require('../app/controllers/urlController')

router.get('/api/urls',urlController.list)
router.post('/api/urls',urlController.create)
router.get('/api/urls/:id',urlController.show)
router.delete('/api/urls/:id',urlController.remove)
router.put('/api/urls/:id',urlController.update)
module.exports=router