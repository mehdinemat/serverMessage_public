const express = require('express')

const router = express.Router()

const messageCtrl = require('../controllers/message')

router.get('/message' , messageCtrl.getMessage)
router.post('/addmessage' , messageCtrl.addMessage)
router.delete('/message/:id' , messageCtrl.deleteMessage)
router.patch('/message' , messageCtrl.updateMessage)
router.post('/messageGroup' , messageCtrl.addMessageGroup)
router.delete('/messageGroup/:id' , messageCtrl.deleteMessageGroup)
router.post('/proper' , messageCtrl.addProper)
router.patch('/proper' , messageCtrl.updateProper)
router.delete('/proper/:id' , messageCtrl.deleteProper)


module.exports = router

