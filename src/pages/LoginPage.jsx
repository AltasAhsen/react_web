import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Backend API'n varsa buraya POST isteği ekle
    // örnek:
    // await axios.post('/api/login', { email, password });

    alert('Login başarılı (örnek)');
    navigate('/');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginPage;
