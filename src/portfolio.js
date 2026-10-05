const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://trinitydevs.github.io/portifolio',
  title: 'td',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Trinity Domingues',
  role: 'Desenvolvedora | Designer UX/UI',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'Desenvolvo experiências digitais que conectam design, tecnologia e pessoas, unindo UX/UI e desenvolvimento front-end.',
  resume: 'https://canva.link/cv-trinitydomingues',
  social: {
    linkedin: 'https://www.linkedin.com/in/trinitydomingues/',
    github: 'https://github.com/trinitydevs',
    behance: 'https://www.behance.net/trinitynascime',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Átrio',
    description:
      'Uma plataforma de orientação e acessibilidade para museus, com mapa interativo em tempo real.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://www.figma.com/design/Qzy33L9XljDTGN05eVUyJu/Prot%C3%B3tipo-MapArte---Baixa--m%C3%A9dia-e-alta?node-id=593-1102&t=cmPjxJirUjAEhZ1v-1',
    livePreview: 'https://www.figma.com/proto/Qzy33L9XljDTGN05eVUyJu/Prot%C3%B3tipo-MapArte---Baixa--m%C3%A9dia-e-alta?node-id=617-144&t=cmPjxJirUjAEhZ1v-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A3',
    image: 'atrio.png',
  },
  {
    name: 'Pelos & Lambeijos',
    description:
      'Aplicativo mobile, com foco no gerenciamento interno e no agendamento de serviços de banho e tosa.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/Workflow-FatecItaquera/Pets',
    livePreview: 'https://github.com',
    image: 'peloselambeijos.png',
  },
  {
    name: 'IP Repository',
    description:
      'Uma plataforma web destinada ao acesso e hospedagem de Projetos Interdisciplinares das FATECS.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/DSM2SEM2024/-workflow',
    livePreview: 'https://dsm2sem2024.github.io/-workflow/#/',
    image: 'iprepository.png',
  },
  {
    name: 'Esfera Odontologia & Saúde',
    description:
      'Uma plataforma web integrada, unindo site institucional e sistema interno da clínica.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/Workflow-FatecItaquera/EsferaOdontologiaSaude',
    livePreview: 'https://github.com',
    image: 'esferaodontologiaesaude.png',
  },
  {
    name: 'Pilates',
    description:
      'Uma plataforma web e responsiva de pilates para gerenciar planos e agendamentos de aulas.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/Workflow-FatecItaquera/pilates',
    livePreview: 'https://pilates-s9q6.onrender.com/',
    image: 'pilates.png',
  },
  {
    name: 'Ateliê Buguela',
    description:
      'Uma plataforma web com foco em exposição e venda de artesanato para mulheres afro brasileiras.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/GustavoJoia/AtelieBuguela',
    livePreview: 'https://gustavojoia.github.io/AtelieBuguela/',
    image: 'ateliebuguela.png',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React',
  'React Native',
  'Angular',
  'JavaScript',
  'Design Thinking',
  'UX/UI',
  'TypeScript',
  'Figma',
  'Photoshop',
  'Git',
  'CI/CD',
  'SASS',
  'Mobile & Web',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'trinitynascimento@gmail.com',
}

export { header, about, projects, skills, contact }
