const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/booking')
const cors = require('cors');


const bookingRouter = require('./routes/booking')

const app = express();
app.use(cors())
app.use(bodyParser.json({extended: false}));


app.use('/user',bookingRouter);

sequelize.sync()
.then((result)=>{
    console.log(result);
    app.listen(3000);
})
.catch((err) => {
    console.log(err);
})
