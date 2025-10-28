import { Instagram, Facebook, Heart } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-[#2133B9] to-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="/VidotoLogo.png" alt="Vidoto Sports" className="h-16 w-auto mb-4" />
            <p className="text-gray-300 leading-relaxed">
              Formando campeões dentro e fora das quadras. Aqui é lugar de quem acredita que esporte muda tudo.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-white transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-white transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('modalidades')} className="text-gray-300 hover:text-white transition-colors">
                  Modalidades
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('diferenciais')} className="text-gray-300 hover:text-white transition-colors">
                  Diferenciais
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Modalidades</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Futsal</li>
              <li>Futbaby</li>
              <li>Ballet/Jazz</li>
              <li>Judô</li>
              <li>Ginástica Artística</li>
              <li>Funcional Kids</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>(11) 96668-4298</li>
              <li>vidotosports@gmail.com</li>
              <li>São Paulo - SP</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/vidotosports"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/vidotosports"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Vidoto Sports. Todos os direitos reservados.
            </p>
            <p className="text-gray-300 text-sm flex items-center gap-2">
              Desenvolvido com <Heart className="w-4 h-4 text-red-500 fill-current" /> para formar campeões
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
