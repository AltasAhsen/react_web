import React, { useEffect, useState } from 'react';
/////////////////backend entegrasyon
const fetchMockUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Ali Veli', email: 'ali@example.com', role: 'user' },
        { id: 2, name: 'Ayşe Yılmaz', email: 'ayse@example.com', role: 'admin' },
        { id: 3, name: 'Mehmet Can', email: 'mehmet@example.com', role: 'user' },
      ]);
    }, 1000); // 1 saniye gecikme
  });
};

const AdminUserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMockUsers().then(data => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Kullanıcılar</h2>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Ad</th>
              <th className="border px-4 py-2">E-posta</th>
              <th className="border px-4 py-2">Rol</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminUserPage;
