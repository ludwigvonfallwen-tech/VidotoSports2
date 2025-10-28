import InteractiveBentoGallery from './ui/interactive-bento-gallery'

export default function Gallery() {
  const mediaItems = [
    {
      id: 1,
      type: "image",
      title: "Ginástica Artística",
      desc: "Desenvolvimento de força, flexibilidade e coordenação motora",
      url: "/ginastica.jpg",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 2,
      type: "image",
      title: "Futsal",
      desc: "Trabalho em equipe e habilidades técnicas",
      url: "/futsal2.jpg",
      span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Ballet",
      desc: "Disciplina, postura e expressão artística",
      url: "/ballet.jpg",
      span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 4,
      type: "image",
      title: "Complexo Esportivo",
      desc: "Estrutura completa para todas as modalidades",
      url: "/complexo.jpg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 5,
      type: "image",
      title: "Judô",
      desc: "Disciplina, respeito e defesa pessoal",
      url: "/judo.jpg",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 6,
      type: "image",
      title: "Treinamento Funcional",
      desc: "Condicionamento físico e movimento funcional",
      url: "/funcional.jpg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 7,
      type: "image",
      title: "FutBaby",
      desc: "Iniciação esportiva para os pequenos",
      url: "/futbaby.jpg",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <InteractiveBentoGallery
          mediaItems={mediaItems}
          title="Prazer, Nós Somos a Vidoto"
          description="Aqui é lugar de quem acredita que esporte muda tudo"
        />

        <div className="mt-16 bg-gradient-to-br from-[#2133B9] to-black rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              A Próxima História de Superação Pode Começar Agora
            </h3>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Com seu filho, ou com sua escola. Estamos prontos para transformar vidas através do esporte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contato"
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 inline-block"
              >
                Comece Agora
              </a>
              <a
                href="#modalidades"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all border-2 border-white inline-block"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
