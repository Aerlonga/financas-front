import React from "react";
import { api } from "../service/api.js";

export default function Dashboard() {
    const token = api.getToken();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Login realizado com sucesso!</h1>
            <p>Seu token JWT:</p>
            <pre className="bg-gray-100 p-2 rounded text-xs break-all">{token || "Nenhum token encontrado"}</pre>
        </div>
    );
}