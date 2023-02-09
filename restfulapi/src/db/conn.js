const mongoose = require("mongoose");

// mongoose.set('useFindAndModify', false);
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/students-api", { // useCreatendex: true, useFindAndModify: false, 
   useNewUrlParser: true, 
   useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
});

// .then(() => {
//     console.log("connection is successful");
//     }).catch((e) =>{
//     console.log(`No connection ${e}`); 
// })