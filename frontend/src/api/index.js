import axios from 'axios';

// API 配置 (使用 Vite 代理，无需指定完整 URL)
const API_BASE_URL = '';

// 创建 axios 实例
export const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器 - 添加 token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器 - 统一处理响应
api.interceptors.response.use(
    (response) => {
        const { data } = response;
        // 如果后端返回的是标准格式 { code, data, message }
        if (data.code === 200) {
            return data; // 返回整个 data 对象，包含 data.data
        } else {
            throw new Error(data.message || '请求失败');
        }
    },
    (error) => {
        console.error('API Error:', error);
        if (error.response?.status === 401) {
            // Token 过期或未授权
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        throw error;
    }
);

// 通用请求方法（保留兼容性）
async function request(url, options = {}) {
    const token = localStorage.getItem('token');

    const config = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        },
    };

    try {
        const response = await fetch(`${API_BASE_URL}${url}`, config);
        const data = await response.json();

        if (data.code === 200) {
            return data.data;
        } else {
            throw new Error(data.message || '请求失败');
        }
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// 验证码 API
export const captchaApi = {
    getImage: () => request('/api/v1/captcha/image'),
};

// 邮箱 API
export const emailApi = {
    sendCode: (email, type = 'register') =>
        request('/api/v1/email/send', {
            method: 'POST',
            body: JSON.stringify({ email, type }),
        }),
};

// 用户 API
export const userApi = {
    login: (loginData) =>
        request('/api/v1/user/login', {
            method: 'POST',
            body: JSON.stringify(loginData),
        }),

    register: (registerData) =>
        request('/api/v1/user/register', {
            method: 'POST',
            body: JSON.stringify(registerData),
        }),

    resetPassword: (resetData) =>
        request('/api/v1/user/reset-password', {
            method: 'POST',
            body: JSON.stringify(resetData),
        }),

    getInfo: () => request('/api/v1/user/info'),
};

// 商品 API
export const productApi = {
    getList: (params = {}) => {
        const query = new URLSearchParams({
            page: params.page || 1,
            size: params.size || 10,
            ...(params.keyword && { keyword: params.keyword }),
            ...(params.categoryId && { categoryId: params.categoryId }),
        }).toString();
        return request(`/api/v1/product/list?${query}`);
    },

    getDetail: (id) => request(`/api/v1/product/${id}`),
};

// 分类 API
export const categoryApi = {
    getList: () => request('/api/v1/category/list'),
};

// 供应商 API
export const supplierApi = {
    getList: (page = 1, size = 10) =>
        request(`/api/v1/supplier/list?page=${page}&size=${size}`),

    getDetail: (id) => request(`/api/v1/supplier/${id}`),
};

// 内容/发现 API
export const contentApi = {
    getList: (params = {}) => {
        const query = new URLSearchParams({
            page: params.page || 1,
            size: params.size || 10,
            ...(params.type && { type: params.type }),
            ...(params.category && { category: params.category }),
        }).toString();
        return request(`/api/v1/content/list?${query}`);
    },

    getDetail: (id) => request(`/api/v1/content/${id}`),
};

// 购物车 API
export const cartApi = {
    getCart: () => request('/api/v1/cart'),

    addToCart: (productId, quantity = 1) =>
        request(`/api/v1/cart/add?productId=${productId}&quantity=${quantity}`, {
            method: 'POST',
        }),

    updateQuantity: (productId, quantity) =>
        request(`/api/v1/cart/update?productId=${productId}&quantity=${quantity}`, {
            method: 'PUT',
        }),

    removeFromCart: (productId) =>
        request(`/api/v1/cart/remove/${productId}`, {
            method: 'DELETE',
        }),

    clearCart: () =>
        request('/api/v1/cart/clear', {
            method: 'DELETE',
        }),
};

// 订单 API
export const orderApi = {
    create: (orderData) =>
        request('/api/v1/order/create', {
            method: 'POST',
            body: JSON.stringify(orderData),
        }),

    getList: (params = {}) => {
        const query = new URLSearchParams({
            page: params.page || 1,
            size: params.size || 10,
            ...(params.status !== undefined && { status: params.status }),
        }).toString();
        return request(`/api/v1/order/list?${query}`);
    },

    getDetail: (orderId) => request(`/api/v1/order/${orderId}`),

    pay: (orderId) =>
        request(`/api/v1/order/pay/${orderId}`, {
            method: 'POST',
        }),

    cancel: (orderId) =>
        request(`/api/v1/order/cancel/${orderId}`, {
            method: 'POST',
        }),
};

export default {
    captcha: captchaApi,
    email: emailApi,
    user: userApi,
    product: productApi,
    category: categoryApi,
    supplier: supplierApi,
    content: contentApi,
    cart: cartApi,
    order: orderApi,
};
