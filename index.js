const express = require('express')
const app = express()
const port = 5000
const bodyPareser = require('body-parser'); //req.body로 클라이언트에 보내는 정보를 받아준다
const{User} = require("./models/User");

const config = require('./config/key');

// application/x-ww-form-urlencoded
app.use(bodyPareser.urlencoded({extended: true}));

// aplication/json
app.use(bodyPareser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    /*useNewUrlParser: true, useUnifiendTopology: true, useCreateIndex: true, useFindAndModify: false*/
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err=>console.log(err))

app.get('/', (req, res) => { res.send('Hello World!! 안녕!') })

app.post('/register',(req,res)=>{
  // 회원가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success:true
    })
  })
})

app.listen(port, () => { console.log(`Example app listening on port ${port}`) })