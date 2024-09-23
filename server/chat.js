const express = require("express");
const { CohereClient } = require("cohere-ai");
const cors = require("cors");

const cohere = new CohereClient({
  token: "Z7ZNvsIBPGsntSEDJTpJfSNrGaDJC7B14W2HZLoe",
});

const app = express();
app.use(cors());

app.get("/meals", async (req, res) => {
    const response = await cohere.chat({
      message: "make by dictionary not string a json list for meals that containes(name,country,calories,Ingredients,recipe)withot writing 'Here's a JSON list of meals with the specified fields:' ",
    });
    console.log("Response from Cohere:", response);
    res.json(response.text); 
});

app.listen(3001, () => console.log("Server started on port 3001"));