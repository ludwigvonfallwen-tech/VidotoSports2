import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Users, Trophy, Heart, Building2, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Sports from './components/Sports';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/VidotoLogo.png" alt="Vidoto Sports" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className={`font-semibold transition-colors ${scrolled ? 'text-gray-800 hover:text-[#2133B9]' : 'text-white hover:text-gray-200'}`}>
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className={`font-semibold transition-colors ${scrolled ? 'text-gray-800 hover:text-[#2133B9]' : 'text-white hover:text-gray-200'}`}>
              Sobre
            </button>
            <button onClick={() => scrollToSection('modalidades')} className={`font-semibold transition-colors ${scrolled ? 'text-gray-800 hover:text-[#2133B9]' : 'text-white hover:text-gray-200'}`}>
              Modalidades
            </button>
            <button onClick={() => scrollToSection('diferenciais')} className={`font-semibold transition-colors ${scrolled ? 'text-gray-800 hover:text-[#2133B9]' : 'text-white hover:text-gray-200'}`}>
              Diferenciais
            </button>
            <button onClick={() => scrollToSection('contato')} className="bg-[#2133B9] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1a2890] transition-all transform hover:scale-105">
              Fale Conosco
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-800 hover:text-[#2133B9] font-semibold text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-800 hover:text-[#2133B9] font-semibold text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection('modalidades')} className="text-gray-800 hover:text-[#2133B9] font-semibold text-left">
                Modalidades
              </button>
              <button onClick={() => scrollToSection('diferenciais')} className="text-gray-800 hover:text-[#2133B9] font-semibold text-left">
                Diferenciais
              </button>
              <button onClick={() => scrollToSection('contato')} className="bg-[#2133B9] text-white px-6 py-3 rounded-full font-semibold text-center">
                Fale Conosco
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Sections */}
      <Hero scrollToSection={scrollToSection} />
      <TrustedBy />
      <About />
      <Sports />
      <Differentials />
      <Gallery />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
