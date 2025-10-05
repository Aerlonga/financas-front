import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import { api } from "../../../service/api.js";
import imagemLogin from '../../../assets/imagem-login.png';
import logoControle from '../../../assets/logo.png';
import ErrorPopup from "../../../components/ErrorPopup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            await api.login(email, password);
            navigate("/dashboard");
        } catch {
            setError("Usuário ou senha inválidos!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white sm:bg-gray-50 p-4">
            <div className="flex flex-col items-center w-full max-w-[480px]">
                <Link to="/"> {/* Vai para a Home */}
                    <img
                        src={logoControle}
                        alt="Logo Controle Financeiro"
                        className="h-20 mb-6"
                    />
                </Link>
                <div
                    className="relative z-10 w-full bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden"
                    style={{
                        backgroundImage: `url(${imagemLogin})`,
                    }}
                >
                    <div className="absolute inset-0 bg-[#002B60]/60" />
                    <form className="relative z-10 flex flex-col gap-6 text-white px-6 sm:px-8 py-10" onSubmit={handleSubmit}>
                        <h1 className="text-2xl font-bold text-center mb-4">
                            Acesse sua conta
                        </h1>

                        {/* Usuário */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="user" className="text-sm text-white pl-4">
                                Usuário
                            </label>
                            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2">
                                <User size={22} strokeWidth={2.2} className="text-[#002B60]" />
                                <input
                                    id="user"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="flex-1 bg-transparent text-gray-800 focus:outline-none"
                                    autoComplete="username"
                                    required
                                />
                            </div>
                        </div>

                        {/* Senha */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-sm text-white pl-4">
                                Senha
                            </label>
                            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2">
                                <Lock size={22} strokeWidth={2.2} className="text-[#002B60]" />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="flex-1 bg-transparent text-gray-800 focus:outline-none"
                                    autoComplete="current-password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="focus:outline-none cursor-pointer"
                                    tabIndex={-1}
                                >
                                    {showPassword ? (
                                        <EyeOff size={20} className="text-[#002B60]" />
                                    ) : (
                                        <Eye size={20} className="text-[#002B60]" />
                                    )}
                                </button>
                            </div>
                            <a
                                href="#"
                                className="block text-left text-sm italic text-white/80 hover:text-white mt-1 pl-4 cursor-pointer"
                            >
                                Esqueci minha senha
                            </a>
                        </div>

                        {/* Aviso de erro acima do botão Entrar */}
                        {error && (
                            <div className="flex items-center justify-center animate-pop">
                                <FontAwesomeIcon icon={faExclamation} className="text-red-500 w-5 h-5" />
                                <span className="text-red-500 ml-2">{error}</span>
                            </div>
                        )}

                        {/* Botão Entrar */}
                        <button
                            type="submit"
                            className="mt-2 bg-blue-600 py-3 rounded-full font-semibold uppercase shadow-lg hover:bg-blue-700 transition text-white cursor-pointer"
                            disabled={loading}
                        >
                            {loading ? "Entrando..." : "Entrar"}
                        </button>

                        {/* Divisor */}
                        <div className="flex items-center gap-3 my-2">
                            <div className="flex-1 border-t border-white/40" />
                            <span className="text-sm text-white/70 px-2">OU</span>
                            <div className="flex-1 border-t border-white/40" />
                        </div>

                        {/* Google */}
                        <button
                            type="button"
                            className="flex items-center justify-center gap-3 bg-white text-gray-900 rounded-full py-2 font-semibold 
                            hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-md cursor-pointer 
                            active:scale-100"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            Entre com o Google
                        </button>

                        {/* Facebook */}
                        <button
                            type="button"
                            className="flex items-center justify-center gap-3 bg-[#1877F2] text-white rounded-full py-2 font-semibold 
                            hover:bg-[#166FE5] hover:scale-105 transition-all duration-200 shadow-md cursor-pointer 
                            active:scale-100"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                                alt="Facebook"
                                className="w-5 h-5 bg-white rounded-xs"
                            />
                            Entre com o Facebook
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}