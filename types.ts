
export interface Brand {
  id: string;
  name: string;
  description: string;
  market: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface CorporateData {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  about: {
    badge: string;
    title: string;
    description: string;
    mission: string;
    vision: string;
    missionLabel: string;
    visionLabel: string;
  };
  brands: Brand[];
  brandsSection: {
    badge: string;
    title: string;
    description: string;
    viewDetails: string;
  };
  exportDivision: {
    badge: string;
    title: string;
    description: string;
    status: string;
    statusLabel: string;
    cta: string;
    socialText: string;
    modalTitle: string;
    modalDescription: string;
    formLabelProduct: string;
    formPlaceholderProduct: string;
    securityText: string;
  };
  blog: BlogPost[];
  blogSection: {
    badge: string;
    title: string;
    viewAll: string;
    readMore: string;
  };
  contact: {
    title: string;
    description: string;
    emailLabel: string;
    phoneLabel: string;
    address: string;
    email: string;
    phone: string;
    officeHours: string;
    form: {
      name: string;
      company: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  stats: Stat[];
  footer: {
    description: string;
    company: string;
    support: string;
    contact: string;
    links: {
      about: string;
      brands: string;
      export: string;
      careers: string;
      news: string;
      investors: string;
      privacy: string;
      terms: string;
    };
    madeIn: string;
    rights: string;
  };
  navigation: {
    start: string;
    about: string;
    portfolio: string;
    export: string;
    news: string;
    admin: string;
  };
}

export type Language = 'es' | 'en' | 'pl';
