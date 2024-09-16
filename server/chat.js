const axios = require('axios');  

async function chatPost() {  
    const apiKey = '';  
    const url = 'https://';  

    const requestBody = {  
        message: "What food should I eat?"  
    };  

    try {  
        const response = await axios.post(url, requestBody, {  
            headers: {  
                'Authorization': `Bearer ${apiKey}`,  
                'Content-Type': 'application/json'  
            }  
        });  
        console.log(response.data);  
    } catch (error) {  
        console.error('Error:', error.response ? error.response.data : error.message);  
    }  
}  

chatPost();