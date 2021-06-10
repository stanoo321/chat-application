import { ChatEngine } from "react-chat-engine";

import Loginform from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import "./App.css";

const App = () => {
    if(!localStorage.getItem('username')) return <Loginform />
  return (
    <ChatEngine
      height="100vh"
      projectID="2543944a-d212-440d-951c-a40cf7cebd2e"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
