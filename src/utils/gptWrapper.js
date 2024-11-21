const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // Ensure your API key is stored in .env

// Function to generate outfit data from OpenAI's GPT model
export const fetchOutfitData = async (prompt) => {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4", // Specify the model you want to use
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                max_tokens: 300, // Adjust based on your needs
                temperature: 0.7 // Adjust for creativity
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error Response:", errorData);
            throw new Error('Failed to fetch outfit data from OpenAI');
        }

        const data = await response.json();
        const message = data.choices[0].message.content; // Extract the message content

        // Split the message into sections based on expected format
        const sections = message.split('\n').filter(line => line.trim() !== '');
        const title = sections[0] || "Generated Outfit"; // First line as title
        const description = sections.slice(1).join('\n'); // Remaining lines as description

        // Create a DALL-E prompt based on the description
        const dallePrompt = `Create an image of ${description}`;

        return { title, description, dallePrompt };
    } catch (error) {
        console.error("Error in fetchOutfitData:", error);
        throw new Error('Failed to generate outfit data');
    }
};

// Function to generate an image using OpenAI's DALL-E model
export const generateImage = async (prompt) => {
    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "dall-e-3", // Ensure this model is correct
                prompt: prompt,
                n: 1,
                size: "1024x1024",
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error Response:", errorData);
            throw new Error('DALL-E API call failed');
        }

        const data = await response.json();
        return data.data[0].url; // Return the URL of the generated image
    } catch (error) {
        console.error("Error in generateImage:", error);
        throw new Error('Failed to generate image');
    }
};

// New function to parse the description
export const parseDescription = (description) => {
    const components = {
        title: '',
        top: '',
        shortTopDescription: '',
        bottom: '',
        shortBottomDescription: '',
        shoes: '',
        shortShoesDescription: '',
        accessory: '',
        shortAccessoryDescription: '',
        dallePrompt: ''
    };

    const lines = description.split('\n');

    lines.forEach(line => {
        if (line.trim() === '') return;
        
        const [key, ...valueParts] = line.split(':');
        const value = valueParts.join(':').trim();
        
        switch (key.trim().toLowerCase()) {
            case 'title':
                components.title = value;
                break;
            case 'top':
                components.top = value;
                break;
            case 'short top description':
                components.shortTopDescription = value;
                break;
            case 'bottom':
                components.bottom = value;
                break;
            case 'short bottom description':
                components.shortBottomDescription = value;
                break;
            case 'shoes':
                components.shoes = value;
                break;
            case 'short shoes description':
                components.shortShoesDescription = value;
                break;
            case 'accessory':
                components.accessory = value;
                break;
            case 'short accessory description':
                components.shortAccessoryDescription = value;
                break;
            case 'dall-e prompt':
            case 'image description':  // Added to handle both formats
                components.dallePrompt = value;
                break;
            default:
                // Handle any unmatched keys
                console.log(`Unhandled key in description: ${key}`);
                break;
        }
    });

    return components;
};