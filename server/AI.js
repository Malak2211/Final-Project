const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: "Xr0JPausbLhiYIPPejNmGvjG1OQK3dAz24uaIID7",
});


const generate_ai_res = async (req, res) => {
  console.log(req.body);
  const {message} = req.body;
  
    const response = await cohere.chat({
        message: message,
    });
    console.log("Response from Cohere:", response);
    res.json(response.text); 
};

module.exports = generate_ai_res;
