import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/RegisterPage.css';
// import { authApi } from '../services/api';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    birthDate: '',
    gender: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Şifreler eşleşmiyor.");
      setLoading(false);
      return;
    }

    // Back-end entegrasyonu için:
    /*
    try {
      const userData = { ...formData };
      delete userData.confirmPassword;
      
      await authApi.register(userData);
      alert("Kayıt başarılı! Giriş yapabilirsiniz.");
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
    */
    
    // Mock data kullanımı (geçici çözüm)
    const userProfile = { ...formData };
    delete userProfile.confirmPassword;
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    alert("Kayıt başarılı!");
    navigate('/login');
    setLoading(false);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="register-container">
      <h2>Kayıt Ol</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="register-form" onSubmit={handleSubmit}>
        <input name="firstName" placeholder="Ad" onChange={handleChange} required />
        <input name="lastName" placeholder="Soyad" onChange={handleChange} required />
        <input name="username" placeholder="Kullanıcı Adı" onChange={handleChange} required />
        <input name="email" placeholder="E-posta" type="email" onChange={handleChange} required />
        <input 
          name="password" 
          placeholder="Şifre" 
          type="password" 
          minLength={6} 
          onChange={handleChange} 
          required 
        />
        <input 
          name="confirmPassword" 
          placeholder="Şifre (Tekrar)" 
          type="password" 
          minLength={6} 
          onChange={handleChange} 
          required 
        />
        <input 
          name="phone" 
          placeholder="Telefon (11 Haneli)" 
          type="tel" 
          pattern="^[0-9]{11}$" 
          onChange={handleChange} 
        />
        <label>Doğum Tarihi:</label>
        <input 
          name="birthDate" 
          type="date" 
          max={today} 
          onChange={handleChange} 
        />
        <select name="gender" onChange={handleChange}>
          <option value="">Cinsiyet</option>
          <option value="Erkek">Erkek</option>
          <option value="Kadın">Kadın</option>
          <option value="Diğer">Diğer</option>
        </select>
        <textarea name="address" placeholder="Adres" rows="3" onChange={handleChange}></textarea>
        <button type="submit" disabled={loading}>
          {loading ? 'Kayıt Olunuyor...' : 'Kayıt Ol'}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;