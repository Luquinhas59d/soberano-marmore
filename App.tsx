
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StoneConsultant from './components/StoneConsultant';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Location from './pages/Location';
import Budget from './pages/Budget';
import MaterialDetails from './pages/MaterialDetails';
import About from './pages/About';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMaterialId, setSelectedMaterialId] = useState<string | null>(null);

  const handleNavigateToMaterial = (id: string) => {
    setSelectedMaterialId(id);
    setCurrentPage('material-details');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'catalog': return <Catalog onSelectMaterial={handleNavigateToMaterial} />;
      case 'location': return <Location />;
      case 'budget': return <Budget />;
      case 'about': return <About />;
      case 'material-details': 
        return selectedMaterialId ? (
          <MaterialDetails 
            id={selectedMaterialId} 
            onBack={() => setCurrentPage('catalog')}
            onSelectMaterial={handleNavigateToMaterial}
          />
        ) : <Catalog onSelectMaterial={handleNavigateToMaterial} />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedMaterialId]);

  return (
    <div className="min-h-screen flex flex-col bg-midnight">
      <Navbar onNavigate={(page) => {
        setCurrentPage(page);
        setSelectedMaterialId(null);
      }} currentPage={currentPage} />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <StoneConsultant />

      <footer className="bg-[#0F172A] border-t border-white/5 py-24 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            <div>
              <div className="flex items-center space-x-5 mb-10">
                <div className="w-12 h-12 border-2 border-[#D4AF37] flex items-center justify-center transform rotate-45">
                  <i className="fas fa-gem text-[#D4AF37] -rotate-45"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-serif text-3xl tracking-widest leading-none">SOBERANO</span>
                  <span className="text-[#D4AF37] text-[10px] tracking-[0.5em] font-light">MÁRMORES</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-light">
                A excelência em rochas ornamentais para Salto, Itu e toda a região metropolitana. Transformando natureza em arte.
              </p>
            </div>

            <div>
              <h4 className="text-white font-serif text-xl mb-8">Navegação</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-light">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-[#D4AF37] transition-colors">Início</button></li>
                <li><button onClick={() => setCurrentPage('catalog')} className="hover:text-[#D4AF37] transition-colors">Coleções</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-[#D4AF37] transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => setCurrentPage('location')} className="hover:text-[#D4AF37] transition-colors">Localização</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-xl mb-8">Showroom Sede</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-light">
                <li className="flex items-start"><i className="fas fa-map-marker-alt text-[#D4AF37] mt-1 mr-3"></i> Rua Major Lúcio Dias Ramos, 270<br/>Jardim Belcito - SP</li>
                <li className="flex items-center"><i className="fab fa-whatsapp text-[#D4AF37] mr-3"></i> (11) 96814-3372</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.4em] uppercase">
            <p className="text-slate-600">© 2024 SOBERANO MÁRMORES - DESIGN ETERNO</p>
            <div className="mt-4 md:mt-0 space-x-8">
              <a 
                href="https://www.instagram.com/soberano_marmoresegranitos?igsh=a2Z0aDFpbjEwODRx&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-[#D4AF37] transition-all duration-300"
              >
                Instagram
              </a>
              <a 
                href="https://wa.me/5511968143372" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-[#D4AF37] transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
