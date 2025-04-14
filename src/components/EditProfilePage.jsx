import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { userApi } from '../services/api';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Back-end entegrasyonu için:
    /*
    const fetchProfile = async () => {
      try {
        const response = await userApi.getProfile();
        setName(response.data.name || '');
        setEmail(response.data.email || '');
      } catch (err) {
        console.error("Profile fetch error:", err);
      }
    };
    fetchProfile();
    */
    
    // Mock data kullanımı (geçici çözüm)
    const storedUser = JSON.parse(localStorage.getItem("userProfile"));
    if (storedUser) {
      setName(storedUser.name || '');
      setEmail(storedUser.email || '');
    }
  }, []);

  const handleSave = async () => {
    setLoading(true);
    setError('');
    
    // Back-end entegrasyonu için:
    /*
    try {
      await userApi.updateProfile({ name, email });
      navigate('/profile');
    } catch (err) {
      setError(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
    */
    
    // Mock data kullanımı (geçici çözüm)
    const updatedProfile = { name, email, password: 'şifre_saklandı' };
    localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
    navigate('/profile');
    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <h2>Profili Düzenle</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group mb-3">
        <label>Ad</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label>E-posta</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button 
        className="btn btn-success" 
        onClick={handleSave}
        disabled={loading}
      >
        {loading ? 'Kaydediliyor...' : 'Kaydet'}
      </button>
    </div>
  );
};

export default EditProfilePage;