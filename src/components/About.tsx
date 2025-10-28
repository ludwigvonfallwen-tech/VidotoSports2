import { Users, Trophy, Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-[#2133B9] rounded-3xl transform rotate-3"></div>
            <img
              src="/550927001_17924428275149453_6295020995670531086_n.webp"
              alt="Qual é o esporte ideal para o seu filho?"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Não Somos Só Uma Escola de Esportes
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Somos uma gestão completa dedicada a desenvolver o corpo, o caráter e o futuro das crianças.
            </p>
            <div className="bg-[#2133B9] text-white p-8 rounded-2xl mb-6">
              <p className="text-lg italic mb-4 leading-relaxed">
                "Na Vidoto, o carinho é tão forte quanto o treino."
              </p>
              <p className="font-semibold">
                — Guilherme Vidoto, CEO da Vidoto Sports
              </p>
              <p className="text-sm text-gray-300 mt-2">
                Formado em Educação Física
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Enquanto uns improvisam, nós profissionalizamos. Aqui é lugar de quem acredita que esporte muda tudo. E a próxima história de superação pode começar agora — com seu filho, ou com sua escola.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="relative bg-gradient-to-br from-[#2133B9] to-[#1a2890] p-8 rounded-3xl text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 overflow-hidden group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAtOHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Professores Especializados</h3>
              <p className="text-gray-100 leading-relaxed">
                Equipe qualificada e apaixonada por educação física
              </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-yellow-500 to-orange-600 p-8 rounded-3xl text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 overflow-hidden group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAtOHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform shadow-lg">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sedes Próprias</h3>
              <p className="text-white leading-relaxed">
                Infraestrutura completa e segura para todos
              </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-3xl text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 overflow-hidden group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAtOHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Parcerias Sólidas</h3>
              <p className="text-white leading-relaxed">
                Colaboração com escolas de confiança
              </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-3xl text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 overflow-hidden group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAtOHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Missão Clara</h3>
              <p className="text-white leading-relaxed">
                Formar campeões dentro e fora das quadras
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
