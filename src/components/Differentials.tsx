import { Award, Shield, Heart, Sparkles, GraduationCap, Building2 } from 'lucide-react';

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por Que Escolher a Vidoto Sports?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Enquanto uns improvisam, nós profissionalizamos. Conheça nossos diferenciais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#2133B9] to-[#1a2890] p-8 rounded-3xl text-white transform hover:scale-105 transition-all shadow-lg">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Professores Especializados</h3>
            <p className="text-gray-100 leading-relaxed">
              Todos os nossos profissionais são formados em Educação Física e especializados em suas modalidades. Experiência e paixão pelo que fazem.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-3xl text-white transform hover:scale-105 transition-all shadow-lg">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Infraestrutura Completa</h3>
            <p className="text-gray-100 leading-relaxed">
              Sedes próprias com equipamentos modernos e espaços seguros. Tudo pensado para oferecer a melhor experiência para seu filho.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-8 rounded-3xl text-white transform hover:scale-105 transition-all shadow-lg">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ambiente Acolhedor</h3>
            <p className="text-white leading-relaxed">
              Na Vidoto, o carinho é tão forte quanto o treino. Criamos um ambiente onde cada criança se sente especial e motivada.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-3xl text-white transform hover:scale-105 transition-all shadow-lg">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Metodologia Comprovada</h3>
            <p className="text-gray-100 leading-relaxed">
              Utilizamos métodos pedagógicos modernos que respeitam o desenvolvimento individual de cada aluno, priorizando evolução e bem-estar.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl text-white transform hover:scale-105 transition-all shadow-lg">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Segurança em Primeiro Lugar</h3>
            <p className="text-gray-100 leading-relaxed">
              Protocolos rigorosos de segurança, ambientes higienizados e equipe treinada para garantir a tranquilidade dos pais.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-3xl text-white transform hover:scale-105 transition-all shadow-lg">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Desenvolvimento Integral</h3>
            <p className="text-gray-100 leading-relaxed">
              Focamos não apenas no físico, mas também no desenvolvimento emocional, social e cognitivo através do esporte.
            </p>
          </div>
        </div>

        <div className="bg-[#2133B9] rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Parcerias com Escolas
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Oferecemos programas especiais para escolas que buscam profissionalizar suas atividades esportivas. Gestão completa de modalidades, professores especializados e estrutura pedagógica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="bg-white text-[#2133B9] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-block"
            >
              Seja Nosso Parceiro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
