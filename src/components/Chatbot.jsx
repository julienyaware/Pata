import React, { useState } from 'react';
import OpenAI from 'openai';
import config from '../config';
import axios from 'axios';



const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);

//   const openai = new OpenAI(config.REACT_APP_OPENAI_API_KEY);
//   console.log(openai)

//   const sendMessage = async () => {
//     if (!inputText) return;

//     setLoading(true);
//     setMessages([...messages, { text: inputText, sender: 'user' }]);
//     setInputText('');

//     try {
//       const response = await openai.complete({
//         engine: 'davinci',
//         prompt: `The following is a conversation with an AI assistant:\n\nUser: ${inputText}\nAI:`,
//         maxTokens: 150,
//       });
//       const aiMessage = response.data.choices[0].text.trim();
//       setMessages([...messages, { text: aiMessage, sender: 'bot' }]);
//     } catch (error) {
//       console.error('Error:', error);
//     }

//     setLoading(false);
//   };

//   const chatWithGPT3 = async (userInput) => {
//     const apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
//     const headers = {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer sk-proj-JgOP6KW3yC5RZQlyUIqzT3BlbkFJ8GNv1hiYVqdIypR1D7S0`
//     };

//     const data = {
//       prompt: userInput,
//       max_tokens: 150
//     };
// try {
//       const response = await axios.post(apiEndpoint, data, { headers });
//       return response.data.choices[0].text.trim();
//     } catch (error) {
//       console.error('Error communicating with the API:', error.message);
//       return '';
//     }
//   };

  //console.log(chatWithGPT3('whats your name?'))
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
    //   sendMessage();
    }
  };

  return (
    <div className="flex bg-white flex-col h-screen">
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 text-${message.sender === 'user' ? 'right' : 'left'}`}>
            <div className={`p-2 max-w-md rounded-lg ${message.sender === 'user' ? 'bg-blue-400 text-white self-end' : 'bg-gray-200 self-start'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 border-t">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-grow p-2 mr-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
        //   onClick={sendMessage}
          disabled={!inputText || loading}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
