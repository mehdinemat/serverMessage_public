const express = require('express')

const router = express.Router()

const messageCtrl = require('../controllers/message')

router.get('/message' , messageCtrl.getMessage)
router.post('/addmessage' , messageCtrl.addMessage)
router.delete('/message/:id' , messageCtrl.deleteMessage)
router.patch('/message' , messageCtrl.updateMessage)
router.post('/messagegroup' , messageCtrl.addMessageGroup)
router.get('/messagegroup' , messageCtrl.getMessageGroup)
router.delete('/messagegroup/:id' , messageCtrl.deleteMessageGroup)
router.patch('/messagegroup' , messageCtrl.updateMessageGroup)
router.get('/proper' , messageCtrl.getProper)
router.post('/proper' , messageCtrl.addProper)
router.patch('/proper' , messageCtrl.updateProper)
router.delete('/proper/:id' , messageCtrl.deleteProper)


module.exports = router

