import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/ForgotPasswordPage.css';
// import { authApi } from '../services/api';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Back-end entegrasyonu için:
    /*
    try {
      await authApi.forgotPassword(email);
      setMessage('Password reset link has been sent to your email!');
      setEmail('');
    } catch (err) {
      setError(err.response?.data?.message || "Password reset failed");
    } finally {
      setLoading(false);
    }
    */
    
    // Mock işlem
    setMessage('E-posta adresinize şifre sıfırlama talebi gönderildi! (Back-end entegre edildiğinde çalışacak)');
    setEmail('');
    setLoading(false);
  };

  return (
    <div className="forgot-password-container">
      <h2>Şifremi Unuttum</h2>
      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}
      
      <form onSubmit={handlePasswordReset}>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Gönderiliyor...' : 'Şifre Sıfırla'}
        </button>
      </form>
      
      <div className="back-to-login">
        <button onClick={() => navigate('/login')}>Giriş Sayfasına Dön</button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;