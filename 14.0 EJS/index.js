import express from "express";


const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const d = new Date();
    let currday = d.getDay();

    let day = "a weekday";
    let adv = "It's time to work hard!";
    if(currday === 0 || currday === 6) {
           day = "the weekend";
           adv = "It's time to have some fun!";  
    }    
    res.render("index.ejs", {
    dayType: day,
    advice: adv,
    });
});  

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});