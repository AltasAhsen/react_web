import React, { useEffect, useState } from 'react';
/////////////////backend entegrasyon

const fetchMockOrders = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 101, customer: 'Ali Veli', total: 249.99, status: 'Tamamlandı' },
        { id: 102, customer: 'Ayşe Yılmaz', total: 89.5, status: 'Hazırlanıyor' },
        { id: 103, customer: 'Mehmet Can', total: 123.75, status: 'Kargoda' },
      ]);
    }, 1000);
  });
};

const AdminOrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMockOrders().then(data => {
      setOrders(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Siparişler</h2>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr>
              <th className="border px-4 py-2">Sipariş ID</th>
              <th className="border px-4 py-2">Müşteri</th>
              <th className="border px-4 py-2">Toplam Tutar</th>
              <th className="border px-4 py-2">Durum</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.customer}</td>
                <td className="border px-4 py-2">{order.total} ₺</td>
                <td className="border px-4 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrderPage;
