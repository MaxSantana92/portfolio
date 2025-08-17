// Tipos para las habilidades
export interface Skill {
  name: string
  proficiency?: number
  icon?: string
  color?: string
}

export interface SkillGroup {
  category: string
  type?: 'logos' | 'progress'
  items: Skill[]
}

// Tipos para los proyectos
export interface Project {
  id?: string
  title: string
  description: string
  image: string
  technologies: string[]
  tags?: string[]
  githubUrl?: string
  liveUrl?: string
  link?: string
  category?: string
  featured?: boolean
}

// Tipos para la información de contacto
export interface ContactInfo {
  email: string
  phone?: string
  location?: string
  socialMedia: {
    github?: string
    linkedin?: string
    twitter?: string
    instagram?: string
  }
}

// Tipos para la información personal
export interface PersonalInfo {
  name: string
  title: string
  description: string
  avatar?: string
  resume?: string
}

// Tipos para las estadísticas
export interface Statistic {
  value: string
  label: string
}

// Tipos para las experiencias
export interface Experience {
  id: string
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
}

// Tipos para la educación
export interface Education {
  id: string
  institution: string
  degree: string
  period: string
  description?: string
}
