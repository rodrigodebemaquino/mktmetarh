
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Home, Users, Target, BookOpen, Download,
  FileText, LifeBuoy, Share2, Mail, Linkedin,
  ExternalLink, Send, Clock, ShieldCheck,
  Search, Layout, Youtube, Facebook, Instagram,
  Mic, Briefcase, BarChart3, Globe, Zap, Megaphone,
  ArrowRight, Palette, PenTool, Type, Image as ImageIcon,
  Video, FileSignature, Monitor, Eye
} from 'lucide-react';

// --- Constants & Types ---
const LOGOS = {
  symbol: (className: string) => (
    <svg className={className} viewBox="0 0 394.26 394.27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path fill="currentColor" d="M84.87,262.47c-1.68-3.63-2.92-7.43-3.65-11.32-.05-.24-.08-.49-.13-.73-.2-1.15-.35-2.31-.47-3.47-.03-.32-.07-.65-.1-.97-.1-1.34-.16-2.69-.16-4.03,0-.37.03-.74.04-1.11.03-.96.08-1.92.16-2.88.05-.59.12-1.17.19-1.76.09-.73.21-1.46.33-2.18.46-2.72,1.17-5.41,2.11-8.03.04-.11.07-.22.11-.34h.02c2.37-6.51,6.13-12.62,11.39-17.82.1-.1.21-.19.31-.29,0,0,0,0,0,0,.02-.02.04-.03.06-.05.66-.64,1.34-1.26,2.03-1.85.6-.53,1.22-1.03,1.84-1.52.01,0,.03-.02.04-.03,6.17-4.86,13.29-8.02,20.72-9.42.24-.05.49-.08.73-.13,1.15-.2,2.31-.35,3.47-.47.32-.03.65-.07.97-.1.87-.07,1.74-.08,2.62-.1.23,0,.45-.03.68-.03.1,0,.19,0,.29,0,.15,0,.3-.02.45-.02.06,0,.11,0,.17,0,.05,0,.1,0,.15,0,1.3.01,2.59.07,3.88.18.57.05,1.13.14,1.7.21.68.09,1.35.18,2.03.29.81.13,1.61.29,2.42.46.19.04.38.09.57.14,8.44,1.96,16.43,6.16,22.91,12.73.43.44.82.9,1.23,1.35.43.46.85.92,1.26,1.39.17.2.33.39.49.59,3.96,4.76,6.88,10.1,8.76,15.71h.01c.02.07.04.14.06.2.29.87.56,1.74.8,2.62.2.72.36,1.44.52,2.16.13.6.28,1.19.39,1.79.22,1.2.39,2.41.52,3.61.04.39.07.79.1,1.18.09,1.07.14,2.13.15,3.2,0,.35.02.7.02,1.06,0,1.3-.07,2.59-.18,3.88-.05.57-.14,1.13-.2,1.7-.09.68-.18,1.35-.29,2.03-.13.81-.29,1.61-.46,2.42-.04.19-.09.38-.14.57-.79,3.41-1.97,6.75-3.5,9.94-.73,2.92-.61,4.95.91,7.4,1.29,1.95,3.46,4.22,6.79,7.6,8.11,8.22,9.7,9.01,17.24,6.49,3.75-1.5,7.63-2.48,11.57-2.99.36-.05.73-.08,1.09-.12,1-.11,2.01-.2,3.01-.24,1.19-.06,2.39-.06,3.58-.03.23,0,.46.02.69.03,5.76.24,11.48,1.52,16.87,3.82,4.18,1.36,6.55,1.58,9.56-.28,1.95-1.29,4.22-3.46,7.59-6.79,8.9-8.79,9.1-9.91,5.8-19.24-1.58-4.45-2.45-9.09-2.67-13.75-.03-.27-.09-.53-.11-.8-.04-.42-.08-.84-.11-1.27-.09-1.15-.15-2.3-.17-3.45,0-.38-.02-.75-.02-1.13,0-1.39.07-2.79.19-4.18.05-.61.14-1.22.22-1.83.09-.73.19-1.45.31-2.17.14-.87.31-1.74.49-2.6.05-.21.1-.41.15-.61,2.08-9.08,6.55-17.66,13.54-24.63,4.13-4.11,8.78-7.35,13.73-9.76,12.4-6.19,26.62-6.98,39.44-2.33,6.88,2.48,9.73,3.4,13.71.93,2.08-1.39,4.49,3.72,8.08-7.3,9.48-9.44,9.69-10.65,6.16-20.68-6.44-18.32-2.19-39.51,12.39-54.04,2.47-2.46,5.15-4.59,7.97-6.43C337.23,42.26,273.26.83,199.33.01,90.46-1.2,1.22,86.08.01,194.94c-.36,32.33,7.08,62.93,20.58,90,11.52-5.54,24.65-6.22,36.52-1.97,6.46,2.3,9.14,3.16,12.87.85,1.95-1.29,4.22-3.46,7.59-6.79,7.15-7.06,8.68-9.18,7.3-14.57Z" />
        <path fill="currentColor" d="M394.26,197.99c-4.29-.37-8.54-1.24-12.64-2.73-6.88-2.48-9.73-3.4-13.71-.93-2.08,1.39-4.49,3.72-8.08,7.3-9.48,9.44-9.69,10.65-6.16,20.68,6.44,18.32,2.19,39.51-12.39,54.04-7.41,7.38-16.62,12-26.28,13.83-.26.05-.52.09-.78.14-1.23.21-2.46.38-3.69.5-.35.03-.69.08-1.04.11-.57.04-1.14.04-1.71.07-7.08.77-14.27,0-21.06-2.42-6.46-2.3-9.14-3.16-12.87-.85-1.95,1.29-4.22,3.46-7.6,6.79-7.74,7.63-8.9,9.49-6.9,15.96,1.36,3.2,2.36,6.53,3,9.92.05.24.08.49.13.73.2,1.15.35,2.31.47,3.47.03.32.07.65.1.97.03.37.02.73.04,1.1.02.33.02.66.04.98.02.65.08,1.3.08,1.95,0,.17-.01.33-.02.5-.11,12.31-4.94,24.59-14.39,33.91-6.96,6.87-15.61,11.17-24.68,12.88-.24.05-.49.08-.73.13-1.15.2-2.31.35-3.47.47-.32.03-.65.07-.97.1-1.34.1-2.69.16-4.03.16-.1,0-.2,0-.3-.01-.09,0-.18,0-.27,0-1.3-.01-2.59-.07-3.88-.18-.57-.05-1.13-.14-1.7-.21-.68-.09-1.35-.18-2.02-.29-.81-.13-1.62-.29-2.42-.46-.19-.04-.38-.09-.57-.14-8.44-1.96-16.43-6.16-22.91-12.73-3.83-3.88-6.84-8.25-9.08-12.9-2.56-5.18-4.08-10.7-4.65-16.28,0-.08-.03-.16-.03-.24-.01-.13-.02-.25-.03-.38-.09-.98-.15-1.96-.17-2.95-.01-.35-.05-.71-.05-1.06,0-.35-.02-.7-.02-1.05,0-.31.04-.62.04-.93,0-.16.02-.31.02-.46.03-.83.04-1.66.12-2.49.05-.57.14-1.13.21-1.7.08-.68.18-1.35.29-2.02.13-.81.29-1.62.46-2.42.04-.19.09-.38.14-.57.68-2.93,1.65-5.8,2.88-8.58,1.14-3.72,1.21-5.95-.54-8.77-1.29-1.95-3.46-4.22-6.79-7.59-7.71-7.82-9.52-8.92-16.16-6.84-5.48,2.3-11.26,3.55-17.07,3.71-1.06.04-2.11.05-3.17.03-.11,0-.21-.01-.32-.02-6.19-.2-12.35-1.59-18.11-4.17-3.57-1.06-5.76-1.09-8.52.61-1.95,1.29-4.22,3.46-7.6,6.79-8.9,8.79-9.1,9.91-5.8,19.24,5.11,14.42,3,30.74-6.07,43.61,32.04,23.47,71.44,37.51,114.18,37.99,108.87,1.21,198.1-86.06,199.31-194.93,0-.45,0-.89,0-1.33Z" />
      </g>
    </svg>
  ),
  horizontal: (className: string) => (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-12 h-12 text-current flex-shrink-0">{LOGOS.symbol("w-full h-full")}</div>
      <div className="flex flex-col leading-none">
        <span className="font-black text-xl tracking-tighter uppercase">METARH</span>
        <span className="font-light text-xs tracking-[0.3em] uppercase opacity-70">Marketing</span>
      </div>
    </div>
  )
};

type Section = 'home' | 'team' | 'responsibilities' | 'miv' | 'downloads' | 'rich' | 'support' | 'social';

// --- Components ---

const Sidebar = ({ current, set }: { current: Section, set: (s: Section) => void }) => {
  const menu = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'team', label: 'Time de Marketing', icon: Users },
    { id: 'responsibilities', label: 'Responsabilidades', icon: Target },
    { id: 'miv', label: 'Identidade Visual', icon: BookOpen },
    { id: 'downloads', label: 'Recursos', icon: Download },
    { id: 'rich', label: 'Materiais Ricos', icon: FileText },
    { id: 'support', label: 'Suporte', icon: LifeBuoy },
    { id: 'social', label: 'Redes Sociais', icon: Share2 },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-meta-purple-deep text-white flex flex-col z-50 shadow-2xl">
      <div className="p-8">
        {LOGOS.horizontal("text-white")}
      </div>
      <nav className="flex-1 px-4 py-4 space-y-1">
        {menu.map(item => (
          <button
            key={item.id}
            onClick={() => set(item.id as Section)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${current === item.id
              ? 'bg-white text-meta-purple-deep shadow-lg'
              : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-white/10 space-y-2">
        <p className="px-4 text-[10px] text-white/20 uppercase tracking-widest font-bold">© METARH</p>
      </div>
    </aside>
  );
};



const HomeSection = ({ set }: { set: (s: Section) => void }) => (
  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <section className="relative overflow-hidden bg-meta-purple-deep text-white rounded-[48px] p-12 lg:p-20 shadow-2xl">
      <div className="relative z-10 max-w-2xl">
        <span className="text-2xl font-normal block mb-1">Área de</span>
        <h1 className="text-7xl lg:text-8xl font-black mb-1 leading-[0.85] flex flex-col">
          <span className="text-meta-pink">Marketing</span>
          <span>METARH</span>
        </h1>
        <p className="text-xl text-white/90 mt-8 mb-10 leading-relaxed font-medium max-w-2xl">
          Somos mais do que um time de Marketing. Somos os guardiões da marca METARH e da nossa posição no mercado de RH. Nosso trabalho é conectar, atrair e fortalecer relacionamentos estratégicos, sempre com criatividade e propósito.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => set('support')}
            className="bg-[#9c5cf5] text-white px-8 py-4 rounded-full font-extrabold text-lg hover:scale-105 transition-transform shadow-lg flex items-center gap-3"
          >
            <LifeBuoy size={20} /> Solicitar Apoio
          </button>
          <button
            onClick={() => set('miv')}
            className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors"
          >
            Manual da Marca
          </button>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-2/3 h-full opacity-10 pointer-events-none translate-x-1/4 scale-150">
        {LOGOS.symbol("w-full h-full text-white")}
      </div>
    </section>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        { id: 'downloads', label: 'Downloads', icon: Download, color: 'bg-meta-purple-base', text: 'Assets oficiais da marca' },
        { id: 'rich', label: 'E-books', icon: FileText, color: 'bg-meta-pink', text: 'Materiais de apoio' },
        { id: 'social', label: 'Canais', icon: Share2, color: 'bg-meta-lime', text: 'Presença digital METARH' },
        { id: 'team', label: 'Equipe', icon: Users, color: 'bg-meta-yellow', text: 'Quem faz acontecer' },
      ].map(card => (
        <button
          key={card.id}
          onClick={() => set(card.id as Section)}
          className="group bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all text-left"
        >
          <div className={`w-14 h-14 ${card.color} rounded-[20px] flex items-center justify-center mb-6 text-meta-purple-deep shadow-inner`}>
            <card.icon size={28} />
          </div>
          <h3 className="font-extrabold text-slate-900 text-xl mb-1 group-hover:text-meta-base transition-colors">{card.label}</h3>
          <p className="text-sm text-slate-400 font-medium">{card.text}</p>
        </button>
      ))}
    </div>
  </div>
);

const TeamSection = () => {
  const team = [
    {
      name: 'Leandro Marques (Lê)',
      role: 'Coordenador de Marketing',
      image: 'https://metarh.com.br/wp-content/uploads/2025/03/Le.jpg',
      position: 'object-[center_10%]',
      bio: (
        <>
          <strong>Publicitário de formação</strong> e apaixonado por comunicação, Leandro faz parte do time da <strong>METARH desde 2019</strong>.<br /><br />
          Com uma trajetória marcada pela <strong>criação de conteúdos gráficos e estratégias de marketing</strong>, hoje <strong>lidera a equipe</strong> e conecta as áreas da empresa para fortalecer a marca e impulsionar resultados.<br /><br />
          Casado e pai do Pietro, Leandro é fã de <strong>cultura pop, animes, música</strong> e não dispensa um bom pedal para recarregar as energias.
        </>
      ),
      mail: 'https://mail.google.com/mail/?view=cm&fs=1&to=leandromarques@metarh.com.br',
      linkedin: 'https://linkedin.com/in/leandro-marques-almeida'
    },
    {
      name: 'Rodrigo Aquino',
      role: 'Analista de Marketing Pleno',
      image: 'https://metarh.com.br/wp-content/uploads/2025/03/Ro-scaled.jpg',
      position: 'object-[center_25%]',
      bio: (
        <>
          <strong>Designer Gráfico por formação</strong>, Rodrigo possui experiência em diferentes segmentos, como <strong>Fintech, BPO e Indústria Gráfica</strong>, atuando na criação de <strong>soluções visuais e estratégicas</strong> orientadas a negócio.<br /><br />
          Desde <strong>2023 na METARH</strong>, trabalha no desenvolvimento de iniciativas que vão além do aspecto estético, conectando <strong>design, marketing e comunicação</strong> para fortalecer a marca, qualificar a experiência do usuário, organizar processos e potencializar a conexão com diferentes públicos e canais.<br /><br />
          Pai da Maria Clara, Rodrigo é apaixonado por <strong>futebol e chimarrão</strong>, e acredita no <strong>design como ferramenta estratégica</strong> para gerar valor, clareza e impacto nas marcas.
        </>
      ),
      mail: 'https://mail.google.com/mail/?view=cm&fs=1&to=rodrigoaquino@metarh.com.br',
      linkedin: 'https://linkedin.com/in/rodrigo-de-bem-aquino'
    },
    {
      name: 'Caroline Amorim Moraes',
      role: 'Analista de Marketing Jr',
      image: 'https://metarh.com.br/wp-content/uploads/2025/11/Carol.png',
      position: 'object-[center_40%]',
      bio: (
        <>
          <strong>Publicitária de formação</strong>, com experiência em <strong>Marketing B2B/B2C, Branding e Comunicação</strong>, Caroline tem vivência em gestão de redes sociais, produção de conteúdo, planejamento de campanhas digitais, análise de desempenho e desenvolvimento de estratégias de comunicação.<br /><br />
          Integra o time da <strong>METARH desde 2025</strong>, contribuindo para o <strong>fortalecimento da presença digital</strong> da marca e apoiando iniciativas que conectam a METARH ao seu público de forma <strong>criativa e estratégica</strong>.<br /><br />
          Apaixonada por <strong>livros, séries, música e viagens</strong>, Caroline valoriza os momentos de qualidade ao lado das pessoas que ama.
        </>
      ),
      mail: 'https://mail.google.com/mail/?view=cm&fs=1&to=carolineamorim@metarh.com.br',
      linkedin: 'https://linkedin.com/in/caroline-amorim-moraes-904931226'
    },
  ];

  return (
    <div className="space-y-12 pb-12">
      <header className="max-w-2xl">
        <h2 className="text-4xl font-black text-meta-purple-deep mb-4 uppercase tracking-tighter">Time de Marketing</h2>
        <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">Conheça os profissionais que cuidam da voz e da imagem da METARH no mercado.</p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=marketing@metarh.com.br"
          target="_blank"
          className="inline-flex items-center gap-3 bg-meta-purple-deep text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
        >
          <Mail size={20} />
          Enviar e-mail para o time
        </a>
      </header>
      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {team.map((member, i) => (
          <div key={i} className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-100 group hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
            <div className="h-80 overflow-hidden relative flex-shrink-0">
              <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.position} group-hover:scale-105 transition-transform duration-700`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-8 -mt-12 bg-white rounded-t-[40px] relative flex-1 flex flex-col z-10">
              <h4 className="text-2xl font-black text-slate-900 mb-1">{member.name}</h4>
              <p className="text-meta-purple-base font-bold text-xs uppercase tracking-widest mb-6">{member.role}</p>
              <div className="text-sm text-slate-500 mb-8 leading-relaxed font-medium flex-1">{member.bio}</div>
              <div className="flex gap-3 pt-6 border-t border-slate-50 mt-auto">
                <a href={member.mail} target="_blank" className="flex-1 bg-slate-50 py-3 rounded-xl text-slate-400 hover:text-meta-purple-base hover:bg-meta-purple-base/5 flex items-center justify-center transition-all">
                  <Mail size={20} />
                </a>
                <a href={member.linkedin} target="_blank" className="flex-1 bg-slate-50 py-3 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DownloadsSection = ({ showToast }: { showToast: () => void }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const allItems = [
    {
      title: 'Logos METARH',
      format: 'PNG/SVG',
      category: 'Identidade',
      url: 'https://drive.google.com/drive/u/0/folders/15jzc-EUkGx7cZ0karBjjmY63UXCpcc7Z',
      icon: Palette,
      color: 'border-[#470082]',
      image: 'https://metarh.com.br/wp-content/uploads/2026/01/Logotipos-METARH.jpg'
    },
    {
      title: 'Tipografia (Barlow)',
      format: 'Google Fonts',
      category: 'Marca',
      url: 'https://fonts.google.com/specimen/Barlow',
      icon: Type,
      color: 'border-[#ff27f9]',
      image: 'https://metarh.com.br/wp-content/uploads/2026/01/Tipografia-Barlow.png'
    },
    {
      title: 'Template de apresentação 2026',
      format: 'PPTX',
      category: 'Templates',
      url: 'https://docs.google.com/presentation/d/1s317tP9pqK0mUnd5aCgdwWso7s-DlChS/edit?usp=drive_link&ouid=106632360494062962048&rtpof=true&sd=true',
      icon: Layout,
      color: 'border-[#aa3ffe]',
      image: 'https://metarh.com.br/wp-content/uploads/2026/01/Slides-METARH.png'
    },
    {
      title: 'Folha Timbrada',
      format: 'DOCX',
      category: 'Documentos',
      url: 'https://drive.google.com/drive/u/0/folders/1cH7lagmexPhywagS4KxdKN-wHmNG-MAR',
      icon: FileText,
      color: 'border-[#c9f545]',
      image: 'https://metarh.com.br/wp-content/uploads/2026/01/Folha-timbrada.jpg'
    },
    {
      title: 'Criar Assinatura',
      format: 'Link Externo',
      category: 'Templates',
      url: 'https://assinatura-email-metarh.vercel.app/',
      external: true,
      icon: FileSignature,
      color: 'border-[#fff24d]',
      image: 'https://metarh.com.br/wp-content/uploads/2026/01/Assinatura-de-email.jpg'
    },
    {
      title: 'Banco de Imagens',
      format: 'Nuvem',
      category: 'Mídia',
      url: 'https://drive.google.com/drive/folders/1D9W_4Y596hgELDgytHhSBLNeHXqM_hyE?usp=drive_link',
      icon: ImageIcon,
      color: 'border-[#c529ff]',
      image: 'https://metarh.com.br/wp-content/uploads/2026/01/Vintrine-Banco-de-Imagens.png'
    },
    {
      title: 'Capas e Fundos METARH',
      format: 'Capas Linkedin, Meeting, Wallpapers',
      category: 'Mídia',
      url: 'https://drive.google.com/drive/u/0/folders/1I_PLVRVQoOoq9xemEQpX8iW6j87H5ome',
      icon: Monitor,
      color: 'border-slate-400',
      image: 'https://metarh.com.br/wp-content/uploads/2026/01/Fundo-de-Reuniao.png'
    },
    {
      title: 'Guia de Vídeo',
      format: 'PDF',
      category: 'Educação',
      url: 'https://drive.google.com/drive/u/0/folders/1nXW_g9BgVxEde9okiSF0rxAnW4Q3_eRq',
      icon: Video,
      color: 'border-[#ff27f9]',
      image: 'https://metarh.com.br/wp-content/uploads/2026/01/Guia-Gravar-videos.jpg'
    },
    {
      title: 'Linguagem Inclusiva',
      format: 'PDF',
      category: 'Social',
      url: 'https://drive.google.com/file/d/1ikrR1K1Ml11oxi9kvkHaONSnePBkjsF8/view',
      icon: Globe,
      color: 'border-[#c9f545]',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800'
    },
  ];

  const handleDownload = (e: React.MouseEvent, item: typeof allItems[0]) => {
    if (item.title === 'Template de apresentação 2026') {
      e.preventDefault();
      const link = document.createElement('a');
      link.href = 'https://docs.google.com/presentation/d/1s317tP9pqK0mUnd5aCgdwWso7s-DlChS/export/pptx';
      link.download = 'Template_Apresentacao_2026.pptx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast();
    }
  };

  const items = allItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.format.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 className="text-4xl font-black text-meta-purple-deep uppercase tracking-tighter">Recursos Oficiais</h2>
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Busca de recursos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 pr-6 py-3 bg-white rounded-full border border-slate-100 shadow-sm text-sm focus:outline-none focus:ring-4 focus:ring-meta-purple-base/10 w-72 transition-all"
          />
        </div>
      </div>
      <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-5xl">
        Abaixo, você encontra uma seleção de materiais e recursos desenvolvidos pela equipe de Marketing para download. Esses arquivos foram criados para garantir mais praticidade no seu dia a dia, ajudando a manter a identidade visual da marca, otimizar processos e facilitar a criação de conteúdos alinhados ao nosso padrão.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className={`group bg-white rounded-[40px] border-b-4 ${item.color} shadow-sm transition-[box-shadow,transform] duration-500 relative flex flex-col hover:shadow-2xl overflow-hidden hover:-translate-y-1 will-change-transform`}
            style={{ isolation: 'isolate', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
          >
            <a
              href={item.url}
              target="_blank"
              className="block h-full"
              onClick={(e) => handleDownload(e, item)}
            >
              <div className="h-32 relative overflow-hidden rounded-t-[40px]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur rounded-xl text-meta-purple-deep shadow-sm">
                  {item.title === 'Tipografia (Barlow)' ? <span className="font-black px-1 text-xs">Aa</span> : <item.icon size={20} />}
                </div>
              </div>
              <div className="p-8 flex items-center justify-between bg-white rounded-b-[40px]">
                <div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1 block">{item.category}</span>
                  <h3 className="font-black text-slate-900 text-lg mb-1 leading-none">{item.title}</h3>
                  <p className="text-xs text-slate-400 font-medium">{item.format}</p>
                </div>
                <div className="w-10 h-10 bg-slate-50 text-slate-300 rounded-xl flex items-center justify-center group-hover:bg-meta-purple-deep group-hover:text-white transition-all flex-shrink-0 ml-4">
                  {item.title === 'Template de apresentação 2026' ? <Download size={18} /> : (item.external ? <ExternalLink size={18} /> : <Download size={18} />)}
                </div>
              </div>
            </a>
          </div>
        ))}
        {items.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-400 font-medium">
            Nenhum recurso encontrado para "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};

const ResponsibilitiesSection = () => {
  const reps = [
    { title: 'Gestão de Marca', desc: 'Construção e fortalecimento da identidade da METARH, garantindo que sejamos referência no mercado.', icon: ShieldCheck, color: 'text-[#470082]' },
    { title: 'Employer Branding', desc: 'Posicionamento da empresa como ambiente atraente para talentos e clientes de alto impacto.', icon: Briefcase, color: 'text-[#ff27f9]' },
    { title: 'Produção de Conteúdo', desc: 'Criação de histórias estratégicas para blogs e campanhas que conectam com a nossa audiência.', icon: FileText, color: 'text-[#aa3ffe]' },
    { title: 'Gestão de Redes Sociais', desc: 'Relacionamento próximo e interativo com a nossa comunidade digital em todos os canais.', icon: Share2, color: 'text-[#c9f545]' },
    { title: 'Podcast METARH +Cast', desc: 'Conexão profunda através de áudio e vídeo no YouTube e Spotify, além de cortes virais.', icon: Mic, color: 'text-[#fff24d]' },
    { title: 'Geração de Leads e Performance', desc: 'Transformamos audiência em oportunidades reais para o negócio através de funis de conversão.', icon: Zap, color: 'text-[#ff27f9]' },
    { title: 'Gestão de Mídia Paga', desc: 'Alcance estratégico com campanhas otimizadas para impactar o público certo no momento certo.', icon: Megaphone, color: 'text-[#aa3ffe]' },
    { title: 'Análise de Dados e Métricas', desc: 'Monitoramento rigoroso de KPIs para aprimorar continuamente cada ação de marketing.', icon: BarChart3, color: 'text-[#c9f545]' },
    { title: 'Comunicação Interna', desc: 'Fortalecimento da cultura METARH, garantindo que o time esteja alinhado à estratégia.', icon: Globe, color: 'text-[#470082]' },
    { title: 'Apoio Estratégico', desc: 'Parceria com todas as áreas da empresa para potencializar resultados e inovação constante.', icon: Target, color: 'text-[#aa3ffe]' },
  ];

  return (
    <div className="space-y-12 pb-12">
      <header className="max-w-2xl">
        <h2 className="text-4xl font-black text-meta-purple-deep mb-4 uppercase tracking-tighter">Nossas Responsabilidades</h2>
        <p className="text-slate-500 text-lg font-medium leading-relaxed">O marketing da METARH atua em diversas frentes estratégicas para garantir crescimento e consistência.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-8">
        {reps.map((item, i) => (
          <div key={i} className="flex gap-6 items-start bg-white p-8 rounded-[40px] border border-slate-50 shadow-sm hover:shadow-lg transition-all">
            <div className={`w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center ${item.color} flex-shrink-0 shadow-inner`}>
              <item.icon size={28} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-900 leading-none">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MIVSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://metarh.com.br/wp-content/uploads/2025/03/Mockup-MIV-01-scaled.jpg",
    "https://metarh.com.br/wp-content/uploads/2025/03/Vitrines-MIV.png",
    "https://metarh.com.br/wp-content/uploads/2025/03/Vitrines-MIV-03.png",
    "https://metarh.com.br/wp-content/uploads/2025/03/Vitrines-MIV-04.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="space-y-12 pb-12 animate-in fade-in duration-700">
      <div className="bg-white rounded-[32px] shadow-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 min-h-[500px] relative overflow-hidden border border-slate-100">
        <img
          alt="Imagem decorativa de fundo"
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
          src="https://metarh.com.br/wp-content/uploads/2025/03/Sem-Titulo-1.png"
        />

        <div className="md:w-1/2 relative z-10 pr-4 text-left">
          <h2 className="text-4xl lg:text-5xl font-black text-meta-purple-deep mb-6 leading-none tracking-tighter uppercase">
            Manual de <br />Identidade Visual
          </h2>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed font-medium">
            O MIV da METARH reúne as diretrizes essenciais para garantir a consistência e o fortalecimento da nossa marca. Nele, você encontra orientações sobre o uso correto de elementos como cores, tipografia, logos e tom de voz.
          </p>
          <a
            href="https://drive.google.com/drive/u/0/folders/1HtebMp3P4QHmaRgJ39z52Ro7MoR_AgcP"
            target="_blank"
            className="inline-flex items-center gap-3 bg-meta-pink text-white px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl"
          >
            Acesse o MIV
          </a>
        </div>

        <div className="md:w-1/2 flex flex-col items-center relative z-10 w-full">
          <div className="relative w-full aspect-[4/3] flex justify-center items-center group">
            {slides.map((src, index) => (
              <img
                key={index}
                alt={`MIV Preview ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-1'}`}
                src={src}
              />
            ))}
          </div>
          <div className="flex space-x-3 mt-8 justify-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-meta-pink w-10' : 'bg-slate-200 hover:bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: ShieldCheck, title: "Marca Oficial", desc: "Aplicação correta da logo.", color: "bg-meta-purple-deep" },
          { icon: Palette, title: "Paleta Cromática", desc: "Hex, RGB e CMYK oficiais.", color: "bg-meta-pink" },
          { icon: Type, title: "Tipografia", desc: "Barlow e suas variações.", color: "bg-meta-purple-base" },
          { icon: Eye, title: "Uso de Imagens", desc: "Estilo fotográfico e filtros.", color: "bg-meta-lime" }
        ].map((card, i) => (
          <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-50 shadow-sm space-y-3">
            <div className={`w-12 h-12 ${card.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
              <card.icon size={24} />
            </div>
            <h4 className="font-black text-slate-900 leading-none">{card.title}</h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SupportSection = () => (
  <div className="space-y-12 pb-12 animate-in fade-in duration-500">
    <header className="max-w-2xl">
      <h2 className="text-4xl font-black text-meta-purple-deep mb-4 uppercase tracking-tighter">Suporte do Marketing</h2>
      <p className="text-slate-500 text-lg font-medium leading-relaxed">Centralize suas solicitações através de nossos formulários oficiais.</p>
    </header>

    <div className="grid md:grid-cols-2 gap-10">
      <div className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between">
        <div className="space-y-6">
          <div className="w-20 h-20 bg-meta-purple-base rounded-3xl flex items-center justify-center text-white mb-8 shadow-lg">
            <PenTool size={36} />
          </div>
          <div className="flex items-center gap-3">
            <PenTool size={28} className="text-meta-purple-base" />
            <h3 className="text-3xl font-black text-slate-900 leading-none">Solicitação <br />de Criação</h3>
          </div>
          <p className="text-slate-500 font-medium leading-relaxed">
            Precisa de apoio com a comunicação, material gráfico ou apresentação? Clique abaixo e preencha o briefing para que possamos entender sua demanda.
          </p>
          <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 text-meta-purple-base">
            <Clock size={24} />
            <span className="font-bold uppercase text-sm tracking-widest">Prazo: 2 a 5 dias úteis</span>
          </div>
        </div>
        <a
          href="https://forms.monday.com/forms/4734645a2aa856bdba74b3c597e8f7f8?r=use1"
          target="_blank"
          className="mt-12 bg-meta-purple-deep text-white py-5 rounded-full font-black text-center text-lg hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-3"
        >
          <Send size={20} /> Acessar Formulário
        </a>
      </div>

      <div className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between">
        <div className="space-y-6">
          <div className="w-20 h-20 bg-meta-pink rounded-3xl flex items-center justify-center text-white mb-8 shadow-lg">
            <Briefcase size={36} />
          </div>
          <h3 className="text-3xl font-black text-slate-900 leading-none">Divulgação <br />de Vaga</h3>
          <p className="text-slate-500 font-medium leading-relaxed">
            Apoio estratégico para a divulgação de novas oportunidades em nossos canais oficiais e LinkedIn.
          </p>
          <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 text-meta-pink">
            <Clock size={24} />
            <span className="font-bold uppercase text-sm tracking-widest">Prazo: 48 horas úteis</span>
          </div>
        </div>
        <a
          href="https://forms.monday.com/forms/1fa3dcb6e4c21382015e05f5037e30f7?r=use1"
          target="_blank"
          className="mt-12 bg-meta-pink text-white py-5 rounded-full font-black text-center text-lg hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-3"
        >
          <Share2 size={20} /> Solicitar Divulgação
        </a>
      </div>
    </div>
  </div>
);

const RichMaterialsSection = () => (
  <div className="space-y-12 pb-12">
    <div className="bg-gradient-to-r from-meta-pink to-meta-purple-deep p-12 lg:p-20 rounded-[56px] text-white shadow-2xl relative overflow-hidden">
      <div className="max-w-2xl relative z-10">
        <h2 className="text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">Materiais Ricos</h2>
        <p className="text-xl text-white/90 mb-12 leading-relaxed font-medium">
          Coleção exclusiva de materiais para promover aprendizado contínuo e inovação em Diversidade e Inclusão.
        </p>
        <a
          href="https://drive.google.com/drive/folders/18FLMrfqrk6nyeRRA9_teFWOIljMq2VDN"
          target="_blank"
          className="inline-flex items-center gap-4 bg-meta-lime text-meta-purple-deep px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl"
        >
          Download dos Materiais <ArrowRight size={24} />
        </a>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 pointer-events-none translate-x-1/4">
        <FileText size={400} />
      </div>
    </div>
  </div>
);

const SocialSection = () => {
  const social = [
    { name: 'LinkedIn', icon: Linkedin, color: 'bg-[#0077B5]', url: 'https://www.linkedin.com/company/metarhconsultoria', call: 'Conecte-se com nossa rede profissional e acompanhe insights do mercado.' },
    { name: 'Instagram', icon: Instagram, color: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]', url: 'https://www.instagram.com/metarhconsultoria/', call: 'Siga-nos para ver bastidores, novidades e dicas rápidas em tempo real.' },
    { name: 'YouTube', icon: Youtube, color: 'bg-[#FF0000]', url: 'https://www.youtube.com/@metarhconsultoria', call: 'Assista ao METARH +Cast e tutoriais exclusivos em nosso canal.' },
    { name: 'Facebook', icon: Facebook, color: 'bg-[#1877F2]', url: 'https://www.facebook.com/metarhconsultoria', call: 'Interaja com nossa comunidade e não perca nossos eventos.' },
  ];

  return (
    <div className="space-y-12 pb-12 animate-in fade-in duration-500">
      <header className="max-w-3xl space-y-4">
        <h2 className="text-5xl font-black text-meta-purple-deep uppercase tracking-tighter leading-none">
          Nossa Voz Digital
        </h2>
        <p className="text-slate-500 text-xl font-medium leading-relaxed">
          Siga nossos canais oficiais para interagir, engajar e <strong>fortalecer a presença da METARH</strong>. Sua participação ativa impulsiona nossa marca para novos patamares!
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {social.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            className="group bg-white p-10 rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className={`w-24 h-24 ${item.color} rounded-[32px] flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
              <item.icon size={44} />
            </div>
            <div className="space-y-4 relative z-10 flex-1 flex flex-col">
              <h3 className="font-black text-slate-900 text-3xl tracking-tight leading-none uppercase">{item.name}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed flex-1">{item.call}</p>
              <div className="pt-6">
                <span className="inline-flex items-center gap-2 text-meta-pink font-black text-xs uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                  Acessar Rede <ArrowRight size={14} />
                </span>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-slate-50 group-hover:bg-meta-pink transition-colors"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [current, setCurrent] = useState<Section>('home');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 4000);
  };

  const renderContent = () => {
    switch (current) {
      case 'home': return <HomeSection set={setCurrent} />;
      case 'team': return <TeamSection />;
      case 'responsibilities': return <ResponsibilitiesSection />;
      case 'downloads': return <DownloadsSection showToast={showToast} />;
      case 'support': return <SupportSection />;
      case 'miv': return <MIVSection />;
      case 'rich': return <RichMaterialsSection />;
      case 'social': return <SocialSection />;
      default: return <div className="py-20 text-center text-slate-400">Em desenvolvimento...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] font-barlow text-slate-900 selection:bg-meta-pink selection:text-white overflow-hidden flex">
      <Sidebar current={current} set={setCurrent} />
      <main className="flex-1 ml-64 p-8 lg:p-16 custom-scrollbar overflow-y-auto h-screen relative flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-grow">
          {renderContent()}
        </div>
        <footer className="max-w-7xl mx-auto w-full mt-20 pt-8 border-t border-slate-100 pb-12">
          <div className="flex justify-between items-center opacity-40">
            <div className="font-extrabold text-xl tracking-tighter text-meta-purple-deep">METARH <span className="font-light">MARKETING</span></div>
            <div className="text-xs font-bold uppercase tracking-widest">Portal Oficial do Time</div>
          </div>
        </footer>
      </main>

      {/* Toast Notification */}
      <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${toastVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="bg-white border-l-4 border-green-500 shadow-2xl rounded-xl p-6 flex items-start gap-4 max-w-sm">
          <div className="bg-green-100 text-green-600 p-2 rounded-full">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg">Download concluído ✅</h4>
            <p className="text-slate-500 text-sm mt-1">O arquivo foi baixado com sucesso. Verifique a pasta de downloads do seu computador.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
