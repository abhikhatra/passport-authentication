let mongoose = require("mongoose");

mongoose.connect(process.env.url).then(() => {
    console.log("succesfuly connected to Database..!");
}).catch(e => {
    console.log(e);
})

