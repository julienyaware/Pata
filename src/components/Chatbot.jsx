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
    message: 'Hello! We are glad to help ,Under which category does you issue fall?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Plumbing', trigger: '3' },
      { value: 2, label: 'Flooring', trigger: '4' },
      { value: 3, label: 'Electricity', trigger: '6' },
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
    message: 'Identify Problem: Determine the specific issue with the flooring (e.g., damage, unevenness).Assess Damage: Evaluate the extent of the damage or problem.Take Action: Depending on the issue, repair or replace the affected flooring as needed.If its too complex view our service providers',
    trigger: '2',
  },
  {
    id: '5',
    message: '1. Turn off water 2. Remove tap handle 3.replace washer O-ring. If its too complex view available service providers',
    end: true,
  },
  {
    id: '6',
    message: 'Please view the electricians available! We highly discourage fixing such issues by yourself as it is dangerous',
    end: true,
  },
  {
    id: '7',
    message: '1.Inspect Faucet.Check for visible blockages or debris in the faucet.2.Clear Blockage.Use a plunger or pipe cleaner to remove any obstructions.3.Check Water Flow.Test water flow to ensure the issue is resolved.If its too complex view service provider',
    end: true,
  },
  {
    id: '8',
    message: 'Check Supply: Ensure the water supply valve is open. Inspect Pipes: Look for leaks or blockages in the plumbing.Contact Professional: If issues persist, consult a plumber for assistance.If it ends up beiing to complex view available service providers',
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