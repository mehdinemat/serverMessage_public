const Person = require('../models/person')
const Attacked = require('../models/attacked')
const SimNumber = require('../models/simNumber')
const Attacking = require('../models/attacking')
const AttackGroup = require('../models/attackGroup')
const Number = require('../models/number')
const OperatorName = require('../models/operatorName')
const OwnerShip = require('../models/ownerShip')
const Location = require('../models/location')

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
  getAttacked: async (req, res) => {

    try {

      const attacked = await Attacked.find()
      res.status(200).json({ attacked })

    } catch (err) { return res.status(500).json({ msg: err.message }) }
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
  },
  getSimNumber: async (req, res) => {

    try {

      const simNumber = await SimNumber.find()
      res.status(200).json({ simNumber })

    } catch (err) { return status(500).json({ msg: err.message }) }

  },
  addAttacking: async (req, res) => {
    try {

      const { name, sim } = req.body

      const attacking = new Attacking({ name, sim })

      attacking.save()

      res.status(200).json({ attacking })

    } catch (err) { return res.status(500).json({ msg: err.message }) }
  }, updateAttacking: async (req, res) => {

    try {

      const { _id, name, sim } = req.body

      const attacking = await Attacking.findByIdAndUpdate({ _id }, { name, sim }, { new: true })

      res.status(200).json({ attacking })


    } catch (err) { return res.status(500).json({ msg: err.message }) }

  }, deleteAttacking: async (req, res) => {

    try {

      const { id } = req.params
      const attacking = await Attacking.findByIdAndDelete({ _id: id })
      res.status(200).json({ attacking })

    } catch (err) { return res.status(500).json({ msg: err.message }) }

  },
  getAttacking: async (req, res) => {

    try {

      const attacking = await Attacking.find()

      res.status(200).json({ attacking })

    } catch (err) { return res.status(500).json({ msg: err.message }) }

  },
  addAttackGroup: async (req, res) => {

    try {

      const { dateFrom, dateTo, hour, attacking, attacked, messageGroup } = req.body

      const attackGroup = new AttackGroup({ dateFrom, dateTo, hour, attacking, attacked, messageGroup })

      await attackGroup.save()

    } catch (err) { return res.status(500).json({ msg: err.message }) }

  }, updateAttackGroup: async (req, res) => {
    try {

      const { dateFrom, dateTo, hour, attacking, attacked, messageGroup, id } = req.body

      const attackGroup = await AttackGroup.findByIdAndUpdate({ _id: id }, { dateFrom, dateTo, hour, attacking, attacked, messageGroup }, { new: true })

      return res.status(200).json({ attackGroup })

    } catch (err) { return res.status(500).json({ msg: err.message }) }
  }, deleteAttackGroup: async (req, res) => {
    try {
      const { id } = req.params

      const attackGroup = await AttackGroup.findByIdAndDelete({ _id: id })

      return res.status(200).json({ attackGroup })

    } catch (err) { return res.status(500).json({ msg: err.message }) }

  },
  addNumber: async (req, res) => {

    try {

      const { number } = req.body

      const resNumber = new Number({ number })
      await resNumber.save()

      res.status(200).json({ number: resNumber })

    } catch (err) { return res.status(500).json({ msg: err.message }) }

  }, getNumber: async (req, res) => {

    try {

      const number = await Number.find()

      res.status(200).json({ number })

    } catch (err) { return res.status(500).json({ msg: err.message }) }

  }, deleteNumber: async (req, res) => {

    try {

      const { id } = req.params

      const number = await Number.findByIdAndDelete({ _id: id })

      res.status(200).json({ number })

    } catch (err) { return res.status(500).json({ msg: err.message }) }

  },
  addOperatorName: async (req, res) => {
    try {

      const { name } = req.body

      const operatorName = new OperatorName({ name })
      await operatorName.save()
      res.status(200).json({ operatorName })

    } catch (err) { return res.status(500).json({ msg: err.message }) }
  }, getOperatorName: async (req, res) => {
    try {

      const operatorName = await OperatorName.find()

      res.status(200).json({ operatorName })

    } catch (err) { return res.status(500).json({ msg: err.message }) }
  },
  deleteOperatorName: async (req, res) => {
    try {

      const { id } = req.params
      const operatorName = await OperatorName.findByIdAndDelete({ _id: id })

    } catch (err) { return res.status(500).json({ msg: err.message }) }
  },
  addOwnerShip: async (req, res) => {
    try {

      const { name } = req.body
      const ownerShip = new OwnerShip({ name })
      await ownerShip.save()
      res.status(200).json({ ownerShip })

    } catch (err) { return res.status(500).json({ msg: err.message }) }
  },
  getOwnerShip: async (req, res) => {
    try {
      const ownerShip = await OwnerShip.find()
      res.status(200).json({ ownerShip })
    } catch (err) { return res.status(500).json({ msg: err.message }) }
  },
  deleteOwnerShip: async (req, res) => {
    try {

      const { id } = req.params
      const ownerShip = await OwnerShip.findByIdAndDelete({ _id: id })
      res.status(200).json({ ownerShip })

    } catch (err) { return res.status(500).json({ msg: err.message }) }
  },
  addLocation: async (req, res) => {
    try {

      const { name } = req.body
      const location = new Location({ name })
      await location.save()
      res.status(200).json({ location })

    } catch (err) { return res.status(500).json({ msg: err.message }) }
  },
  getLocation: async (req, res) => {
    try {

      const location = await Location.find()
      res.status(200).json({ location })

    } catch (err) { return res.status(500).json({ msg: err.message }) }
  },
  deleteLocation: async (req, res) => {
    try {

      const { id } = req.params
      const location = await Location.findByIdAndDelete({ _id: id })
      res.status(200).json({ location })

    } catch (res) { return res.status(500).json({ msg: res.message }) }
  }

}

module.exports = attackCtrl