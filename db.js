const dotenv = require('dotenv');
dotenv.config();
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = process.env.url;
mongoose.connect(url);
var per_info = new mongoose.Schema({
    gid: String,
    name: String,
    email: String,
    mobile : String,
    college : String,
    year : String,
    course : String,
    branch : String,
    id_proof : String,
    id_no :{ type: String, unique : true},
    event: {
        type: {String:String}
    },
    registered_by : String,
    txnid :{ type: String, unique : true},
    txndate : String,
    no_events : String
});


var User = mongoose.model("User", per_info);
module.exports = User;



