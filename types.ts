export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  updated_at: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Certification {
  name: string;
  institution: string;
  pdfUrl?: string;
}

export interface SkillData {
  subject: string;
  A: number; // Proficiency level 0-100
  fullMark: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}