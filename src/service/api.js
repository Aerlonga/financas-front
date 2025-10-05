const BASE = import.meta.env.VITE_API_URL || '/api';

function buildUrl(path) {
    return `${BASE.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

function getToken() {
    return localStorage.getItem('token');
}

function setToken(token) {
    localStorage.setItem('token', token);
}

function clearToken() {
    localStorage.removeItem('token');
}

async function apiFetch(path, options = {}) {
    const token = getToken();
    const headers = {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {}),
    };

    const res = await fetch(buildUrl(path), {
        ...options,
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!res.ok) {
        const text = await res.text().catch(() => null);
        const err = new Error(text || res.statusText);
        err.status = res.status;
        throw err;
    }

    return res.status === 204 ? null : res.json().catch(() => null);
}

export const api = {
    // Auth
    login: async (email, senha) => {
        const res = await apiFetch('/auth/login', {
            method: 'POST',
            body: { email, senha }
        });
        if (res && res.token) setToken(res.token);
        return res;
    },
    logout: () => clearToken(),

    // Usuários
    getUsuarios: () => apiFetch('/usuarios', { method: 'GET' }),
    getUsuario: (id) => apiFetch(`/usuarios/${id}`, { method: 'GET' }),
    criarUsuario: (body) => apiFetch('/usuarios', { method: 'POST', body }),
    atualizarUsuario: (id, body) => apiFetch(`/usuarios/${id}`, { method: 'PUT', body }),
    deletarUsuario: (id) => apiFetch(`/usuarios/${id}`, { method: 'DELETE' }),

    // Genéricos
    get: (p, opts) => apiFetch(p, { method: 'GET', ...opts }),
    post: (p, body, opts) => apiFetch(p, { method: 'POST', body, ...opts }),
    put: (p, body, opts) => apiFetch(p, { method: 'PUT', body, ...opts }),
    del: (p, opts) => apiFetch(p, { method: 'DELETE', ...opts }),

    // Token helpers
    getToken,
    setToken,
    clearToken,
};

export default api;