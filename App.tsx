
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { SERVICES, PROJECTS, TESTIMONIALS, PARTNERS } from './constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors duration-300">
            <Zap className="w-6 h-6 text-white group-hover:text-zinc-950" />
          </div>
          <span className="text-2xl font-heading font-extrabold tracking-tighter text-white">
            ELETRO <span className="text-primary">ALVES</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
          <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a>
          <a href="#contato" className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all">Orçamento</a>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4">
          <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg">Início</a>
          <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg">Sobre</a>
          <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg">Serviços</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg">Portfólio</a>
          <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-lg text-primary font-bold">Solicitar Orçamento</a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Background with higher opacity and better gradient for readability */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=1920&q=80" 
          alt="Rural Automation" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/70 to-zinc-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col h-full">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-8 animate-pulse">
            <TrendingUp className="w-4 h-4" />
            Líder em Tecnologia Rural
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-tight">
            Soluções inteligentes em <span className="text-primary">instalações elétricas</span> e automação.
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            Potencializamos a produção de aviários e suinocultura com tecnologia de ponta, 
            garantindo eficiência energética e segurança operacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contato" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group shadow-lg shadow-primary/20">
              Solicitar orçamento
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicos" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
              Conhecer serviços
            </a>
          </div>
        </div>

        {/* Improved Stats Card (Selos) - Integrated into the flow to avoid overlaps */}
        <div className="mt-auto hidden lg:block">
          <div className="grid grid-cols-3 gap-8 max-w-4xl glass-card p-10 rounded-[2rem] border-white/10 shadow-2xl">
            <div className="border-r border-white/10 pr-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div className="text-3xl font-heading font-bold text-white">+3 Anos</div>
              </div>
              <div className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-bold">De Experiência no Campo</div>
            </div>
            <div className="border-r border-white/10 px-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl font-heading font-bold text-white">100%</div>
              </div>
              <div className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-bold">Foco em Produtividade</div>
            </div>
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-rural-green/20 rounded-lg">
                  <Cpu className="w-5 h-5 text-rural-green" />
                </div>
                <div className="text-3xl font-heading font-bold text-white">Moderno</div>
              </div>
              <div className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-bold">Design & Automação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-2 border-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=800&q=80" 
                alt="Equipe Eletro Alves" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl shadow-2xl hidden md:block">
              <ShieldCheck className="w-12 h-12 text-white mb-4" />
              <div className="text-white font-heading font-bold text-xl uppercase tracking-tighter">Confiança & Segurança</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Nossa História</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">Nascidos para inovar o agronegócio.</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              A Eletro Alves atua há mais de 3 anos no mercado, consolidando-se como referência 
              em instalações elétricas e automação especializada para aviários e suínos.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Nascemos com um objetivo claro: levar a inovação tecnológica para dentro do campo. 
              Entendemos os desafios do produtor rural e entregamos soluções que aumentam a 
              produtividade, garantindo economia e eficiência energética em cada projeto.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-2 rounded-lg mt-1">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Qualidade</h4>
                  <p className="text-zinc-500 text-sm">Componentes certificados e duráveis.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-2 rounded-lg mt-1">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Tecnologia</h4>
                  <p className="text-zinc-500 text-sm">Sistemas de ponta para controle total.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Owner = () => {
  return (
    <section className="py-24 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Cpu className="w-64 h-64 text-white" />
          </div>
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center relative z-10">
            <div className="text-center md:text-left">
              <div className="w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-primary mb-6">
                <img 
                  src="https://picsum.photos/400/400" 
                  alt="Proprietário" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-heading font-bold text-white mb-1">Alves</h4>
              <p className="text-primary font-bold uppercase tracking-widest text-xs">Proprietário & Especialista</p>
            </div>
            
            <div>
              <h3 className="text-3xl font-heading font-bold mb-6 text-accent">Liderando com Visão</h3>
              <p className="text-zinc-300 italic text-xl mb-8 leading-relaxed">
                "A tecnologia não é apenas um luxo, é a aliada fundamental do produtor moderno. 
                Nossa missão é transformar dados e eletricidade em economia e produtividade para quem alimenta o mundo."
              </p>
              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                <div className="bg-zinc-950/50 p-4 rounded-xl border border-white/5">
                  <span className="text-primary font-bold block mb-1">Eficiência</span>
                  Redução drástica no desperdício de energia.
                </div>
                <div className="bg-zinc-950/50 p-4 rounded-xl border border-white/5">
                  <span className="text-primary font-bold block mb-1">Futuro</span>
                  Automação como padrão de excelência no campo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Nossas Especialidades</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">Serviços pensados para a produtividade rural.</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-10 bg-zinc-900 border border-white/5 rounded-3xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-zinc-950 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-2xl font-heading font-bold mb-4">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contato" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                Saber mais <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold">Parceiros & Fornecedores de Confiança</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {PARTNERS.map((partner) => (
            <img key={partner.name} src={partner.logo} alt={partner.name} className="h-8 md:h-12 w-auto object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Casos de Sucesso</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold">Transformando a realidade do produtor.</h3>
          </div>
          <a href="#contato" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all whitespace-nowrap">
            Ver todos os projetos <ChevronRight className="w-5 h-5" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-3xl bg-zinc-900 aspect-[4/5]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">{project.category}</span>
                <h4 className="text-2xl font-heading font-bold mb-2">{project.title}</h4>
                <p className="text-zinc-400 text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold">O que dizem nossos clientes satisfeitos.</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="p-8 bg-zinc-950 rounded-3xl border border-white/5 relative">
              <div className="absolute top-8 right-8 text-primary/20">
                <MessageCircle className="w-12 h-12" />
              </div>
              <p className="text-zinc-400 italic mb-8 relative z-10">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="font-bold text-white text-sm">{testimonial.name}</h5>
                  <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Contato</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">Vamos impulsionar sua produtividade?</h3>
            <p className="text-zinc-400 text-lg mb-10">
              Estamos prontos para atender seu projeto, desde a pequena manutenção 
              até a automação completa do seu sistema rural.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">WhatsApp</p>
                  <p className="text-xl font-heading font-bold text-white">(45) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Telefone</p>
                  <p className="text-xl font-heading font-bold text-white">(45) 3333-3333</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary transition-colors">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Localização</p>
                  <p className="text-xl font-heading font-bold text-white">Paraná, Brasil</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] border border-white/5">
            <h4 className="text-2xl font-heading font-bold mb-8">Enviar uma mensagem</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-zinc-500 ml-2">Nome Completo</label>
                  <input type="text" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-zinc-500 ml-2">Telefone / WhatsApp</label>
                  <input type="text" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-zinc-500 ml-2">Serviço de Interesse</label>
                <select className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all text-zinc-400">
                  <option>Instalações Elétricas</option>
                  <option>Automação de Aviários</option>
                  <option>Automação de Suinocultura</option>
                  <option>Montagem de Painéis</option>
                  <option>Manutenção</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-zinc-500 ml-2">Mensagem</label>
                <textarea className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all h-32 resize-none" placeholder="Conte um pouco sobre seu projeto..."></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20">
                Enviar Mensagem Agora
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-heading font-extrabold tracking-tighter text-white">
                ELETRO <span className="text-primary">ALVES</span>
              </span>
            </div>
            <p className="text-zinc-500 text-lg max-w-sm mb-8">
              Referência em tecnologia e inovação para o campo. 
              Levamos eficiência e segurança para sua produção.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-sm">Links Rápidos</h5>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-sm">Legal</h5>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-xs font-bold uppercase tracking-widest">
          <p>© 2024 ELETRO ALVES - TECNOLOGIA E INOVAÇÃO PARA O CAMPO.</p>
          <p>DESENVOLVIDO COM EXCELÊNCIA.</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Owner />
        <Services />
        <Partners />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* WhatsApp Fixed Button */}
      <a 
        href="https://wa.me/5545999999999" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/50 hover:scale-110 transition-transform z-[60] group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
          Chame no WhatsApp
        </span>
      </a>
    </div>
  );
};

export default App;
