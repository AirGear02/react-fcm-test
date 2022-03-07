import './App.css';
import { requestForToken} from './firebaseInit';
import { useState } from 'react';
import NotificationsContainer from './Components/Notifications/NotificationsContainer';
import FcmTokenLabel from './Components/FcmTokenLabel';

function App() {
  const [token ,setToken] = useState('');
  //receiving token
  requestForToken(setToken);

  return (
    <div className="App">
      <FcmTokenLabel token={token} />
      <NotificationsContainer />
    </div>
  );
}

export default App;
