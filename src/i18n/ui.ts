export const languages = {
  en: 'English',
  es: 'Español',
}

export const defaultLang = 'es'

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.title': "Hi, I'm",
    'hero.subtitle': 'Full Stack Developer',
    'hero.description': 'I create amazing digital experiences with modern technologies',
    'hero.cta': 'Get in touch',
    'hero.viewWork': 'View My Work',
    'about.title': 'About Me',
    'about.description':
      'I am a passionate full stack developer with experience in creating modern web applications. I love learning new technologies and solving complex problems.',
    'about.whoIAm': 'Who I Am',
    'about.education': 'Education',
    'about.experience': 'Experience',
    'about.location': 'Location',
    'about.languages': 'Languages',
    'skills.title': 'Skills',
    'projects.title': 'Projects',
    'contact.title': 'Contact',
    'contact.description': "Let's work together on your next project",
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'footer.copyright': '© 2024 DevPortfolio. All rights reserved.',
    'footer.quickLinks': 'Quick Links',
    'footer.tagline':
      'Creating exceptional digital experiences with clean code and thoughtful design.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.title': 'Hola, soy',
    'hero.subtitle': 'Desarrollador Full Stack',
    'hero.description': 'Creo experiencias digitales increíbles con tecnologías modernas',
    'hero.cta': 'Contáctame',
    'hero.viewWork': 'Ver Mi Trabajo',
    'about.title': 'Sobre Mí',
    'about.description':
      'Soy un desarrollador full stack apasionado con experiencia en crear aplicaciones web modernas. Me encanta aprender nuevas tecnologías y resolver problemas complejos.',
    'about.whoIAm': 'Quién Soy',
    'about.education': 'Educación',
    'about.experience': 'Experiencia',
    'about.location': 'Ubicación',
    'about.languages': 'Idiomas',
    'skills.title': 'Habilidades',
    'projects.title': 'Proyectos',
    'contact.title': 'Contacto',
    'contact.description': 'Trabajemos juntos en tu próximo proyecto',
    'contact.email': 'Correo',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'footer.copyright': '© 2024 DevPortfolio. Todos los derechos reservados.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.tagline':
      'Creando experiencias digitales excepcionales con código limpio y diseño cuidadoso.',
  },
} as const

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}
