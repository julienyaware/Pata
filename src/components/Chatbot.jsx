import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#1623CE',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#1623CE',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps=[
  {
    id: '1',
    message: 'Under which category does you issue fall?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Plumbing', trigger: '3' },
      { value: 2, label: 'Flooring', trigger: '4' },
      { value: 3, label: 'Painting', trigger: '5' },
    ],
  },
  {
    id: '3',
    options: [
      { value: 1, label: 'Leaking tap', trigger: '5' },
      { value: 2, label: 'Blockage', trigger: '7' },
      { value: 3, label: 'No water', trigger: '8' },
    ],
  },
  {
    id: '4',
    message: 'Wrong answer, try again.',
    trigger: '2',
  },
  {
    id: '5',
    message: '1. Turn off water 2. Remove tap handle 3.replace washer O-ring. IF its too complex view available service providers',
    end: true,
  },
  {
    id: '6',
    message: 'Awesome! You are a telepath!',
    end: true,
  },
  {
    id: '7',
    message: 'Awesome! You are a telepath!',
    end: true,
  },
  {
    id: '8',
    message: 'Awesome! You are a telepath!',
    end: true,
  },
]

const Chatbot = () => {
  return (
    <div >
      <div>
      <ThemeProvider theme={theme}>
    <ChatBot
  steps={steps}
/>
</ThemeProvider>
</div>
</div>
  );
};

export default Chatbot;