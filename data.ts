
import { CorporateData, Language } from './types.ts';

export const translations: Record<Language, CorporateData & { restricted: any }> = {
  es: {
    hero: {
      title: "Conectando Mercados Globales desde el Corazón de Europa",
      subtitle: "GrowPoland Investment es un holding líder que gestiona ecosistemas de E-commerce internacionales y facilita el comercio global con eficiencia logística y visión estratégica.",
      cta: "Explorar Oportunidades",
      ctaSecondary: "Conoce Nuestra Red"
    },
    about: {
      badge: "Nuestra Trayectoria",
      title: "Excelencia en Gestión de Activos Digitales",
      description: "Con sede en Polonia, GrowPoland Investment opera como la empresa matriz de una red diversa de negocios de comercio electrónico. Importamos innovación de los principales centros manufactureros del mundo para servir a mercados globales.",
      mission: "Nuestra misión es optimizar la cadena de suministro global a través de tecnología y gestión experta de marcas.",
      vision: "Convertirnos en el puente definitivo entre la calidad polaca y la demanda internacional.",
      missionLabel: "Misión",
      visionLabel: "Visión"
    },
    stats: [
      { label: "Mercados Activos", value: "12+", icon: "Globe" },
      { label: "Marcas Gestionadas", value: "3", icon: "Briefcase" },
      { label: "Proveedores Activos", value: "17", icon: "Truck" },
      { label: "Productos Seleccionados", value: "600+", icon: "Package" }
    ],
    brandsSection: {
      badge: "Unidad de Negocio",
      title: "Portfolio de E-commerce",
      description: "Gestionamos marcas globales con un enfoque en la optimización operativa y la satisfacción del cliente final.",
      viewDetails: "Ver Detalles"
    },
    brands: [
      {
        id: "morleyn-pet",
        name: "Morleyn",
        description: "Líderes en accesorios premium para mascotas. Gestionamos proveedores internacionales para el mercado de retail en el Reino Unido, con expansión a EE.UU., Australia, Alemania y Polonia.",
        market: "Reino Unido (UK)",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
        website: "https://www.morleyn.com/"
      },
      {
        id: "aurelius-apparel",
        name: "Aurelius & Co.",
        description: "Próxima marca de indumentaria masculina y femenina. Actualmente en fase de validación de mercado y construcción de identidad visual para el segmento premium.",
        market: "En Validación / Construcción",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "lumina-artis",
        name: "Lumina Artis",
        description: "Exclusiva línea de joyería artesanal en piedras semipreciosas, Oro y Plata de alta pureza. Uniendo artesanía tradicional con eficiencia operativa.",
        market: "Próximamente",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
      }
    ],
    reviewsSection: {
      badge: "Relaciones Corporativas",
      title: "Opiniones de Nuestra Red Operativa",
      subtitle: "La estabilidad de GrowPoland se basa en el cumplimiento y el trabajo conjunto con profesionales externos."
    },
    reviews: [
      {
        id: "r1",
        author: "Marcus T. Chen",
        position: "Gestor de Suministros",
        company: "Manufacturing Partner",
        content: "Nuestra colaboración con GrowPoland funciona porque sus requerimientos técnicos son consistentes. No hay ambigüedades en sus pedidos, lo que nos permite mantener un flujo de producción estable y sin errores.",
        avatar: "https://i.pravatar.cc/150?img=12"
      },
      {
        id: "r2",
        author: "Sarah L. Jenkins",
        position: "Proveedora Externa",
        company: "Supply & Flow",
        content: "Como proveedora, valoro que ante cualquier desajuste en el stock, resolvemos satisfactoriamente los tiempos de envío. Sus previsiones de inventario son realistas, lo que facilita mucho la coordinación logística.",
        avatar: "https://i.pravatar.cc/150?img=32"
      },
      {
        id: "r3",
        author: "Robert Sterling",
        position: "Consultor Fiscal",
        company: "Independent Audit Firm",
        content: "Auditamos externamente su estructura contable. Destaco la organización de sus asientos financieros; es una administración sin complicaciones que facilita enormemente los procesos de cierre.",
        avatar: "https://i.pravatar.cc/150?img=11"
      },
      {
        id: "r4",
        author: "Elena Voronina",
        position: "Socia Colaboradora",
        company: "Distribution Channel",
        content: "Operamos una parte de su red. GrowPoland es directo: si hay un problema, lo afrontan con honestidad. Ese pragmatismo es lo que hace que la relación comercial sea funcional y duradera.",
        avatar: "https://i.pravatar.cc/150?img=34"
      }
    ],
    exportDivision: {
      badge: "En Desarrollo",
      title: "División de Exportación: Excelencia Polaca",
      description: "Impulsando la manufactura local hacia el escenario global, estamos consolidando una unidad de negocio estratégica dedicada a la futura exportación de productos premium 100 % de origen polaco. Actualmente nos encontramos en una fase rigurosa de auditoría de proveedores y análisis de productos.",
      status: "Análisis y Auditoría",
      statusLabel: "Fase Actual",
      cta: "Contactar como Proveedor",
      socialText: "Consolidando una red de productores polacos de alta calidad.",
      modalTitle: "Registro de Proveedor Polaco",
      modalDescription: "Únase a nuestra red de exportación premium. Estamos auditando productores locales para expansión global.",
      formLabelProduct: "Capacidades Logísticas",
      formPlaceholderProduct: "Describa sus productos clave y capacidades de producción...",
      securityText: "Seguridad GrowPoland: Cifrado Activo"
    },
    blogSection: {
      badge: "Sala de Prensa",
      title: "Últimas Actualizaciones",
      viewAll: "Ver Todas las Noticias",
      readMore: "Leer más"
    },
    blog: [
      {
        id: "1",
        title: "Tendencias de E-commerce en Europa del Este 2026",
        excerpt: "Un análisis profundo sobre el crecimiento del mercado polaco como hub logístico continental en la era post-digital.",
        date: "10 Ene, 2026",
        category: "Insights",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "2",
        title: "El impacto de la IA en la logística de última milla",
        excerpt: "Cómo la automatización y los algoritmos predictivos están redefiniendo los tiempos de entrega globales para 2026.",
        date: "28 Dic, 2025",
        category: "Logística",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
      }
    ],
    contact: {
      title: "Construyamos el futuro del trade.",
      description: "¿Interesado en nuestras capacidades de gestión o en nuestra nueva red de exportación? Nuestro equipo directivo está listo para conversar.",
      emailLabel: "Email Corporativo",
      phoneLabel: "Atención Digital",
      address: "Hoża 29, 00-521 Varsovia, Polonia",
      email: "corporate@growpoland.pl",
      phone: "",
      officeHours: "Lunes - Viernes: 09:00 - 18:00 CET",
      form: {
        name: "Nombre",
        company: "Empresa",
        email: "Email",
        message: "Mensaje",
        submit: "Enviar Consulta"
      }
    },
    footer: {
      description: "Líderes en gestión estratégica de comercio electrónico y facilitadores de expansión comercial internacional desde Varsovia.",
      company: "Compañía",
      support: "Soporte",
      contact: "Contacto",
      links: {
        about: "Sobre Nosotros",
        brands: "Nuestras Marcas",
        export: "División Exportación",
        careers: "Carreras",
        news: "Sala de Prensa",
        investors: "Inversores",
        privacy: "Privacidad",
        terms: "Términos"
      },
      madeIn: "Hecho con excelencia en Polonia",
      rights: "Todos los derechos reservados."
    },
    navigation: {
      start: "Inicio",
      about: "Nosotros",
      portfolio: "Portfolio",
      export: "Exportación",
      news: "Noticias",
      admin: "Portal Socio"
    },
    restricted: {
      title: "Acceso Restringido",
      subtitle: "Esta zona es de uso exclusivo para socios y accionistas de GrowPoland Investment.",
      description: "Por favor, introduzca sus credenciales corporativas para continuar o contacte con su gestor de cuenta.",
      back: "Volver al Inicio",
      badge: "Zona Privada",
      error: "Credenciales no válidas. Acceso denegado por el Portal de Seguridad de GrowPoland."
    }
  },
  en: {
    hero: {
      title: "Connecting Global Markets from the Heart of Europe",
      subtitle: "GrowPoland Investment is a leading holding company managing international E-commerce ecosystems and facilitating global trade with logistical efficiency and strategic vision.",
      cta: "Explore Opportunities",
      ctaSecondary: "Our Network"
    },
    about: {
      badge: "Our Track Record",
      title: "Excellence in Digital Asset Management",
      description: "Based in Poland, GrowPoland Investment operates as the parent company for a diverse network of e-commerce businesses.",
      mission: "Our mission is to optimize the global supply chain through technology and expert brand management.",
      vision: "To become the ultimate bridge between Polish quality and international demand.",
      missionLabel: "Mission",
      visionLabel: "Vision"
    },
    stats: [
      { label: "Active Markets", value: "12+", icon: "Globe" },
      { label: "Managed Brands", value: "3", icon: "Briefcase" },
      { label: "Active Suppliers", value: "17", icon: "Truck" },
      { label: "Selected Products", value: "600+", icon: "Package" }
    ],
    brandsSection: {
      badge: "Business Unit",
      title: "E-commerce Portfolio",
      description: "We manage global brands with a focus on operational optimization and end-customer satisfaction.",
      viewDetails: "View Details"
    },
    brands: [
      {
        id: "morleyn-pet",
        name: "Morleyn",
        description: "Leaders in premium pet accessories. We manage international suppliers for the UK retail market.",
        market: "United Kingdom (UK)",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
        website: "https://www.morleyn.com/"
      },
      {
        id: "aurelius-apparel",
        name: "Aurelius & Co.",
        description: "Upcoming men's and women's apparel brand. Currently in validation phase.",
        market: "In Validation / Construction",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "lumina-artis",
        name: "Lumina Artis",
        description: "Exclusive line of artisanal jewelry featuring semi-precious stones.",
        market: "Coming Soon",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
      }
    ],
    reviewsSection: {
      badge: "Corporate Relations",
      title: "Feedback from Our Network",
      subtitle: "GrowPoland's stability is built on compliance and long-term work with external professionals."
    },
    reviews: [
      {
        id: "r1",
        author: "Marcus T. Chen",
        position: "Supply Manager",
        company: "International Manufacturer",
        content: "Our collaboration with GrowPoland works because their technical requirements are consistent. There are no ambiguities in their orders, allowing us to maintain a stable and error-free production flow.",
        avatar: "https://i.pravatar.cc/150?img=12"
      },
      {
        id: "r2",
        author: "Sarah L. Jenkins",
        position: "External Supplier",
        company: "Supply & Flow",
        content: "As a supplier, I value that when stock imbalances occur, we resolve shipping times satisfactorily. Their inventory forecasts are realistic, which greatly simplifies logistical coordination.",
        avatar: "https://i.pravatar.cc/150?img=32"
      },
      {
        id: "r3",
        author: "Robert Sterling",
        position: "Tax Advisor",
        company: "External Accounting Firm",
        content: "We externally audit their accounting structure. I highlight the organization of their financial records; it's a straightforward administration that significantly eases the closing processes.",
        avatar: "https://i.pravatar.cc/150?img=11"
      },
      {
        id: "r4",
        author: "Elena Voronina",
        position: "Channel Partner",
        company: "Distribution Network",
        content: "We operate part of their network. GrowPoland is direct: if there's a problem, they face it honestly. That pragmatism is what makes the business relationship functional and lasting.",
        avatar: "https://i.pravatar.cc/150?img=34"
      }
    ],
    exportDivision: {
      badge: "In Development",
      title: "Export Division: Polish Excellence",
      description: "Propelling local manufacturing onto the global stage, we are consolidating a strategic business unit dedicated to the future export of 100% Polish-origin products.",
      status: "Audit & Analysis",
      statusLabel: "Current Phase",
      cta: "Inquire as Supplier",
      socialText: "Consolidating a network of high-performance local producers.",
      modalTitle: "Polish Supplier Inquiry",
      modalDescription: "Join our premium export network. We are currently auditing local producers for global expansion into UK, USA, and Australia.",
      formLabelProduct: "Logistics Capabilities",
      formPlaceholderProduct: "Describe your key products and manufacturing capacity...",
      securityText: "GrowPoland Security: Active Encryption"
    },
    blogSection: {
      badge: "Press Room",
      title: "Latest Updates",
      viewAll: "See All News",
      readMore: "Read more"
    },
    blog: [
      {
        id: "1",
        title: "E-commerce Trends in Eastern Europe 2026",
        excerpt: "An in-depth analysis of the Polish market's growth as a continental logistics hub.",
        date: "Jan 10, 2026",
        category: "Insights",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "2",
        title: "The impact of AI on last-mile logistics",
        excerpt: "How automation and predictive algorithms are redefining global delivery times.",
        date: "Dec 28, 2025",
        category: "Logistics",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
      }
    ],
    contact: {
      title: "Let's build the future of trade.",
      description: "Interested in our management capabilities or our new export network? Our team is ready to talk.",
      emailLabel: "Corporate Email",
      phoneLabel: "Digital Contact",
      address: "Hoża 29, 00-521 Warsaw, Poland",
      email: "corporate@growpoland.pl",
      phone: "",
      officeHours: "Mon - Fri: 09:00 - 18:00 CET",
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        message: "Message",
        submit: "Send Inquiry"
      }
    },
    footer: {
      description: "Leaders in strategic e-commerce management and facilitators of international trade expansion from Warsaw.",
      company: "Company",
      support: "Support",
      contact: "Contact",
      links: {
        about: "About Us",
        brands: "Our Brands",
        export: "Export Division",
        careers: "Careers",
        news: "Press Room",
        investors: "Investors",
        privacy: "Privacy",
        terms: "Legal"
      },
      madeIn: "Made with excellence in Poland",
      rights: "All rights reserved."
    },
    navigation: {
      start: "Home",
      about: "About",
      portfolio: "Portfolio",
      export: "Export",
      news: "News",
      admin: "Partner Portal"
    },
    restricted: {
      title: "Restricted Access",
      subtitle: "This area is exclusively for GrowPoland Investment partners and shareholders.",
      description: "Please enter your corporate credentials to continue.",
      back: "Back to Home",
      badge: "Private Zone",
      error: "Invalid credentials. Access denied by GrowPoland Security Gateway."
    }
  },
  pl: {
    hero: {
      title: "Łączenie Globalnych Rynków z Serca Europy",
      subtitle: "GrowPoland Investment to wiodący holding zarządzający międzynarodowymi ekosystemami E-commerce i ułatwiający globalny handel.",
      cta: "Poznaj Możliwości",
      ctaSecondary: "Nasza Sieć"
    },
    about: {
      badge: "Nasza Historia",
      title: "Doskonałość w Zarządzaniu Aktywami Cyfrowymi",
      description: "Z siedzibą en Polsce, GrowPoland Investment działa jako spółka matka dla zróżnicowanej sieci firm e-commerce.",
      mission: "Naszą misją jest optymalizacja globalnego łańcucha dostaw poprzez technologię.",
      vision: "Stać się pomostem między polską jakością a międzynarodowym popytem.",
      missionLabel: "Misja",
      visionLabel: "Wizja"
    },
    stats: [
      { label: "Aktywne Rynki", value: "12+", icon: "Globe" },
      { label: "Zarządzane Marki", value: "3", icon: "Briefcase" },
      { label: "Aktywni Dostawcy", value: "17", icon: "Truck" },
      { label: "Wybrane Produkty", value: "600+", icon: "Package" }
    ],
    brandsSection: {
      badge: "Jednostka Biznesowa",
      title: "Portfolio E-commerce",
      description: "Zarządzamy globalnymi markami, koncentrując się na optymalizacji operacyjnej.",
      viewDetails: "Zobacz Szczegóły"
    },
    brands: [
      {
        id: "morleyn-pet",
        name: "Morleyn",
        description: "Liderzy w akcesoriach premium dla zwierząt. Zarządzamy międzynarodowymi dostawcami.",
        market: "Wielka Brytania (UK)",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
        website: "https://www.morleyn.com/"
      },
      {
        id: "aurelius-apparel",
        name: "Aurelius & Co.",
        description: "Nadchodząca marka odzieży męskiej i damskiej.",
        market: "W trakcie walidacji",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "lumina-artis",
        name: "Lumina Artis",
        description: "Ekskluzywna linia biżuterii rzemieślniczej.",
        market: "Wkrótce",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
      }
    ],
    reviewsSection: {
      badge: "Relacje Korporacyjne",
      title: "Opinie Naszej Sieci Operacyjnej",
      subtitle: "Stabilność GrowPoland opiera się na przestrzeganiu zasad i współpracy z profesjonalistami."
    },
    reviews: [
      {
        id: "r1",
        author: "Marcus T. Chen",
        position: "Supply Manager",
        company: "International Manufacturer",
        content: "Nasza współpraca z GrowPoland działa, ponieważ ich wymagania techniczne są spójne. W ich zamówieniach nie ma dwuznaczności, co pozwala nam utrzymać stabilny i bezbłędny przepływ produkcji.",
        avatar: "https://i.pravatar.cc/150?img=12"
      },
      {
        id: "r2",
        author: "Sarah L. Jenkins",
        position: "Zewnętrzny Dostawca",
        company: "Supply & Flow",
        content: "Jako dostawca cenię to, że w przypadku nierównowagi zapasów, satysfakcjonująco rozwiązujemy czasy wysyłki. Ich prognozy zapasów są realistyczne, co znacznie upraszcza koordynację logistyczną.",
        avatar: "https://i.pravatar.cc/150?img=32"
      },
      {
        id: "r3",
        author: "Robert Sterling",
        position: "Tax Advisor",
        company: "Audit Firm",
        content: "Audytujemy zewnętrznie ich strukturę księgową. Podkreślam organizację ich zapisów finansowych; to prosta administracja, która znacznie ułatwia procesy zamknięcia.",
        avatar: "https://i.pravatar.cc/150?img=11"
      },
      {
        id: "r4",
        author: "Elena Voronina",
        position: "Channel Partner",
        company: "Distribution Network",
        content: "Obsługujemy część ich sieci. GrowPoland jest bezpośredni: jeśli jest problem, stawiają mu czoła uczciwie. Ten pragmatyzm sprawia, że relacja biznesowa jest funkcjonalna i trwała.",
        avatar: "https://i.pravatar.cc/150?img=34"
      }
    ],
    exportDivision: {
      badge: "W Rozwoju",
      title: "Dział Eksportu: Polska Doskonałość",
      description: "Wprowadzając lokalną produkcję na scenę globalną, tworzymy strategiczną jednostkę biznesową.",
      status: "Audyt i Analiza",
      statusLabel: "Obecna Faza",
      cta: "Kontakt dla Dostawców",
      socialText: "Budowanie sieci wysokowydajnych producentów lokalnych.",
      modalTitle: "Rejestracja Polskiego Dostawcy",
      modalDescription: "Dołącz do naszej sieci eksportowej premium. Obecnie audytujemy lokalnych producentów pod kątem ekspansji globalnej.",
      formLabelProduct: "Możliwości logistyczne",
      formPlaceholderProduct: "Opisz swoje kluczowe produkty i moce produkcyjne...",
      securityText: "Bezpieczeństwo GrowPoland: Aktywne Szyfrowanie"
    },
    blogSection: {
      badge: "Biuro Prasowe",
      title: "Ostatnie Aktualizacje",
      viewAll: "Zobacz wszystkie wiadomości",
      readMore: "Czytaj więcej"
    },
    blog: [
      {
        id: "1",
        title: "Trendy E-commerce w Europie Wschodniej 2026",
        excerpt: "Głęboka analiza wzrostu polskiego rynku jako hubu logistycznego.",
        date: "10 sty 2026",
        category: "Wnioski",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "2",
        title: "Wpływ AI na logistykę ostatniej mili",
        excerpt: "Jak automatyzacja i algorytmy predykcyjne redefiniują globalne czasy dostaw.",
        date: "28 gru 2025",
        category: "Logistyka",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
      }
    ],
    contact: {
      title: "Budujmy razem przyszłość handlu.",
      description: "Zainteresowany naszymi możliwościami zarządzania? Nasz zespół jest gotowy do rozmowy.",
      emailLabel: "Email Korporacyjny",
      phoneLabel: "Kontakt Cyfrowy",
      address: "Hoża 29, 00-521 Warszawa, Polska",
      email: "corporate@growpoland.pl",
      phone: "",
      officeHours: "Pon - Pt: 09:00 - 18:00 CET",
      form: {
        name: "Imię i Nazwisko",
        company: "Firma",
        email: "Email",
        message: "Wiadomość",
        submit: "Wyślij zapytanie"
      }
    },
    footer: {
      description: "Liderzy en strategicznym zarządzaniu e-commerce z Warszawy.",
      company: "Firma",
      support: "Wsparcie",
      contact: "Kontakt",
      links: {
        about: "O nas",
        brands: "Nasze marki",
        export: "Dział eksportu",
        careers: "Kariera",
        news: "Biuro prasowe",
        investors: "Inwestorzy",
        privacy: "Prywatność",
        terms: "Warunki"
      },
      madeIn: "Wykonano z doskonałością w Polsce",
      rights: "Wszelkie prawa zastrzeżone."
    },
    navigation: {
      start: "Start",
      about: "O nas",
      portfolio: "Portfolio",
      export: "Eksport",
      news: "Aktualności",
      admin: "Portal Partnera"
    },
    restricted: {
      title: "Dostęp Ograniczony",
      subtitle: "Ten obszar jest przeznaczony wyłącznie dla partnerów.",
      description: "Wprowadź swoje dane korporacyjne, aby kontynuować.",
      back: "Powrót",
      badge: "Strefa Prywatna",
      error: "Nieprawidłowe dane logowania."
    }
  }
};
