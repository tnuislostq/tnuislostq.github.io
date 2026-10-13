export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  category: 'fullstack' | 'ai-realtime' | 'ecommerce' | 'web';
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
  fallbackImage?: string;
  featured?: boolean;
  metrics?: string;
  architecture?: string[];
  highlights?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    favorite?: boolean;
  }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  imageUrl: string;
  verifyUrl: string;
  credentialId?: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'experience' | 'education';
  description: string;
  achievements: string[];
  skills: string[];
}
