
const Messages = require('../models/messages')

const MessageGroup = require('../models/messageGroup')

const Proper = require('../models/proper')

    class ApiFeatures{

      constructor(query , queryString ){
        this.query = query
        this.queryStirng = queryString
      }
      pagination(){
        const page = this.queryStirng.page || 1
        const limit = 5
        const skip = ( page - 1 ) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this
      }

    }

const messageCtrl = {

    addMessage:async(req,res)=>{

     try{

      const { content } = req.body
      let messArray = []
      console.log(content)
      for (let message of content){
       const mes = new Messages({content:message})
       messArray.push(mes)
       mes.save()
      }
      res.status(200).json({messArray})
      
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
            const { allMessage } = req.body

            
            for(let mes of allMessage){
              console.log(mes)
              if(mes?.proper?.length > 0){
                await Messages.findByIdAndUpdate({_id:mes._id} , {content:mes.content , proper:mes.proper} , {new:true})
              }else {
                await Messages.findByIdAndUpdate({_id:mes._id} , {content:mes.content} , {new:true})
              }
            }

            res.status(200).json({msg:'messages send successfully'})

        }catch(err){ return res.status(500).json({msg:err.message})}

    },
    getMessage:async(req,res)=>{
      
      try{

        const features=  new ApiFeatures(Messages.find() , req.query).pagination()
        const messages = await features.query.sort('-createdAt')

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

    },updateMessageGroup:async(req,res)=>{
      try{
       

        const messageGroup = await MessageGroup.findByIdAndUpdate({_id:req.body._id} , {name:req.body.name} , {new:true})

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
      getMessageGroup:async(req,res)=>{
        try{
          const apifeatures = new ApiFeatures(MessageGroup.find(), req.query ).pagination()
          const messageGroup = await apifeatures.query.sort('-createdAt')
          res.status(200).json({messageGroup})

        }catch(err){ return res.status(500).json({msg:err.message}) }
      },
    addProper:async(req,res)=>{
      try{
        const { proper } = req.body
        const resProper = new Proper({proper})
        await resProper.save()
        res.status(200).json({resProper})

      }catch(err){ return res.status(500).json({msg:err.message}) }
    },getProper:async(req,res)=>{

      try{
        
        const proper = await Proper.find()
        res.status(200).json({proper})

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