import { BarChart2 } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t border-blue-100 text-center p-4 mt-auto shadow-inner">
      <div className="flex justify-center items-center gap-2 text-[#002B60]">
        <BarChart2 size={20} strokeWidth={2} className="text-cyan-600" />
        <span className="font-semibold">
          © {new Date().getFullYear()} Finanças. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;