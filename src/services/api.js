import axios from 'axios';

// Back-end URL'leri (yorum satırında alternatifler)
const springBootBaseURL = 'http://localhost:8080/api'; // Spring Boot
// const aspNetBaseURL = 'http://localhost:5000/api'; // ASP.NET Core

const api = axios.create({
  baseURL: springBootBaseURL,
  // baseURL: aspNetBaseURL, // ASP.NET Core kullanılacaksa bu satırı aktif edin
});

// Request interceptor (token eklemek için)
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor (hata yönetimi)
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Token süresi dolmuşsa veya geçersizse
      localStorage.removeItem('authToken');
      localStorage.removeItem('userProfile');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const authApi = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
};

export const productApi = {
  getAll: () => api.get('/products'),
  getById: (id) => api.get(`/products/${id}`),
};

export const userApi = {
  getProfile: () => api.get('/users/me'),
  updateProfile: (data) => api.put('/users/me', data),
};

export const cartApi = {
  getCart: () => api.get('/cart'),
  addToCart: (item) => api.post('/cart/add', item),
  updateItem: (id, quantity) => api.put(`/cart/update/${id}`, { quantity }),
  removeItem: (id) => api.delete(`/cart/remove/${id}`),
};

// Back-end değiştirme fonksiyonu (isteğe bağlı)
export const setBackend = (backendType) => {
  if (backendType === 'spring') {
    api.defaults.baseURL = springBootBaseURL;
  } else if (backendType === 'aspnet') {
    //api.defaults.baseURL = aspNetBaseURL;
  }
};

  // api.js'ye bu yeni servisleri ekleyin
  export const orderApi = {
    createOrder: (orderData) => api.post('/orders', orderData),
    getOrder: (orderId) => api.get(`/orders/${orderId}`),
    getOrderHistory: () => api.get('/orders/history'),
  };