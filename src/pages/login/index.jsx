import React from 'react';
import './styles.css'; // Importando os estilos locais

function Login() {
    return (
        <div className="login-container">
            <form className="login-form">
                <h1>Login</h1>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="seuemail@exemplo.com"
                />

                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Sua senha"
                />

                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;