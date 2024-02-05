const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const Dates = require('./model/Dates')
const sequelize = require('./util/database');
const attendanceRouter= require('./routes/Attendance')

const app = express();
app.use(cors());
app.use(bodyParser.json({extended: false}));

app.use(attendanceRouter)



app.post("/get-date",(req, res, next) => {
    let dateCheck=req.body.sendDate
    console.log(dateCheck)
    Dates.findAll({
        where: {
          date: dateCheck
        }
      })
    .then((result)=>{
        if(result.length===0){
            console.log("element not found")
        }else{
           res.json(result);
        }
    })
})





sequelize.sync({force:false})
.then((result)=>{
    // console.log(result)
    app.listen(3000);
})
.catch((error)=>{
    console.log(error)
})
