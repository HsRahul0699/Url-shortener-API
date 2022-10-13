const mongoose=require('mongoose')
const Schema=mongoose.Schema
const validator=require('validator')
const sh=require('shorthash')

const urlSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    originalUrl:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return validator.isURL(value)
            },
            message:function(){
                return 'Enter a Valid URL'
            }
        }
    },
    hashedUrl:{
        type:String
        
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

urlSchema.pre('save',function(next){
    console.log(this)
    const oldURL=this.originalUrl
    this.hashedUrl=sh.unique(oldURL)
    next()
})
const urlModel=mongoose.model('urlModel',urlSchema)


module.exports=urlModel