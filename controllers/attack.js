const Person = require('../models/person')
const Attacked = require('../models/attacked')
const SimNumber = require('../models/simNumber')
const Attacking = require('../models/attacking')

const AttackGroup = require('../models/attackGroup')

const attackCtrl = {

  addPerson: async (req, res) => {
    try {

      const { name, number } = req.body

      const result = await Person.find({ name: name, number: number })
      if (result.length > 0) {
        return res.status(400).json({ msg: 'این شخص قبلا ثبت نام کرده است .' })
      }

      const person = new Person({ name, number })
      await person.save()

      res.status(200).json({ person })

    } catch (err) { return res.status(500).json({ msg: err.message }) }
  },
  updatePerson: async (req, res) => {

    try {
      const { name, number, id } = req.body

      const person = await Person.findByIdAndUpdate({ _id: id }, { number: number, name: name }, { new: true })

      res.status(200).json({ person })

    } catch (err) { return res.status(500).json({ msg: err.message }) }

  },
  deletePerson: async (req, res) => {

    try {
      const { id } = req.params

      const person = await Person.findByIdAndDelete({ _id: id })

      res.status(200).json({ person })

    } catch (err) { return res.status(500).json({ msg: err.message }) }

  },
  addAttacked: async (req, res) => {

    try {

      const { name, persons } = req.body
      const attacked = new Attacked({ name: name, persons: persons })

      await attacked.save()

      res.status(200).json({ attacked })

    } catch (err) { return res.status(500).json({ msg: err.message }) }

  },
  getAttacked:async(req,res)=>{

    try{

      const attacked = await Attacked.find()
      res.status(200).json({attacked})
      
    }catch(err){ return res.status(500).json({msg:err.message}) }
  },
  updateAttacked: async (req, res) => {

    try {

      const { name, persons, id } = req.body

      const attacked = await Attacked.findByIdAndUpdate({ _id: id }, { name: name, persons: persons }, { new: true })

      res.status(200).json({ attacked })

    } catch (err) { return res.status(500).json({ msg: err.message }) }

  },
  deleteAttacked: async (req, res) => {
    try {

      const { id } = req.params

      const attacked = await Attacked.findByIdAndDelete({ _id: id })

      res.status(200).json({ attacked })

    } catch (err) { return res.status(500).json({ msg: err.message }) }

  }, addSimNumber: async (req, res) => {

    try {

      const { number, operatorname, ownership, loc } = req.body

      const simnumber = new SimNumber({ number, operatorname, ownership, loc })

      await simnumber.save()

      res.status(200).json({ simnumber })


    } catch (err) { return res.status(500).json({ msg: err.message }) }


  }, updateSimNumber: async (req, res) => {

    try {

      const { id, number, operatorname, ownership, loc } = req.body

      const simnumber = await SimNumber.findByIdAndUpdate({ _id: id }, { number: number, operatorname: operatorname, ownership: ownership, loc: loc }, { new: true })

      res.status(200).json({ simnumber })

    } catch (err) { return res.status(500).json({ msg: err.message }) }


  }, deleteSimNumber: async (req, res) => {
    try {

      const { id } = req.params

      const simnumber = await SimNumber.findByIdAndDelete({ _id: id })

      res.status(200).json({ simnumber })

    } catch (err) { return res.status(500).json({ msg: err.message }) }
  }, addAttacking: async (req, res) => {
    try {

      const { name, sim } = req.body

      const attacking = new Attacking({ name, sim })

      attacking.save()

      res.status(200).json({ attacking })

    } catch (err) { return res.status(500).json({ msg: err.message }) }
  }, updateAttacking: async (req, res) => {

    try {

      const { id, name, simnumber } = req.body

      const attacking = await Attacking.findByIdAndUpdate({ _id: id }, { name, simnumber }, { new: true })

      res.status(200).json({ attacking })


    } catch (err) { return res.status(500).json({ msg: err.message }) }

  }, deleteAttacking: async (req, res) => {

    try {

      const { id } = req.params
      const attacking = await Attacking.findByIdAndDelete({ _id: id })
      res.status(200).json({attacking})

    } catch (err) { return res.status(500).json({ msg: err.message }) }

  },
  getAttacking:async(req,res)=>{

    try{

      const attacking = await Attacking.find()

      res.status(200).json({attacking})

    }catch(err){ return res.status(500).json({msg:err.message}) }

  },
  addAttackGroup:async(req,res)=>{

    try{

      const  { dateFrom , dateTo , hour , attacking , attacked , messageGroup } = req.body
      
      const attackGroup = new AttackGroup({dateFrom , dateTo , hour , attacking , attacked , messageGroup})
      
      await attackGroup.save()
      
    }catch(err){ return res.status(500).json({msg:err.message}) }

  },updateAttackGroup:async(req,res)=>{
    try{

      const  { dateFrom , dateTo , hour , attacking , attacked , messageGroup , id } = req.body

      const attackGroup = await AttackGroup.findByIdAndUpdate({_id:id} ,{dateFrom , dateTo , hour , attacking , attacked , messageGroup },{new:true})

      return res.status(200).json({attackGroup})
      
    }catch(err){ return res.status(500).json({msg:err.message}) }
  },deleteAttackGroup:async(req,res)=>{
    try{
      const {id} = req.params

      const attackGroup = await AttackGroup.findByIdAndDelete({_id:id})

      return res.status(200).json({attackGroup})

    }catch(err){ return res.status(500).json({msg:err.message}) }

  }

}

module.exports = attackCtrl