import { ChevronRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2133B9] via-[#1a2890] to-black z-0">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/510471476_17914500459149453_1407741699344586450_n.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Formando <span className="text-yellow-400">Campeões</span><br />
              Dentro e Fora das Quadras
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Por trás de uniformes, bolas e aplausos, existe uma estrutura pensada para desenvolver o corpo, o caráter e o futuro das crianças.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Matricule Seu Filho
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('modalidades')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105 border-2 border-white"
            >
              Conheça as Modalidades
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">6+</div>
              <div className="text-sm text-gray-300">Modalidades Esportivas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-sm text-gray-300">Professores Especializados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">2+</div>
              <div className="text-sm text-gray-300">Sedes Próprias</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-sm text-gray-300">Alunos Ativos</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-8 h-8 text-white rotate-90" />
      </div>
    </section>
  );
}
