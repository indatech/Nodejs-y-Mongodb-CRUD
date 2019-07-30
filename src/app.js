const path= require('path');
const express= require('express');
const app= express();
const morgan= require('morgan');
const mongoose= require('mongoose');


//CONNECTING TO DB
mongoose.connect('mongodb://localhost/crud-mongodb')
.then(db => console.log('DB connected'))
.catch(err => console.log(err));


//IMPORTING ROUTES
const indexRoutes= require('./routes/index');


//SETTINGS
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));



//ROUTES
app.use('/', indexRoutes);





//STARTING THE SERVER
app.listen(app.get('port'), () => {
   console.log(`Server on Port ${app.get('port')}`);
});