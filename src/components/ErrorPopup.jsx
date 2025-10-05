import React, { useEffect } from "react";
import { X } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function ErrorPopup({ message, onClose }) {
    useEffect(() => {
        if (!message) return;
        const timer = setTimeout(onClose, 3500);
        return () => clearTimeout(timer);
    }, [message, onClose]);

    if (!message) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl animate-pop relative">
                <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500 w-7 h-7" />
                <span className="text-lg text-red-100 text-center drop-shadow">{message}</span>
                <button
                    className="absolute top-2 right-2 text-red-300 hover:text-red-500 transition cursor-pointer"
                    onClick={onClose}
                    aria-label="Fechar"
                    style={{ position: "absolute", right: "-40px", top: "0" }}
                >
                    <X size={22} />
                </button>
            </div>
            <style>
                {`
                .animate-pop {
                    animation: popUp 0.4s cubic-bezier(.68,-0.55,.27,1.55);
                }
                @keyframes popUp {
                    0% { transform: scale(0.7); opacity: 0; }
                    80% { transform: scale(1.05); opacity: 1; }
                    100% { transform: scale(1); opacity: 1; }
                }
                `}
            </style>
        </div>
    );
}