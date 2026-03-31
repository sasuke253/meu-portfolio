// Dados Dinâmicos e Traduções
const data = {
  pt: {
    nav: { sobre: "Sobre", projetos: "Projetos", skills: "Skills", contato: "Contato" },
    hero: {
      title: "Sites modernos e rápidos <br>para <span>fazer seu negócio crescer</span>",
      aboutTitle: "Sobre Mim",
      aboutText: `<p>Sou desenvolvedor web e fundador da SideOut, focado em criar sites modernos, rápidos e que realmente geram resultados. Meu objetivo não é só desenvolver um site bonito, mas sim ajudar negócios a crescerem e se destacarem online.</p>
                  <p>Trabalho com tecnologias como React e JavaScript, criando landing pages, sites institucionais e soluções personalizadas. Cada projeto é pensado para oferecer uma experiência profissional, responsiva e otimizada para conversão.</p>
                  <p>Na SideOut, transformo ideias em projetos reais, sempre buscando qualidade, performance e um design que chama atenção. Se você precisa de um site que realmente funcione, posso te ajudar.</p>`,
      typewriter: [
        "Desenvolvedor Web Front-End", 
        "Fundador da agência SideOut", 
        "Especialista em Landing Pages", 
        "Focado em Taxa de Conversão"
      ],
      cta: "Fazer um Orçamento no WhatsApp"
    },
    projects: {
      title: "Meus Projetos",
      items: [
        {
          id: "advocacia",
          image: "assets/advocacia.png",
          name: "A&C Advocacia",
          short_desc: "Site institucional premium focado em alta conversão e presença digital jurídica.",
          full_desc: "O projeto A&C Advocacia foi desenhado para transmitir credibilidade e experiência no ambiente digital. A interface explora contrastes do Dark Mode com tons de ouro, entregando performance otimizada e um design responsivo de elite.",
          tags: ["HTML5", "CSS3", "JavaScript"],
          live_link: "https://sasuke253.github.io/AeCadvocacia/",
          github_link: "https://github.com/sasuke253/AeCadvocacia",
          link_view: "Ver Detalhes"
        },
        {
          id: "dash",
          image: "assets/dashboard.png",
          name: "Dashboard Pro",
          short_desc: "Sistema de gerenciamento completo com gráficos em tempo real.",
          full_desc: "Dashboard Pro é um sistema financeiro focado em UX para análise de dados. Interface limpa, painéis modulares e integração com websockets para garantir que os dados reflitam alterações em milissegundos.",
          tags: ["React", "Firebase", "Chart.js"],
          live_link: "#",
          github_link: "#",
          link_view: "Detalhes do Case"
        },
        {
          id: "mobile",
          image: "assets/mobile.png",
          name: "Mobile App",
          short_desc: "App e-commerce estético que impulsiona geração de leads.",
          full_desc: "Um aplicativo de vendas e catálogos que transformou a retenção de usuários. Focado em UX minimalista e navegação sem atritos, garantindo fluidez nativa a 60 frames por segundo.",
          tags: ["React Native", "UI/UX", "Redux"],
          live_link: "#",
          github_link: "#",
          link_view: "Ler sobre o App"
        },
        {
          id: "sales",
          image: "assets/stripe.png",
          name: "Lumina Payments",
          short_desc: "Plataforma SaaS Fintech focada em pagamentos de alta conversão.",
          full_desc: "Gateway de pagamentos fictício com painel de controle elegante, integração global de moedas e dashboard de inteligência financeira. Design premium inspirado nos maiores unicórnios tech, focado em alta visibilidade e confiabilidade institucional.",
          tags: ["Next.js", "Tailwind", "FinTech"],
          live_link: "#",
          github_link: "#",
          link_view: "Ver Funcionalidades"
        }
      ]
    },
    skills: {
      title: "Minhas Skills",
      items: [
        { icon: "atom", name: "React", color: "#61DAFB" },
        { icon: "file-json-2", name: "JavaScript", color: "#F7DF1E" },
        { icon: "file-code-2", name: "TypeScript", color: "#3178C6" },
        { icon: "panels-top-left", name: "HTML/CSS", color: "#FF5722" },
        { icon: "terminal-square", name: "Python", color: "#FFD43B" },
        { icon: "server", name: "Node.js", color: "#339933" },
        { icon: "palette", name: "UI/UX", color: "#E040FB" },
        { icon: "container", name: "Docker", color: "#2496ED" }
      ]
    },
    contact: {
      title: "Fale Comigo",
      subtitle: "Vamos conversar!",
      desc: "Estou disponível para freelance, oportunidades de trabalho ou apenas para trocar uma ideia. Sinta-se à vontade para me enviar uma mensagem.",
      location: "Brasil",
      form: {
        name: "Nome", email: "Email", msg: "Mensagem", btn: "Enviar Mensagem"
      }
    },
    footer: { text: "© 2026 SideOut. Feito com", code: "e código." }
  },
  en: {
    nav: { sobre: "About", projetos: "Projects", skills: "Skills", contato: "Contact" },
    hero: {
      title: "Modern and fast websites <br>to <span>make your business grow</span>",
      aboutTitle: "About Me",
      aboutText: `<p>I am a web developer and founder of SideOut, focused on creating modern, fast websites that actually deliver results. My goal is not just to build a beautiful site, but to help businesses scale and stand out online.</p>
                  <p>I work with technologies like React and JavaScript, building landing pages, corporate sites, and custom solutions. Every single project is crafted to provide a professional, responsive, and conversion-optimized experience.</p>
                  <p>At SideOut, I turn ideas into real digital products, always aiming for code quality, performance, and eye-catching aesthetics. If you need a website that truly performs, I can help you.</p>`,
      typewriter: [
        "Front-End Web Developer", 
        "Founder of SideOut Agency", 
        "Landing Page Specialist", 
        "Focused on Conversion Rates"
      ],
      cta: "Get a Quote via WhatsApp"
    },
    projects: {
      title: "My Projects",
      items: [
        {
          id: "advocacia",
          image: "assets/advocacia.png",
          name: "A&C Advocacia",
          short_desc: "Premium institutional website focused on high conversion and digital presence.",
          full_desc: "The A&C Advocacia project was designed to convey credibility and legal expertise. The interface explores contrasts of Dark Mode with gold accents, delivering optimized performance and elite responsive design.",
          tags: ["HTML5", "CSS3", "JavaScript"],
          live_link: "https://sasuke253.github.io/AeCadvocacia/",
          github_link: "https://github.com/sasuke253/AeCadvocacia",
          link_view: "View Details"
        },
        {
          id: "dash",
          image: "assets/dashboard.png",
          name: "Dashboard Pro",
          short_desc: "Complete management system with real-time analytics charts.",
          full_desc: "Dashboard Pro is a financial platform focused on UX for data analysis. Clean interface, modular panels, and websocket integration ensuring data reflects changes in milliseconds.",
          tags: ["React", "Firebase", "Chart.js"],
          live_link: "#",
          github_link: "#",
          link_view: "Case Details"
        },
        {
          id: "mobile",
          image: "assets/mobile.png",
          name: "Mobile App",
          short_desc: "Aesthetic e-commerce app that boosts generated leads.",
          full_desc: "A sales and catalog application that transformed user retention using minimalist UX and frictionless navigation for 60fps native fluidity.",
          tags: ["React Native", "UI/UX", "Redux"],
          live_link: "#",
          github_link: "#",
          link_view: "Read about App"
        },
        {
          id: "sales",
          image: "assets/stripe.png",
          name: "Lumina Payments",
          short_desc: "Fintech SaaS platform focused on high-conversion payments.",
          full_desc: "Fictional payment gateway featuring a sleek dashboard, global currency integration, and financial intelligence dashboard. Premium design inspired by major tech unicorns, prioritizing deep institutional trust and visibility.",
          tags: ["Next.js", "Tailwind", "FinTech"],
          live_link: "#",
          github_link: "#",
          link_view: "View Features"
        }
      ]
    },
    skills: {
      title: "My Skills",
      items: [
        { icon: "atom", name: "React", color: "#61DAFB" },
        { icon: "file-json-2", name: "JavaScript", color: "#F7DF1E" },
        { icon: "file-code-2", name: "TypeScript", color: "#3178C6" },
        { icon: "panels-top-left", name: "HTML/CSS", color: "#FF5722" },
        { icon: "terminal-square", name: "Python", color: "#FFD43B" },
        { icon: "server", name: "Node.js", color: "#339933" },
        { icon: "palette", name: "UI/UX", color: "#E040FB" },
        { icon: "container", name: "Docker", color: "#2496ED" }
      ]
    },
    contact: {
      title: "Contact Me",
      subtitle: "Let's talk!",
      desc: "I'm available for freelance projects, job opportunities, or just to exchange some ideas. Feel free to reach out to me below.",
      location: "Brazil",
      form: {
        name: "Name", email: "Email", msg: "Message", btn: "Send Message"
      }
    },
    footer: { text: "© 2026 SideOut. Built with", code: "and code."}
  }
};

let currentLang = 'pt';
let typewriterTimeout = null;

// ==========================================
// INICIALIZAÇÃO E IDIOMA
// ==========================================

function renderContent() {
  const d = data[currentLang];
  
  // Atualiza Textos Estáticos
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.getAttribute('data-i18n').split('.');
    let val = d;
    keys.forEach(k => val = val[k]);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if(el.placeholder) el.placeholder = val;
    } else {
        el.innerHTML = val;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const keys = el.getAttribute('data-i18n-html').split('.');
    let val = d;
    keys.forEach(k => val = val[k]);
    el.innerHTML = val;
  });

  // Renderiza as Skills
  const skillsContainer = document.getElementById('skills-container');
  if(skillsContainer) {
    skillsContainer.innerHTML = d.skills.items.map((skill, index) => `
      <div class="skill-card stagger-item interactive" style="animation-delay: ${0.1 + (index * 0.1)}s; --skill-color: ${skill.color}">
        <div class="skill-icon"><i data-lucide="${skill.icon}"></i></div>
        <div class="skill-name">${skill.name}</div>
      </div>
    `).join('');
  }

  // Renderiza os Projetos (Passando index pro botão de modal)
  const projectsContainer = document.getElementById('projects-container');
  if(projectsContainer) {
    projectsContainer.innerHTML = d.projects.items.map((proj, index) => `
      <article class="project-card stagger-item interactive ${index === 0 ? 'featured' : ''}" style="animation-delay: ${0.1 + (index * 0.1)}s">
        <div class="project-image">
          <img src="${proj.image}" alt="${proj.name}">
        </div>
        <div class="project-info">
          <h3>${proj.name}</h3>
          <p>${proj.short_desc}</p>
          <div class="project-tags">
            ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="project-links" style="flex-wrap: wrap;">
            ${proj.live_link !== '#' ? `<a href="${proj.live_link}" target="_blank" class="project-link secondary interactive" onclick="event.stopPropagation()"><i data-lucide="external-link"></i> Live Demo</a>` : ''}
            ${proj.github_link !== '#' ? `<a href="${proj.github_link}" target="_blank" class="project-link secondary interactive" onclick="event.stopPropagation()"><i data-lucide="github"></i> Code</a>` : ''}
            <button class="project-link primary interactive" onclick="openModal(${index})"><i data-lucide="info"></i> ${proj.link_view}</button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Recompila os ícones nas tags recém-renderizadas
  if(window.lucide) lucide.createIcons();

  // Aplica o 3D Tilt Cards (Vanilla Tilt - Sugestão #2)
  if (typeof VanillaTilt !== "undefined") {
    // Destrói os antigos se houver
    document.querySelectorAll('.project-card, .skill-card').forEach(el => el.vanillaTilt && el.vanillaTilt.destroy());
    VanillaTilt.init(document.querySelectorAll('.project-card, .skill-card'), {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.1,
    });
  }

  // Reseta Máquina de Escrever
  initTypewriter(d.hero.typewriter);

}


document.addEventListener('DOMContentLoaded', () => {

  const langToggle = document.getElementById('lang-toggle');

  // Evento de Troca de Idioma (Sugestão #4)
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    langToggle.innerText = currentLang === 'pt' ? 'EN' : 'PT';
    renderContent();
  });

  // Primeira Renderização
  renderContent();

  // ==========================================
  // LÓGICA DE ABAS (TABS) E STAGGER ITEMS
  // ==========================================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Adiciona delay nos staggers estáticos
  document.querySelectorAll('.tab-content').forEach(tab => {
    const staticStaggers = tab.querySelectorAll('.hero h1, .hero p, .hero .social-links, .about-text, .contact-info, .contact-form, .section-title');
    staticStaggers.forEach((item, index) => {
      item.classList.add('stagger-item');
      item.style.animationDelay = `${0.1 + (index * 0.1)}s`;
    });
  });

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });


  // ==========================================
  // MODAL LOGIC (Sugestão #3)
  // ==========================================
  const modalOverlay = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');

  window.openModal = function(index) {
    const proj = data[currentLang].projects.items[index];
    const modalIconDiv = document.getElementById('modal-icon');
    modalIconDiv.style.height = 'auto';
    modalIconDiv.style.margin = '0 0 24px 0'; // Reseta a margem negativa velha
    modalIconDiv.style.display = 'flex';
    modalIconDiv.style.justifyContent = 'center';
    modalIconDiv.innerHTML = `
      <div style="width: 140px; height: 140px; margin-top: 16px; border-radius: 50%; overflow: hidden; border: 4px solid var(--surface); box-shadow: 0 10px 30px rgba(0,0,0,0.8);">
        <img src="${proj.image}" alt="${proj.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: top center;">
      </div>
    `;
    document.getElementById('modal-title').innerText = proj.name;
    document.getElementById('modal-desc').innerText = proj.full_desc;
    document.getElementById('modal-tags').innerHTML = proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    let linksHTML = '';
    if (proj.live_link !== '#') {
      linksHTML += `<a href="${proj.live_link}" class="project-link primary interactive" target="_blank" style="padding: 12px 24px; font-size: 1rem;"><i data-lucide="external-link"></i> Live Demo</a>`;
    }
    if (proj.github_link !== '#') {
      linksHTML += `<a href="${proj.github_link}" class="project-link secondary interactive" target="_blank" style="padding: 12px 24px; font-size: 1rem;"><i data-lucide="github"></i> Repository</a>`;
    }
    
    if (linksHTML === '') {
      linksHTML = `<button class="project-link secondary interactive" onclick="document.getElementById('project-modal').classList.remove('open')" style="padding: 12px 24px; font-size: 1rem;">${currentLang === 'pt' ? 'Fechar Modal' : 'Close Modal'}</button>`;
    }
    
    document.getElementById('modal-links').innerHTML = linksHTML;
    
    lucide.createIcons();
    modalOverlay.classList.add('open');
  };

  modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('open');
  });

  // Fechar clicando fora do quadro
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('open');
  });

});

// ==========================================
// MÁQUINA DE ESCREVER (Sugestão #5 Adaptada)
// ==========================================
function initTypewriter(words) {
  const twElement = document.getElementById('typewriter');
  if (!twElement) return;
  
  // Limpa o loop anterior caso alguém aperte o botão de linguagem no meio da animação
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) charIndex--; else charIndex++;
    
    twElement.textContent = currentWord.substring(0, charIndex);
    let typeSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400;
    }
    typewriterTimeout = setTimeout(type, typeSpeed);
  }
  type();
}

// ==========================================
// ROTEAMENTO DO FORMULÁRIO PARA WHATSAPP
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const btn = contactForm.querySelector('.submit-btn');
      const originalText = btn.innerHTML;
      
      // Feedback visual rápido
      btn.innerHTML = `<i data-lucide="check-circle"></i> <span style="margin-left:8px;">Conectando...</span>`;
      lucide.createIcons();
      
      // Captura de dados
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const msg = document.getElementById('mensagem').value;
      
      // Montagem da mensagem formatada pro WhatsApp
      const numeroWhatsApp = "5561998248425"; // O número que está no index
      const texto = `Olá equipe SideOut! Vim pelo portfólio da agência.\n\n*Nome:* ${nome}\n*Email:* ${email}\n\n*Mensagem:* ${msg}`;
      const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(texto)}`;
      
      // Redireciona e reseta
      setTimeout(() => {
        window.open(url, '_blank');
        btn.innerHTML = originalText;
        contactForm.reset();
        lucide.createIcons();
      }, 600);
    });
  }
});

// ==========================================
// ROTEAMENTO INTELIGENTE DO LINK DE EMAIL
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const emailLink = document.getElementById('email-icon-link');
  if (emailLink) {
    emailLink.addEventListener('click', (e) => {
      // Checa se o usuário está acessando do celular
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Se NÃO for celular (for PC/Mac), bloqueamos a abertura do App Quebrado 
      // e forçamos a abertura de uma nova aba direto no site do GMAIL
      if (!isMobile) {
        e.preventDefault(); 
        const email = "sideout.df@gmail.com";
        const subject = encodeURIComponent("Contato via Portfólio");
        const body = encodeURIComponent("Olá equipe SideOut, vim pelo portfólio da agência. Gostaria de conversar sobre um projeto.");
        
        // Abre na interface de Nova Mensagem do Gmail web
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank');
      }
      
      // NOTA: Se FOR mobile, o JS é ignorado e o Link 
      // chama o [href="mailto:..."] nativamente abrindo o App de Email do celular!
    });
  }
});

