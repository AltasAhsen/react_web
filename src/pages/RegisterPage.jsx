import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/RegisterPage.css'; // Klasör yolu doğru şekilde güncellenmiş

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

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Boş alan kontrolü
    for (const key in formData) {
      if (formData[key].trim() === '') {
        setError("Lütfen tüm alanları doldurunuz.");
        return;
      }
    }

    // Şifre doğrulama
    if (formData.password !== formData.confirmPassword) {
      setError("Şifreler eşleşmiyor.");
      return;
    }

    // E-posta kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Geçerli bir e-posta adresi giriniz.");
      return;
    }

    // Hataları temizle
    setError('');

    // Kullanıcı verilerini kaydet
    const userProfile = { ...formData };
    delete userProfile.confirmPassword; // Gereksiz veriyi sil

    localStorage.setItem("userProfile", JSON.stringify(userProfile));

    alert("Kayıt başarılı!");
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2>Kayıt Ol</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="register-form" onSubmit={handleSubmit}>
        <input name="firstName" placeholder="Ad" onChange={handleChange} />
        <input name="lastName" placeholder="Soyad" onChange={handleChange} />
        <input name="username" placeholder="Kullanıcı Adı" onChange={handleChange} />
        <input name="email" placeholder="E-posta" type="email" onChange={handleChange} />
        <input name="password" placeholder="Şifre" type="password" onChange={handleChange} />
        <input name="confirmPassword" placeholder="Şifre (Tekrar)" type="password" onChange={handleChange} />
        <input name="phone" placeholder="Telefon" type="tel" onChange={handleChange} />
        <label>Doğum Tarihi:</label>
        <input name="birthDate" type="date" onChange={handleChange} />
        <select name="gender" onChange={handleChange}>
          <option value="">Cinsiyet</option>
          <option value="Erkek">Erkek</option>
          <option value="Kadın">Kadın</option>
          <option value="Diğer">Diğer</option>
        </select>
        <textarea name="address" placeholder="Adres" rows="3" onChange={handleChange}></textarea>
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default RegisterPage;
