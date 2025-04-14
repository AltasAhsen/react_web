import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/LoginPage.css';
// import { authApi } from '../services/api';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Back-end entegrasyonu için:
    /*
    try {
      const response = await authApi.login({ email, password });
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("userProfile", JSON.stringify(response.data.user));
      setIsLoggedIn(true);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
    */
    
    // Mock data kullanımı (geçici çözüm)
    const storedUserProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (storedUserProfile) {
      if (storedUserProfile.email === email && storedUserProfile.password === password) {
        setIsLoggedIn(true);
        setTimeout(() => navigate('/'), 0);
      } else {
        setError("E-posta veya şifre hatalı.");
      }
    } else {
      setError("Kullanıcı bulunamadı.");
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>Giriş Yap</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
        </button>
      </form>
      <div className="forgot-password-link">
        <a href="/forgot-password">Şifremi Unuttum</a>
      </div>
    </div>
  );
};

export default LoginPage;