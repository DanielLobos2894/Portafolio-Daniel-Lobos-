import { Experience, SkillData, Education, Certification } from './types';

export const HERO_DATA = {
  name: "Daniel Lobos",
  role: "Ingeniero Full Stack & Soporte TI",
  tagline: "Optimizando sistemas y creando soluciones digitales eficientes.",
  bio: "Profesional versátil con sólida formación en desarrollo de software y soporte técnico. Especializado en Java Full Stack, resolución de problemas de hardware/software y optimización de procesos mediante tecnología.",
};

export const EXPERIENCE: Experience[] = [
  {
    id: 0,
    company: "Avant Tecnologies Cono Sur S.A.",
    role: "Técnico de Terreno",
    period: "Ene. 2025 - Sept. 2025",
    location: "Región de Coquimbo, Chile (Remoto)",
    description: [
      "Responsable técnico proporcionando soluciones a máquinas POS (Caja Vecina, Banco Estado).",
      "Notificación de rutas asignadas y coordinación con clientes (contacto en frío o previo aviso) para visitas técnicas.",
      "Planificación logística de rutas basada en disponibilidad y optimización de distancias.",
      "Verificación y resolución in-situ de reportes: insumos, material POP, defectos de hardware o retiros de equipos.",
      "Cierre de intervenciones y notificación formal a coordinación y Banco Estado."
    ],
  },
  {
    id: 1,
    company: "SSI Outsourcing",
    role: "Soporte Técnico Microinformática",
    period: "Sept. 2022 - Sept. 2024",
    location: "Región de Coquimbo, Chile",
    description: [
      "Proporcioné soporte técnico a máquinas POS con altos estándares de calidad.",
      "Aseguré una atención personalizada acorde a las necesidades críticas del cliente.",
      "Mantenimiento preventivo y correctivo de hardware."
    ],
  },
  {
    id: 2,
    company: "HOLDTECH",
    role: "Ejecutivo de Ventas",
    period: "Jun. 2021 - Dic. 2022",
    location: "La Serena, Coquimbo, Chile",
    description: [
      "Desarrollé estrategias de ventas efectivas contribuyendo al crecimiento del equipo.",
      "Implementé automatización de mensajes utilizando Excel para optimizar el flujo de trabajo.",
      "Gestión de relaciones con clientes y cierre de negocios."
    ],
  },
  {
    id: 3,
    company: "Administradora del Prado y La Foresta",
    role: "Asignador",
    period: "Sept. 2016 - Jun. 2021",
    location: "Camino Rinconada del Salto",
    description: [
      "Optimicé recursos y mejoré la productividad personal y del equipo.",
      "Identifiqué falencias críticas en la página de pago del Cementerio y reporté soluciones a la gerencia.",
      "Gestión administrativa y logística eficaz."
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    institution: "Instituto Profesional AIEP",
    degree: "Ingeniería de Ejecución en Informática",
    period: "Mar. 2017 - Dic. 2019",
    description: "Mención Desarrollo de Sistemas"
  },
  {
    id: 2,
    institution: "Sustantiva SpA",
    degree: "Desarrollo de Aplicaciones Full Stack Java Trainee",
    period: "Feb. 2022 - Jul. 2022",
    description: "Sólidos conocimientos en Java, Spring, Spring Boot y desarrollo Full Stack."
  },
  {
    id: 3,
    institution: "Escuela de Capacitación de SER",
    degree: "Programación Web",
    period: "Nov. 2022 - Feb. 2023",
    description: "Capacitación intensiva en HTML, CSS, Responsividad y Bootstrap."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    name: "Certificado de Programación Básica de Software", 
    institution: "Instituto AIEP",
    pdfUrl: "/certificados/aiep_programacion_basica.pdf"
  },
  { 
    name: "Certificado de Soporte de Hardware y Software", 
    institution: "Instituto AIEP",
    pdfUrl: "/certificados/aiep_soporte_hardware_software.pdf"
  },
  { 
    name: "Certificado Sense - Programación Web", 
    institution: "SER",
    pdfUrl: "/certificados/sence_programacion_web.pdf"
  },
  { 
    name: "Certificado Sense - Desarrollo Full Stack Java", 
    institution: "Sustantiva",
    pdfUrl: "/certificados/sence_fullstack_java_sustantiva.pdf"
  },
  { 
    name: "Certificado Sense - Desarrollo Full Stack Java 2.0", 
    institution: "Fudesco",
    pdfUrl: "/certificados/sence_fullstack_java_fudesco.pdf"
  }
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Frontend', A: 90, fullMark: 100 },
  { subject: 'Backend (Java)', A: 85, fullMark: 100 },
  { subject: 'Soporte HW/SW', A: 95, fullMark: 100 },
  { subject: 'Bases de Datos', A: 75, fullMark: 100 },
  { subject: 'Gestión', A: 80, fullMark: 100 },
  { subject: 'Ventas', A: 70, fullMark: 100 },
];