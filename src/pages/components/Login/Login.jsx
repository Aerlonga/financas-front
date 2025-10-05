import React from "react";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div
                className="relative w-full max-w-[380px] bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800')",
                }}
            >
                {/* Overlay translúcido */}
                <div className="absolute inset-0 bg-blue-900/70" />

                {/* Botão de cadeado */}
                <button className="absolute top-4 right-4 z-20 bg-violet-200 rounded-full p-2 shadow-md hover:bg-violet-300 transition">
                    <span className="material-icons text-[#5E2CA5] text-base">lock</span>
                </button>

                {/* Conteúdo */}
                <form className="relative z-10 flex flex-col gap-6 text-white px-8 py-10">
                    <h1 className="text-2xl font-bold text-center mb-4">
                        Acesse sua conta
                    </h1>

                    {/* Usuário */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="user" className="text-sm text-white pl-4">
                            Usuário
                        </label>
                        <div className="flex items-center gap-3">
                            <span className="material-icons-outlined text-white/80 text-2xl">
                                person_outline
                            </span>
                            <input
                                id="user"
                                type="email"
                                className="flex-1 bg-white text-gray-800 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                            />
                        </div>
                    </div>

                    {/* Senha */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm text-white pl-4">
                            Senha
                        </label>
                        <div className="flex items-center gap-3">
                            <span className="material-icons-outlined text-white/80 text-2xl">
                                lock_outline
                            </span>
                            <input
                                id="password"
                                type="password"
                                className="flex-1 bg-white text-gray-800 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                            />
                        </div>
                        <a
                            href="#"
                            className="block text-left text-sm italic text-white/80 hover:text-white mt-1 pl-12"
                        >
                            Esqueci minha senha
                        </a>
                    </div>

                    {/* Botão Entrar */}
                    <button
                        type="submit"
                        className="mt-2 bg-blue-600 py-3 rounded-full font-semibold uppercase shadow-lg hover:bg-blue-700 transition"
                    >
                        Entrar
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
                        className="flex items-center justify-center gap-3 bg-white text-gray-900 rounded-full py-2 font-semibold hover:bg-gray-100 transition shadow-md"
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
                        className="flex items-center justify-center gap-3 bg-[#1877F2] text-white rounded-full py-2 font-semibold hover:bg-[#166FE5] transition shadow-md"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                            alt="Facebook"
                            className="w-5 h-5"
                        />
                        Entre com o Facebook
                    </button>
                </form>
            </div>
        </div>
    );
}