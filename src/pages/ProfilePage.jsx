import React from 'react';
import '../style/ProfilePage.css';

const ProfilePage = () => {
  const user = {
    firstName: 'Sara',
    lastName: 'Kara',
    username: 'sarakira',
    email: 'sara.kara@email.com',
    phone: '+90 555 123 4567',
    birthDate: '1995-05-10',
    gender: 'Kadın',
    address: 'İstanbul, Türkiye',
  };

  return (
    <div className="profile-container">
      <h2>Profilim</h2>
      <div className="profile-card">
        <div className="profile-info">
          <h3>{user.firstName} {user.lastName}</h3>
          <p><strong>Kullanıcı Adı:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Telefon:</strong> {user.phone}</p>
          <p><strong>Doğum Tarihi:</strong> {user.birthDate}</p>
          <p><strong>Cinsiyet:</strong> {user.gender}</p>
          <p><strong>Adres:</strong> {user.address}</p>
        </div>
        <button className="edit-btn">Profili Düzenle</button>
      </div>
    </div>
  );
};

export default ProfilePage;
