let mongoose = require("mongoose");
let express = require("express");
let cors = require("cors");
let app = express();
const user = require("./model/marry");

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1/Matrimony");
mongoose.connection
.once("open", () => {
    console.log("Connected");
})
.on("error", () => {
    console.log("error");
});
app.post("/register", (req, res) => {
  console.log(req.body);
  console.log("success");
  user
    .create(req.body)
    .then(() => {
      console.log("Success");
      res.json(req.body);
    })
    .catch(() => {
      console.log("error");
    });
  // console.log("hiii")
});
app.post("/login",(req,res)=>{
  user.findOne({name:req.body.name})
  .then((userdata)=>{
      if(userdata){
          if(req.body.pass === userdata.pass){
              res.json({isThere:"success",userdata})
              
          }else{
              res.json("password is incorrect")
          }
      }else{res.json("user not registered")}
  })
  .catch(()=>{
      console.log("error3");
  })
})
app.get("/edit/:id",(req,res)=>{
  user.findOne({_id:req.params.id})
  .then((user)=>{res.json(user)})
})
app.put("/edit/:id",(req,res)=>{
  console.log(req.body);
  user.updateOne({_id:req.params.id},{$set:{name:req.body.name,age:req.body.age,gen:req.body.gen,rel:req.body.rel,pro:req.body.pro,loc:req.body.loc,inte:req.body.inte,abo:req.body.abo,pass:req.body.pass}})
  .then(()=>{
    res.json("successfully updated")
  }
  )
})
app.post("/edit/:id",(req,res)=>{
  console.log(req.body)

})
app.get("/home/:abc",(req,res)=>{
  user.findOne({_id:req.params.abc})
  .then((userData)=>{
    res.json(userData)
  })
  // console.log(req.params.abc)
})
app.delete("/home/:id",(req,res)=>{
  user.deleteOne({_id:req.params.id})
  .then(()=>{res.json("delete")})
})
app.get("/main",(req,res)=>{
  user.find()
  .then((bdata)=>{
    res.json(bdata._id)
  })
})
app.get("/profile",(req,res)=>{
  user.findOne({_id:req.params.id})
  .then((fdata)=>{
    if(fdata){
    const opp=fdata.gen==="male"?"female":"male";
    user.find({gen:opp,_id:{$ne:fdata._id}})
    .then((filtered)=>{
      res.json(filtered)
    })
    .catch(()=>{
      console.log("error");
    })
   }
    else{console.log("user not found");}
    
  })
  .catch(()=>{console.log(error2);})
})
app.get("/main",(req,res)=>{
  user.find()
  .then((zdata)=>{
    res.json(zdata)
    console.log(zdata);
  })
})
app.listen(5000, () => {
  console.log("server running at 5000");
});