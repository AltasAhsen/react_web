import React, { useEffect, useState } from 'react';
import '../style/ProfilePage.css';
// import { userApi } from '../services/api';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    birthDate: '',
    gender: '',
    address: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Back-end entegrasyonu için:
    /*
    const fetchProfile = async () => {
      try {
        const response = await userApi.getProfile();
        setUser(response.data);
        setFormData(response.data);
      } catch (err) {
        console.error("Profile fetch error:", err);
      }
    };
    fetchProfile();
    */
    
    // Mock data kullanımı (geçici çözüm)
    const storedUser = JSON.parse(localStorage.getItem('userProfile'));
    setUser(storedUser);
    if (storedUser) {
      setFormData(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (formData.phone && !/^[0-9]{11}$/.test(formData.phone)) {
      setError('Telefon numarası 11 haneli olmalı.');
      setLoading(false);
      return;
    }

    // Back-end entegrasyonu için:
    /*
    try {
      const response = await userApi.updateProfile(formData);
      setUser(response.data);
      setFormData(response.data);
      setError('');
      alert('Profil güncellendi!');
      setIsEditing(false);
    } catch (err) {
      setError(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
    */
    
    // Mock data kullanımı (geçici çözüm)
    localStorage.setItem('userProfile', JSON.stringify(formData));
    setUser(formData);
    setError('');
    alert('Profil güncellendi!');
    setIsEditing(false);
    setLoading(false);
  };

  if (!user) return <p>Profil bilgisi yükleniyor...</p>;

  return (
    <div className="profile-container">
      <h2>Profilim</h2>
      <div className="profile-card">
        {!isEditing ? (
          <>
            <div className="profile-info">
              <h3>{user.firstName} {user.lastName}</h3>
              <p><strong>Kullanıcı Adı:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Telefon:</strong> {user.phone}</p>
              <p><strong>Doğum Tarihi:</strong> {user.birthDate}</p>
              <p><strong>Cinsiyet:</strong> {user.gender}</p>
              <p><strong>Adres:</strong> {user.address}</p>
            </div>
            <button 
              className="edit-btn" 
              onClick={() => setIsEditing(true)}
            >
              Profili Düzenle
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Ad"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Soyad"
              required
            />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Kullanıcı Adı"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-posta"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefon"
            />
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              placeholder="Doğum Tarihi"
            />
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Cinsiyet"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Adres"
            />
            <button 
              type="submit" 
              disabled={loading}
            >
              {loading ? 'Güncelleniyor...' : 'Profili Güncelle'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;