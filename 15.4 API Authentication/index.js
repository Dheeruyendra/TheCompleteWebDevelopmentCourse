import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "success";
const yourPassword = "angela";
const yourAPIKey = "c33a4a3d-e150-47e8-a555-990eb139e897";
const yourBearerToken = "6f3b57c6-0011-4242-96a8-810065a61706";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: error.message });
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
  try{
    const result = await axios.get(API_URL + "/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
     }catch(error){
       res.render("index.ejs", { content: error.message });
     }

});

app.get("/apiKey", async(req, res) => {

  try{
    const result = await axios.get(API_URL + "/filter", {
      params: {
        apiKey: yourAPIKey,
        ScreenOrientation: 5,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch(error){
    res.render("index.ejs", { content: error.message });
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try{
    const result = await axios.get(API_URL + "/secrets/42", {
      headers: { 
        Authorization: `Bearer ${yourBearerToken}` 
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch(error){
    res.render("index.ejs", { content: error.message });
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
