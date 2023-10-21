 const fs = require("fs");

 fs.writeFile("hello.txt", "Hello from Node!", function(err) {
   if (err) {
     console.log(err);
   } else {
     console.log("File written!");
   }
 });

 fs.readFile("hello.txt", "utf8", function(err, data) {
   if (err) {
     console.log(err);
   } else {
     console.log(data);
   }
 });

