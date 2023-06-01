
const Messages = require('../models/messages')

const MessageGroup = require('../models/messageGroup')

const Proper = require('../models/proper')

const messageCtrl = {

    addMessage:async(req,res)=>{

     try{

      const { content } = req.body
      
      const message = new Messages({ content })
      await message.save()

      res.status(200).json({content})

      
     }catch(err){ return res.status(500).json({msg:err.message}) }
      
    },
    deleteMessage:async(req,res)=>{

      try{
        const {id} = req.params

        const message = await Messages.findByIdAndDelete({_id:id})

        res.status(200).json({message})

      }catch(err){ return res.status(500).json({msg:err.message})}

    },
    updateMessage:async(req,res)=>{

        try{
            const { content , id } = req.body

            const message = await Messages.findByIdAndUpdate({_id:id} , {content:content} , {new:true})

            res.status(200).json({message})

        }catch(err){ return res.status(500).json({msg:err.message})}

    },
    getMessage:async(req,res)=>{
      
      try{
        const messages = await Messages.find().sort('-createdAt')

        res.status(200).json({messages})

      }catch(err){ return res.status(500).json({msg:err.message}) }

    },
    addMessageGroup:async(req,res)=>{
      
      try{
        const { name , messages } = req.body
        const messageGroup = new MessageGroup({name , messages})

        await messageGroup.save()

        res.status(200).json({messageGroup})

      }catch(err){ return res.status(500).json({msg:err.message}) }

    },
    deleteMessageGroup:async(req,res)=>{

      try{

        const {id} = req.params

        const messageDelete =await MessageGroup.findByIdAndDelete({_id:id})

        res.status(200).json({messageDelete})

      }catch(err){ return res.status(500).json({msg:err.message}) }

    },
    addProper:async(req,res)=>{
      try{
        const { proper } = req.body
        const resProper = new Proper({proper})
        await resProper.save()
        res.status(200).json({resProper})

      }catch(err){ return res.status(500).json({msg:err.message}) }
    },
    updateProper:async(req,res)=>{

      try{

        const { id , proper } = req.body

        const resProper = await Proper.findByIdAndUpdate({_id:id} , { proper:proper } , {new:true})

        res.status(200).json({resProper})


      }catch(err){ return res.status(500).json({msg:err.message}) }

    },
    deleteProper:async(req,res)=>{
      try{

        const {id} = req.params
      
        const proper = await Proper.findByIdAndDelete({_id:id})

        res.status(200).json({proper})

      }catch(err){ return res.status(500).json({}) }
    }


}

module.exports = messageCtrl