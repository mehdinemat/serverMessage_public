const express = require('express')

const router = express.Router()

const attackCtrl = require('../controllers/attack')

router.post('/person' , attackCtrl.addPerson )
router.patch('/person' , attackCtrl.updatePerson)
router.delete('/person/:id' , attackCtrl.deletePerson )
router.post('/attacked' , attackCtrl.addAttacked)
router.get('/attacked' , attackCtrl.getAttacked)
router.patch('/attacked' , attackCtrl.updateAttacked)
router.delete('/attacked/:id' , attackCtrl.deleteAttacked)
router.post('/simnumber' , attackCtrl.addSimNumber)
router.patch('/simnumber' , attackCtrl.updateSimNumber)
router.delete('/simnumber/:id' , attackCtrl.deleteSimNumber)
router.post('/attacking' , attackCtrl.addAttacking)
router.get('/attacking' , attackCtrl.getAttacking)
router.patch('/attacking' , attackCtrl.updateAttacking)
router.delete('/attacking/:id' , attackCtrl.deleteAttacking)
router.post('/attackgroup', attackCtrl.addAttackGroup)
router.patch('/attackgroup' , attackCtrl.updateAttackGroup)
router.delete('/attackgroup' , attackCtrl.deleteAttackGroup)

module.exports = router