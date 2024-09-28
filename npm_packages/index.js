var figlet = require("figlet");
var colors = require('colors');


figlet("ANSH AGRAWAL", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
});





