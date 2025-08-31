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
    'hero.subtitle': 'AI-Powered Front-End Developer',
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
    'skills.description':
      "I've worked with a variety of technologies throughout my career. Here's an overview of my technical skills and proficiency levels.",
    'projects.title': 'Projects',
    // Contact page
    'contact.title': 'Contact',
    'contact.heading': 'Get In Touch',
    'contact.lead':
      "Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!",
    'contact.form.title': 'Send Me a Message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.success':
      'Thanks for your message! In a real implementation, this would be sent to a backend service.',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.info.remote': 'Available for remote work worldwide',
    'contact.connect.title': 'Connect With Me',
    'contact.cta.title': "Let's Work Together",
    'contact.cta.body': 'Available for freelance projects and full-time opportunities.',
    'contact.cta.download': 'Download Resume',
    'contact.description': "Let's work together on your next project",
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'footer.copyright': '© 2025 DevPortfolio Max Santana. All rights reserved.',
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
    'hero.subtitle': 'AI-Powered Front-End Developer',
    'hero.description': 'Creador de experiencias y productos digitales potenciado con IA.',
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
    'skills.description':
      'A lo largo de mi carrera profesional he trabajado con diversas tecnologías. A continuación, se incluye una descripción general de mis habilidades técnicas y niveles de competencia.',
    'projects.title': 'Proyectos',
    // Contact page
    'contact.title': 'Contacto',
    'contact.heading': 'Ponte en contacto',
    'contact.lead':
      '¿Tienes un proyecto en mente o quieres hablar de una oportunidad? ¡Me encantará leerte!',
    'contact.form.title': 'Envíame un mensaje',
    'contact.form.name': 'Tu nombre',
    'contact.form.email': 'Tu correo',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.success':
      '¡Gracias por tu mensaje! En una implementación real, esto se enviaría a un servicio backend.',
    'contact.info.title': 'Información de contacto',
    'contact.info.email': 'Correo',
    'contact.info.phone': 'Teléfono',
    'contact.info.location': 'Ubicación',
    'contact.info.remote': 'Disponible para trabajo remoto en todo el mundo',
    'contact.connect.title': 'Conecta conmigo',
    'contact.cta.title': 'Trabajemos juntos',
    'contact.cta.body': 'Disponible para proyectos freelance y oportunidades de tiempo completo.',
    'contact.cta.download': 'Descargar CV',
    'contact.description': 'Trabajemos juntos en tu próximo proyecto',
    'contact.email': 'Correo',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'footer.copyright': '© 2025 DevPortfolio Max Santana. Todos los derechos reservados.',
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
