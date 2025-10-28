import { useState } from 'react';

const sports = [
  {
    id: 1,
    name: 'Futsal',
    description: 'Desenvolve coordenação motora, trabalho em equipe e estratégia. Perfeito para crianças que amam futebol e querem aprender as técnicas do esporte mais popular do Brasil.',
    age: '4 a 14 anos',
    benefits: ['Coordenação motora', 'Trabalho em equipe', 'Disciplina', 'Condicionamento físico'],
    color: 'from-green-500 to-green-700',
    image: '/487812637_1756700125228471_9045427510197654011_n.jpg'
  },
  {
    id: 2,
    name: 'Futbaby',
    description: 'Iniciação esportiva para os pequenos! Atividades lúdicas que desenvolvem habilidades motoras básicas através do futebol de forma divertida e segura.',
    age: '2 a 4 anos',
    benefits: ['Desenvolvimento motor', 'Socialização', 'Diversão', 'Primeiros passos no esporte'],
    color: 'from-yellow-500 to-orange-500',
    image: '/futbaby.jpg'
  },
  {
    id: 3,
    name: 'Ballet/Jazz',
    description: 'Expressão artística combinada com técnica. Desenvolve postura, flexibilidade, ritmo e autoconfiança através da dança.',
    age: '3 a 14 anos',
    benefits: ['Postura', 'Flexibilidade', 'Ritmo', 'Expressão artística'],
    color: 'from-pink-500 to-rose-600',
    image: '/ballet.jpg'
  },
  {
    id: 4,
    name: 'Judô',
    description: 'Arte marcial que ensina respeito, disciplina e autocontrole. Além do condicionamento físico, desenvolve valores fundamentais para a vida.',
    age: '4 a 14 anos',
    benefits: ['Disciplina', 'Respeito', 'Autocontrole', 'Defesa pessoal'],
    color: 'from-red-600 to-red-800',
    image: '/judo.jpg'
  },
  {
    id: 5,
    name: 'Ginástica Artística',
    description: 'Desenvolve força, flexibilidade e coordenação através de movimentos acrobáticos. Ideal para crianças ativas que buscam novos desafios.',
    age: '4 a 14 anos',
    benefits: ['Força muscular', 'Flexibilidade', 'Equilíbrio', 'Superação'],
    color: 'from-purple-600 to-purple-800',
    image: '/ginastica2.jpg'
  },
  {
    id: 6,
    name: 'Funcional Kids',
    description: 'Treinamento funcional adaptado para crianças. Exercícios variados que desenvolvem todas as capacidades físicas de forma divertida e dinâmica.',
    age: '6 a 14 anos',
    benefits: ['Condicionamento geral', 'Força', 'Agilidade', 'Resistência'],
    color: 'from-blue-600 to-blue-800',
    image: '/funcional.jpg'
  }
];

export default function Sports() {
  const [selectedSport, setSelectedSport] = useState(sports[0]);

  return (
    <section id="modalidades" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossas Modalidades
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Oferecemos uma variedade de esportes para atender diferentes perfis e idades. Encontre a modalidade perfeita para seu filho!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sports.map((sport) => (
            <button
              key={sport.id}
              onClick={() => setSelectedSport(sport)}
              className={`p-6 rounded-2xl text-left transition-all transform hover:scale-105 ${
                selectedSport.id === sport.id
                  ? 'bg-[#2133B9] text-white shadow-xl scale-105'
                  : 'bg-white text-gray-900 hover:shadow-lg'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{sport.name}</h3>
              <p className={`text-sm ${selectedSport.id === sport.id ? 'text-gray-200' : 'text-gray-600'}`}>
                {sport.age}
              </p>
            </button>
          ))}
        </div>

        <div className={`relative bg-gradient-to-br ${selectedSport.color} rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden`}>
          {selectedSport.image && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{
                backgroundImage: `url(${selectedSport.image})`,
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 70%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 70%)'
              }}
            />
          )}
          <div className="relative max-w-4xl mx-auto z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{selectedSport.name}</h3>
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              {selectedSport.description}
            </p>

            <div className="mb-6">
              <p className="text-sm uppercase tracking-wide mb-2 opacity-80">Faixa Etária</p>
              <p className="text-2xl font-bold">{selectedSport.age}</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide mb-4 opacity-80">Principais Benefícios</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {selectedSport.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <p className="font-semibold">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
