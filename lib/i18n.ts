export type Language = 'en' | 'es';

export const languages: Language[] = ['en', 'es'];

export const defaultLanguage: Language = 'en';

export interface Translations {
  nav: {
    about: string;
    whyArgentina: string;
    infrastructure: string;
    vision: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheading: string;
  };
  about: {
    title: string;
    content: string[];
  };
  whyArgentina: {
    title: string;
    intro: string;
    points: Array<{
      title: string;
      description: string;
    }>;
  };
  infrastructure: {
    title: string;
    intro: string;
    points: Array<{
      title: string;
      description: string;
    }>;
  };
  vision: {
    title: string;
    content: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    company: string;
    email: string;
    message: string;
    submit: string;
    submitting: string;
  };
  footer: {
    location: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      whyArgentina: 'Why Argentina',
      infrastructure: 'Infrastructure',
      vision: 'Vision',
      contact: 'Contact',
    },
    hero: {
      headline: 'Building the foundation for hyperscale computing in South America.',
      subheading: 'Long-term infrastructure development for global hyperscalers, AI workloads, and cloud providers in Argentina.',
    },
    about: {
      title: 'About Solid State Infrastructure',
      content: [
        'Solid State Infrastructure is dedicated exclusively to the development of hyperscale and large-scale data center infrastructure in Argentina.',
        'We operate with a long-term, capital-intensive mindset, focused on delivering mission-critical facilities for the world\'s most demanding computing workloads.',
        'Our focus encompasses global hyperscalers, artificial intelligence and high-performance computing workloads, cloud providers, and institutional infrastructure investors.',
        'We maintain a neutral, institutional approach—no hype, no gimmicks. Just serious infrastructure development for serious requirements.',
      ],
    },
    whyArgentina: {
      title: 'Why Argentina',
      intro: 'Argentina presents a compelling strategic opportunity for hyperscale data center development in South America.',
      points: [
        {
          title: 'Abundant Energy',
          description: 'Competitive energy availability with strong potential for renewable integration, including wind and solar resources.',
        },
        {
          title: 'Geographic Diversification',
          description: 'Strategic positioning for global cloud providers seeking geographic diversification and redundancy in South America.',
        },
        {
          title: 'Time Zone Alignment',
          description: 'Favorable time zone alignment with North America, enabling efficient operational coordination and support.',
        },
        {
          title: 'Land Availability',
          description: 'Large-scale land parcels available for campus-style developments, supporting long-term expansion and scalability.',
        },
        {
          title: 'Underserved Market',
          description: 'Significant opportunity in an underserved hyperscale market, with growing demand from global technology leaders.',
        },
        {
          title: 'Strategic Position',
          description: 'Strategic location in South America, serving as a gateway for regional and global infrastructure deployment.',
        },
      ],
    },
    infrastructure: {
      title: 'Infrastructure Focus',
      intro: 'Our facilities are designed from the ground up for hyperscale requirements and long-term operational resilience.',
      points: [
        {
          title: 'Hyperscale Design',
          description: 'Purpose-built for hyperscale deployments, supporting the largest cloud and AI workloads with modular scalability.',
        },
        {
          title: 'Energy-First Architecture',
          description: 'Energy efficiency and sustainability are foundational to our design, optimized for power density and operational cost.',
        },
        {
          title: 'Carrier-Neutral Connectivity',
          description: 'Multiple carrier options and direct connectivity to major cloud on-ramps, ensuring redundancy and performance.',
        },
        {
          title: 'AI & HPC Density',
          description: 'Built to support high-density AI and high-performance computing workloads, with advanced cooling and power distribution.',
        },
        {
          title: 'Operational Resilience',
          description: 'Designed for long-term reliability, with redundant systems, robust security, and institutional-grade operational standards.',
        },
        {
          title: 'Modular Scalability',
          description: 'Flexible, modular design allowing for phased expansion and adaptation to evolving technology and workload requirements.',
        },
      ],
    },
    vision: {
      title: 'Vision & Long-Term Strategy',
      content: [
        'Our vision extends across a 10–20 year horizon, aligned with the long-term expansion strategies of global cloud providers and hyperscalers.',
        'We are developing a multi-site portfolio strategy, positioning Argentina as a strategic data center hub in South America.',
        'Our approach is built on institutional partnerships, long-term capital commitment, and alignment with the infrastructure needs of the world\'s leading technology companies.',
        'We are not building for today\'s requirements alone—we are building the foundation for the next generation of computing infrastructure in South America.',
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'For investors, strategic partners, and energy or land stakeholders.',
      name: 'Name',
      company: 'Company',
      email: 'Email',
      message: 'Message',
      submit: 'Send',
      submitting: 'Sending...',
    },
    footer: {
      location: 'Argentina',
    },
  },
  es: {
    nav: {
      about: 'Acerca de',
      whyArgentina: 'Por Qué Argentina',
      infrastructure: 'Infraestructura',
      vision: 'Visión',
      contact: 'Contacto',
    },
    hero: {
      headline: 'Construyendo la base para la computación hiperescala en América del Sur.',
      subheading: 'Desarrollo de infraestructura a largo plazo para hiperescaladores globales, cargas de trabajo de IA y proveedores de nube en Argentina.',
    },
    about: {
      title: 'Acerca de Solid State Infrastructure',
      content: [
        'Solid State Infrastructure se dedica exclusivamente al desarrollo de infraestructura de centros de datos hiperescala y gran escala en Argentina.',
        'Operamos con una mentalidad a largo plazo e intensiva en capital, enfocada en entregar instalaciones de misión crítica para las cargas de trabajo informáticas más exigentes del mundo.',
        'Nuestro enfoque abarca hiperescaladores globales, cargas de trabajo de inteligencia artificial y computación de alto rendimiento, proveedores de nube e inversionistas institucionales de infraestructura.',
        'Mantenemos un enfoque neutral e institucional—sin exageraciones, sin trucos. Solo desarrollo serio de infraestructura para requisitos serios.',
      ],
    },
    whyArgentina: {
      title: 'Por Qué Argentina',
      intro: 'Argentina presenta una oportunidad estratégica convincente para el desarrollo de centros de datos hiperescala en América del Sur.',
      points: [
        {
          title: 'Energía Abundante',
          description: 'Disponibilidad energética competitiva con fuerte potencial para integración renovable, incluyendo recursos eólicos y solares.',
        },
        {
          title: 'Diversificación Geográfica',
          description: 'Posicionamiento estratégico para proveedores de nube globales que buscan diversificación geográfica y redundancia en América del Sur.',
        },
        {
          title: 'Alineación de Zona Horaria',
          description: 'Favorable alineación de zona horaria con América del Norte, permitiendo coordinación operativa y soporte eficientes.',
        },
        {
          title: 'Disponibilidad de Tierra',
          description: 'Parcelas de tierra a gran escala disponibles para desarrollos estilo campus, apoyando expansión y escalabilidad a largo plazo.',
        },
        {
          title: 'Mercado Desatendido',
          description: 'Oportunidad significativa en un mercado hiperescala desatendido, con creciente demanda de líderes tecnológicos globales.',
        },
        {
          title: 'Posición Estratégica',
          description: 'Ubicación estratégica en América del Sur, sirviendo como puerta de entrada para despliegue de infraestructura regional y global.',
        },
      ],
    },
    infrastructure: {
      title: 'Enfoque de Infraestructura',
      intro: 'Nuestras instalaciones están diseñadas desde cero para requisitos hiperescala y resiliencia operativa a largo plazo.',
      points: [
        {
          title: 'Diseño Hiperescala',
          description: 'Construido específicamente para despliegues hiperescala, soportando las mayores cargas de trabajo de nube e IA con escalabilidad modular.',
        },
        {
          title: 'Arquitectura Energética Primero',
          description: 'La eficiencia energética y la sostenibilidad son fundamentales para nuestro diseño, optimizado para densidad de potencia y costo operativo.',
        },
        {
          title: 'Conectividad Neutral de Portadores',
          description: 'Múltiples opciones de portadores y conectividad directa a principales puntos de acceso a la nube, asegurando redundancia y rendimiento.',
        },
        {
          title: 'Densidad de IA y HPC',
          description: 'Construido para soportar cargas de trabajo de alta densidad de IA y computación de alto rendimiento, con enfriamiento avanzado y distribución de energía.',
        },
        {
          title: 'Resiliencia Operativa',
          description: 'Diseñado para confiabilidad a largo plazo, con sistemas redundantes, seguridad robusta y estándares operativos de grado institucional.',
        },
        {
          title: 'Escalabilidad Modular',
          description: 'Diseño flexible y modular que permite expansión por fases y adaptación a requisitos tecnológicos y de carga de trabajo en evolución.',
        },
      ],
    },
    vision: {
      title: 'Visión y Estrategia a Largo Plazo',
      content: [
        'Nuestra visión se extiende a través de un horizonte de 10–20 años, alineado con las estrategias de expansión a largo plazo de proveedores de nube globales e hiperescaladores.',
        'Estamos desarrollando una estrategia de portafolio multi-sitio, posicionando a Argentina como un centro estratégico de centros de datos en América del Sur.',
        'Nuestro enfoque se basa en asociaciones institucionales, compromiso de capital a largo plazo y alineación con las necesidades de infraestructura de las principales empresas tecnológicas del mundo.',
        'No estamos construyendo solo para los requisitos de hoy—estamos construyendo la base para la próxima generación de infraestructura informática en América del Sur.',
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Para inversionistas, socios estratégicos y partes interesadas en energía o tierra.',
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo Electrónico',
      message: 'Mensaje',
      submit: 'Enviar',
      submitting: 'Enviando...',
    },
    footer: {
      location: 'Argentina',
    },
  },
};

