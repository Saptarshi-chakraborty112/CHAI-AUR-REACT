import React, { useState } from 'react';
import Popup from './Popup';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = () => {
    // Simulate authentication (replace with actual authentication logic)
    if (username === 'demo' && password === 'password') {
        console.log('Authentication successful!');
        setError('');
        setShowPopup(true);
      } else {
        console.log('Authentication failed!');
        setError('Invalid username or password');
        setShowPopup(true);
      }
  };

  const closePopup =() =>{
    setShowPopup(false);
  };

  return (
    <div className="login-form">
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
      {error && <p className='error-message'>{error}</p>}
      {showPopup && <Popup message={error || 'Login Successful!'} onClose={closePopup} />}
    </div>
  );
}

export default LoginForm;
