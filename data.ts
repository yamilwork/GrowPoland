
import { CorporateData, Language } from './types.ts';

export const translations: Record<Language, CorporateData & { restricted: any; legal: any }> = {
  es: {
    hero: {
      title: "Conectando Mercados Globales desde el Corazón de Europa",
      subtitle: "GrowPoland Investment es un holding líder que gestiona ecosistemas de E-commerce internacionales y facilita el comercio global con eficiencia logística y visión estratégica.",
      cta: "Explorar Oportunidades",
      ctaSecondary: "Conoce Nuestra Red"
    },
    about: {
      badge: "Nuestra Filosofía",
      title: "Agilidad Tecnológica, Compromiso Humano",
      description: "En GrowPoland Investment, impulsamos el futuro del comercio a través de la sinergia. Integramos Inteligencia Artificial y automatización avanzada para dotar a nuestros procesos de una agilidad y precisión excepcionales en la logística global. Sin embargo, creemos que el verdadero valor reside en el equilibrio: potenciamos nuestra tecnología con el criterio y la empatía de un equipo humano que audita cada proceso y brinda un soporte cercano, asegurando que la eficiencia digital nunca comprometa la calidez del servicio.",
      mission: "Optimizar la cadena de suministro mediante IA avanzada, garantizando que cada interacción final sea gestionada por personas comprometidas con la excelencia.",
      vision: "Ser el puente definitivo donde la máxima velocidad tecnológica se encuentra con la responsabilidad y cercanía de un equipo humano excepcional.",
      missionLabel: "Nuestra Propuesta",
      visionLabel: "Sinergia Tecnológica"
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
      description: "Impulsando la manufactura local hacia el escenario global, estamos consolidando una unidad de negocio estratégica dedicada a la futura exportación de productos premium 100 % de origen polaco.",
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
        excerpt: "Un análisis profundo sobre el crecimiento del mercado polaco como hub logístico continental.",
        date: "10 Ene, 2026",
        category: "Insights",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "2",
        title: "El impacto de la IA en la logística de última milla",
        excerpt: "Cómo la automatización y los algoritmos predictivos están redefiniendo los tiempos de entrega.",
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
      email: "corporate@growpoland.com",
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
      description: "Por favor, introduzca sus credenciales corporativas para continuar.",
      back: "Volver al Inicio",
      badge: "Zona Privada",
      error: "Credenciales no válidas. Acceso denegado."
    },
    legal: {
      privacy: {
        title: "Política de Privacidad",
        content: "En GrowPoland Investment, nos tomamos en serio la seguridad de sus datos corporativos. Toda información recopilada a través de nuestros canales de contacto es tratada con el máximo rigor de cifrado conforme a la GDPR europea. No compartimos sus datos con terceros sin consentimiento explícito."
      },
      terms: {
        title: "Términos y Condiciones",
        content: "El acceso a este portal está regulado por las leyes de comercio internacional de Polonia y la Unión Europea. El uso de nuestra red de proveedores y canales de distribución está sujeto a acuerdos de confidencialidad específicos."
      }
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
      badge: "Our Philosophy",
      title: "Technological Agility, Human Commitment",
      description: "At GrowPoland Investment, we power the future of commerce through synergy. We integrate Artificial Intelligence and advanced automation to provide our processes with exceptional agility and precision in global logistics. However, we believe true value lies in balance: we enhance our technology with the judgment and empathy of an expert human team that audits every process and provides close support, ensuring that digital efficiency never compromises service warmth.",
      mission: "To optimize the supply chain through advanced AI while ensuring every final interaction is handled by people committed to excellence.",
      vision: "To be the ultimate bridge where maximum technological speed meets the accountability and proximity of an exceptional human team.",
      missionLabel: "Our Proposal",
      visionLabel: "Tech Synergy"
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
        description: "Leaders in premium pet accessories. We manage international suppliers for the UK retail market, expanding to USA, Australia, Germany, and Poland.",
        market: "United Kingdom (UK)",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
        website: "https://www.morleyn.com/"
      },
      {
        id: "aurelius-apparel",
        name: "Aurelius & Co.",
        description: "Upcoming men's and women's apparel brand. Currently in market validation phase and building visual identity for the premium segment.",
        market: "In Validation",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "lumina-artis",
        name: "Lumina Artis",
        description: "Exclusive line of artisanal jewelry featuring semi-precious stones, pure Gold, and Silver. Merging traditional craft with operational efficiency.",
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
        company: "Manufacturing Partner",
        content: "Our collaboration with GrowPoland works because their technical requirements are consistent. No ambiguities in their orders, allowing for a stable production flow.",
        avatar: "https://i.pravatar.cc/150?img=12"
      },
      {
        id: "r2",
        author: "Sarah L. Jenkins",
        position: "External Supplier",
        company: "Supply & Flow",
        content: "As a supplier, I value that when stock imbalances occur, we resolve shipping times satisfactorily. Their forecasts are realistic.",
        avatar: "https://i.pravatar.cc/150?img=32"
      },
      {
        id: "r3",
        author: "Robert Sterling",
        position: "Tax Advisor",
        company: "Independent Audit Firm",
        content: "We audit their accounting structure externally. The organization of their financial entries is outstanding; it's a seamless administration.",
        avatar: "https://i.pravatar.cc/150?img=11"
      },
      {
        id: "r4",
        author: "Elena Voronina",
        position: "Channel Partner",
        company: "Distribution Network",
        content: "GrowPoland is direct: if there's a problem, they face it honestly. That pragmatism makes the relationship functional and long-lasting.",
        avatar: "https://i.pravatar.cc/150?img=34"
      }
    ],
    exportDivision: {
      badge: "In Development",
      title: "Export Division: Polish Excellence",
      description: "Propelling local manufacturing onto the global stage, we are consolidating a strategic unit dedicated to the future export of 100% Polish premium products.",
      status: "Audit & Analysis",
      statusLabel: "Current Phase",
      cta: "Inquire as Supplier",
      socialText: "Consolidating a network of high-performance local producers.",
      modalTitle: "Polish Supplier Inquiry",
      modalDescription: "Join our premium export network. We audit local producers for global expansion.",
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
        excerpt: "An in-depth analysis of the growth of the Polish market as a continental logistics hub.",
        date: "Jan 10, 2026",
        category: "Insights",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "2",
        title: "The impact of AI on last-mile logistics",
        excerpt: "How automation and predictive algorithms are redefining delivery times.",
        date: "Dec 28, 2025",
        category: "Logistics",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
      }
    ],
    contact: {
      title: "Let's build the future of trade.",
      description: "Interested in our management capabilities or our new export network? Our leadership team is ready to talk.",
      emailLabel: "Corporate Email",
      phoneLabel: "Digital Contact",
      address: "Hoża 29, 00-521 Warsaw, Poland",
      email: "corporate@growpoland.com",
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
      subtitle: "This area is exclusively for GrowPoland Investment partners.",
      description: "Please enter your corporate credentials to continue.",
      back: "Back to Home",
      badge: "Private Zone",
      error: "Invalid credentials. Access denied."
    },
    legal: {
      privacy: {
        title: "Privacy Policy",
        content: "At GrowPoland Investment, we take your corporate data security seriously. All information collected through our channels is treated with strict encryption under European GDPR. We do not share your data with third parties without explicit consent."
      },
      terms: {
        title: "Terms and Conditions",
        content: "Access to this portal is regulated by the international trade laws of Poland and the European Union. Use of our supplier network and distribution channels is subject to specific NDAs."
      }
    }
  },
  pl: {
    hero: {
      title: "Łączenie Globalnych Rynków z Serca Europy",
      subtitle: "GrowPoland Investment to wiodący holding zarządzający międzynarodowymi ekosystemami E-commerce i ułatwiający handel globalny.",
      cta: "Poznaj Możliwości",
      ctaSecondary: "Nasza Sieć"
    },
    about: {
      badge: "Nasza Filozofia",
      title: "Technologiczna Zwinność, Ludzkie Zaangażowanie",
      description: "W GrowPoland Investment budujemy przyszłość handlu poprzez synergię. Integrujemy Sztuczną Inteligencję i zaawansowaną automatyzację, aby zapewnić naszym procesom wyjątkową zwinność i precyzję w globalnej logistyce. Wierzymy jednak, że prawdziwa wartość tkwi w równowadze: wzmacniamy naszą technologię osądem i empatią eksperckiego zespołu, który audytuje każdy proces i zapewnia bliskie wsparcie, gwarantując, że cyfrowa wydajność nigdy nie odbędzie się kosztem jakości obsługi.",
      mission: "Optymalizacja łańcucha dostaw poprzez zaawansowaną sztuczną inteligencję przy jednoczesnym zapewnieniu, że każda interakcja jest obsługiwana przez ludzi dbających o doskonałość.",
      vision: "Być ostatecznym pomostem, gdzie maksymalna prędkość technologiczna spotyka się z odpowiedzialnością i bliskością wyjątkowego ludzkiego zespołu.",
      missionLabel: "Nasza Propozycja",
      visionLabel: "Synergia Tech"
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
      description: "Zarządzamy globalnymi markami, koncentrując się na optymalizacji operacyjnej i satysfakcji klienta.",
      viewDetails: "Zobacz Szczegóły"
    },
    brands: [
      {
        id: "morleyn-pet",
        name: "Morleyn",
        description: "Liderzy w akcesoriach premium dla zwierząt. Zarządzamy międzynarodowymi dostawcami na rynek UK.",
        market: "Wielka Brytania (UK)",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
        website: "https://www.morleyn.com/"
      },
      {
        id: "aurelius-apparel",
        name: "Aurelius & Co.",
        description: "Nadchodząca marka odzieży męskiej i damskiej w segmencie premium.",
        market: "W trakcie walidacji",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "lumina-artis",
        name: "Lumina Artis",
        description: "Ekskluzywna linia biżuterii rzemieślniczej z kamieni szlachetnych.",
        market: "Wkrótce",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
      }
    ],
    reviewsSection: {
      badge: "Relacje Korporacyjne",
      title: "Opinie Naszej Sieci",
      subtitle: "Stabilność GrowPoland opiera się na przestrzeganiu zasad i współpracy z profesjonalistami."
    },
    reviews: [
      {
        id: "r1",
        author: "Marcus T. Chen",
        position: "Supply Manager",
        company: "Manufacturing Partner",
        content: "Współpraca z GrowPoland działa, ponieważ ich wymagania techniczne są spójne. Brak dwuznaczności pozwala na stabilny przepływ produkcji.",
        avatar: "https://i.pravatar.cc/150?img=12"
      },
      {
        id: "r2",
        author: "Sarah L. Jenkins",
        position: "Zewnętrzny Dostawca",
        company: "Supply & Flow",
        content: "Jako dostawca cenię to, że w przypadku problemów, satysfakcjonująco rozwiązujemy czasy wysyłki.",
        avatar: "https://i.pravatar.cc/150?img=32"
      },
      {
        id: "r3",
        author: "Robert Sterling",
        position: "Tax Advisor",
        company: "Audit Firm",
        content: "Audytujemy ich strukturę księgową. Przejrzysta administracja znacznie ułatwia procesy zamknięcia.",
        avatar: "https://i.pravatar.cc/150?img=11"
      },
      {
        id: "r4",
        author: "Elena Voronina",
        position: "Channel Partner",
        company: "Distribution Network",
        content: "GrowPoland es directo: si hay un problema, lo afrontan con honestidad. Ese pragmatismo construye relaciones duraderas.",
        avatar: "https://i.pravatar.cc/150?img=34"
      }
    ],
    exportDivision: {
      badge: "W Rozwoju",
      title: "Dział Eksportu: Polska Doskonałość",
      description: "Wprowadzając lokalną produkcję na scenę globalną, budujemy jednostkę dedykowaną eksportowi polskich produktów premium.",
      status: "Audyt i Analiza",
      statusLabel: "Obecna Faza",
      cta: "Kontakt dla Dostawców",
      socialText: "Budowanie sieci wysokowydajnych producentów lokalnych.",
      modalTitle: "Rejestracja Polskiego Dostawcy",
      modalDescription: "Dołącz do naszej sieci eksportowej premium.",
      formLabelProduct: "Możliwości logistyczne",
      formPlaceholderProduct: "Opisz swoje kluczowe produkty...",
      securityText: "Bezpieczeństwo GrowPoland: Szyfrowanie"
    },
    blogSection: {
      badge: "Biuro Prasowe",
      title: "Ostatnie Aktualizacje",
      viewAll: "Zobacz wszystkie",
      readMore: "Czytaj więcej"
    },
    blog: [
      {
        id: "1",
        title: "Trendy E-commerce w Europie Wschodniej 2026",
        excerpt: "Analiza wzrostu polskiego rynku jako hubu logistycznego.",
        date: "10 sty 2026",
        category: "Wnioski",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "2",
        title: "Wpływ AI na logistykę",
        excerpt: "Jak automatyzacja redefiniuje globalne czasy dostaw.",
        date: "28 gru 2025",
        category: "Logistyka",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
      }
    ],
    contact: {
      title: "Budujmy razem przyszłość handlu.",
      description: "Zainteresowany naszymi możliwościami? Nasz zespół jest gotowy do rozmowy.",
      emailLabel: "Email Korporacyjny",
      phoneLabel: "Kontakt Cyfrowy",
      address: "Hoża 29, 00-521 Warszawa, Polska",
      email: "corporate@growpoland.com",
      phone: "",
      officeHours: "Pon - Pt: 09:00 - 18:00 CET",
      form: {
        name: "Imię",
        company: "Firma",
        email: "Email",
        message: "Wiadomość",
        submit: "Wyślij zapytanie"
      }
    },
    footer: {
      description: "Liderzy w strategicznym zarządzaniu e-commerce z Warszawy.",
      company: "Firma",
      support: "Wsparcie",
      contact: "Kontakt",
      links: {
        about: "O nas",
        brands: "Nasze marki",
        export: "Dział eksportu",
        news: "Biuro prasowe",
        privacy: "Prywatność",
        terms: "Warunki",
        careers: "Kariera",
        investors: "Inwestorzy"
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
      subtitle: "Strefa dla partnerów GrowPoland Investment.",
      description: "Wprowadź swoje dane korporacyjne.",
      back: "Powrót",
      badge: "Strefa Prywatna",
      error: "Nieprawidłowe dane logowania."
    },
    legal: {
      privacy: {
        title: "Polityka Prywatności",
        content: "W GrowPoland Investment poważnie traktujemy bezpieczeństwo danych. Wszystkie informacje są szyfrowane zgodnie z RODO."
      },
      terms: {
        title: "Warunki Korzystania",
        content: "Dostęp do portalu regulują przepisy prawa handlowego Polski i Unii Europejskiej."
      }
    }
  }
};
