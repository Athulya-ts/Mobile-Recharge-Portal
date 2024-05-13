import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import './AdminPages.css';
import UserNavbar from '../UserNavbar';

const initialMessages = [
  { id: 1, text: 'Hello! How can I assist you today?', fromUser: false },
  { id: 2, text: '1. Recharge my mobile', fromUser: false },
  { id: 3, text: '2. Add data boosters', fromUser: false },
  { id: 4, text: '3. View my profile', fromUser: false },
  { id: 5, text: '4. Give feedback', fromUser: false },
];

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [chatMessages, setChatMessages] = useState(initialMessages);

  const handleUserInput = (e) => {
    setInput(e.target.value);
  };

  // const navigate = useNavigate();

  const handleUserMessage = () => {
    if (input.trim() !== '') {
      const newMessages = [...chatMessages, { id: chatMessages.length + 1, text: input, fromUser: true }];
      setChatMessages(newMessages);
      setInput('');

      // Simulate different responses based on user input
      setTimeout(() => {
        let botResponse;
        switch (input.trim()) {
          case '1':
            botResponse = { id: newMessages.length + 1, text: 'Sure, let\'s recharge your mobile.', fromUser: false };
            window.location.href = "/Components/UserPages/Plans"
            // navigate("/Components/UserPages/Plans");
            break;
          case '2':
            botResponse = { id: newMessages.length + 1, text: 'Sure, let\'s add data boosters', fromUser: false };
            window.location.href = "/Components/UserPages/AddOns"
            // navigate("/Components/UserPages/AddOns");
            break;
          case '3':
            botResponse = { id: newMessages.length + 1, text: 'Navigating to user profile...', fromUser: false };
            window.location.href = "/Components/UserPages/Profile"
            // navigate("/Components/UserPages/Profile");
            break;
          case '4':
            botResponse = { id: newMessages.length + 1, text: 'Navigating to feedback interface...', fromUser: false };
            window.location.href = "/Components/UserPages/Feedback"
            // navigate("/Components/UserPages/Feedback");
            break;
          default:
            botResponse = { id: newMessages.length + 1, text: 'I didn\'t understand that. Please choose a valid option.', fromUser: false };
        }
        setChatMessages([...newMessages, botResponse]);
      }, 500);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat window when new messages are added
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [chatMessages]);

  return (
    <>
    <UserNavbar/>
    <div className='chatbot-body'>
      <br/><br/>
    <center><h1 style = {{color:"grey"}}>CHATBOT</h1></center>
    <div className="chatbot-container">
      <div id="chat-window" className="chat-window">
        {chatMessages.map((message) => (
          <div key={message.id} className={`message ${message.fromUser ? 'user-message' : 'bot-message'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={handleUserInput}
          onKeyDown={(e) => e.key === 'Enter' && handleUserMessage()}
        />
        <button onClick={handleUserMessage}>Send</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Chatbot;
