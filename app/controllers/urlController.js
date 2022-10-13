const Url=require('../models/urlModel')

const urlController={}

urlController.list=(req,res)=>{
    Url.find()
    .then((urls)=>{
        res.json(urls)
    })
    .catch((err)=>{
        res.json(err.message)
    })
} 

urlController.create=(req,res)=>{
    const body=req.body
    const url=new Url(body)
    url.save()
    .then((url)=>{
        res.json(url)
    })
    .catch((err)=>{
        res.json(err.message)
    })

}

urlController.show=(req,res)=>{
    Url.findById(req.params.id)
    .then((url)=>{
        res.json(url)
    })
    .catch((err)=>{
        res.json(err.message)
    })
}

urlController.remove=(req,res)=>{
    Url.findByIdAndDelete(req.params.id)
    .then((url)=>{
        res.json(url)
    })
    .catch((err)=>{
        res.json(err.message)
    })
}

urlController.update=(req,res)=>{
    Url.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    .then((url)=>{
        res.json(url)
    })
    .catch((err)=>{
        res.json(err.message)
    })
}
module.exports=urlController