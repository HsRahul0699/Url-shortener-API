const mongoose=require('mongoose')

const configureDB=()=>{
mongoose.connect('mongodb://localhost:27017/url-shortener')
.then(()=>{
    console.log('successfully connected to DB')
})
.catch((err)=>{
    console.log(err.message)
})
}
module.exports = configureDB

