import OpenAI from "openai";  
import dotenv from "dotenv";  

dotenv.config();  

const openai = new OpenAI({  
    apiKey: process.env.OPENAI_API_KEY,  
});  

async function getCompletion() {  
    const completion = await openai.chat.completions.create({  
        model: "gpt-4o",  // Check if the model name is correct  
        messages: [  
            {"role": "user", "content": "write a haiku about ai"}  
        ]  
    });  
    console.log(completion);  
}  

getCompletion().catch(console.error);
// hi