import React from "react";
import "./styles.css";

function Login() {
    return (
        <div className="login-container">
            <form className="login-form">
                {/* Título */}
                <h1>Acesse sua conta</h1>

                <div>
                    <label htmlFor="email">Usuário</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="seuemail@exemplo.com"
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Sua senha"
                    />
                    <a href="#">Esqueci minha senha</a>
                </div>

                <button type="submit">Entrar</button>

                {/* Divisor */}
                <hr />
                <span>ou</span>

                {/* Botões sociais */}
                <button type="button" className="social-button google-button">
                    {/* Ícone pode ser adicionado aqui se desejar */}
                    Entrar com o Google
                </button>
                <button type="button" className="social-button facebook-button">
                    {/* Ícone pode ser adicionado aqui se desejar */}
                    Entrar com o Facebook
                </button>
            </form>
        </div>
    );
}

export default Login;
