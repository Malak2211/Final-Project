const express = require("express");
const { CohereClient } = require("cohere-ai");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json())

const cohere = new CohereClient({
  token: "Xr0JPausbLhiYIPPejNmGvjG1OQK3dAz24uaIID7",
});


app.post("/generate", async (req, res) => {
  console.log(req.body);
  const {message} = req.body;
  
    const response = await cohere.chat({
        message: message,
    });
    console.log("Response from Cohere:", response);
    res.json(response.text); 
    }
);

app.listen(8000, () => console.log("Server started on port 8000"));
