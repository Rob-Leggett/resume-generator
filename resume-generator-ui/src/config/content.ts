export interface CertificationData {
  name: string;
  date: string;
  badgeUrl: string;
}

export const certifications: CertificationData[] = [
  {
    name: 'TOGAF 9.2 Certified',
    date: 'Apr 2021',
    badgeUrl: 'https://www.credly.com/badges/fb2d653a-96ac-4085-b4ee-ecc945137837',
  },
  {
    name: 'AWS Certified Security - Specialty (SCS)',
    date: 'Oct 2020 – Dec 2023',
    badgeUrl: 'https://www.credly.com/badges/8fbb4bcc-a9d0-4011-b880-42323086b314/public_url',
  },
  {
    name: 'Google Cloud Certified Professional Cloud Architect',
    date: 'Apr 2024 – Apr 2026',
    badgeUrl: 'https://www.credly.com/badges/4333b5c8-42d6-499a-b88f-ed926ae721ed/public_url',
  },
  {
    name: 'AWS Certified Solutions Architect - Associate (SAA)',
    date: 'Aug 2023 – Aug 2026',
    badgeUrl: 'https://www.credly.com/badges/2e25894d-1854-4541-a718-b11a9d76114d/public_url',
  },
];

export interface AchievementData {
  name: string;
  description: string;
}

export const achievements: AchievementData[] = [
  {
    name: 'Improved Platform Resilience',
    description: 'Achieved a 35% increase in platform reliability by leading the integration of core enterprise systems in 2024.'
  },
  {
    name: 'Operational Cost Reduction',
    description: 'Reduced operational costs by 20% by implementing cloud-native practices within a year.'
  },
  {
    name: 'Uptime Optimisation through Automation',
    description: 'Increased service uptime to 99.9% by spearheading automation initiatives and leading a cross-functional team of 40 engineers.'
  }
]

export interface SkillData {
  type: string;
  description: string;
}

export const skills: SkillData[] = [
  {
    type: 'Leadership',
    description: 'Team, Strategic, Technical, People, Digital transformation, Communication, Problem solving'
  },
  {
    type: 'Architecture',
    description: 'Cloud, Technical, Solution, GCP, AWS, Azure'
  },
  {
    type: 'Engineering',
    description: 'Development, Delivery, Finance, Compliance, Identity, Agile'
  },
  {
    type: 'Environments',
    description: 'Enterprise, Startup'
  }
];

export interface EducationData {
  school: string;
  name: string;
  date: string;
}

export const education: EducationData[] = [
  {
    school: 'Swinburne University of Technology',
    name: 'Bachelor of Multimedia and Software Development',
    date: '2002– 2006'
  }
]

export const summary: string[] = [
  "I'm an experienced and collaborative technology leader with a strong engineering and architecture background and over eighteen years of experience in the Information Technology industry.",
  "Known for building and leading high performing, diverse teams and fostering cultures of excellence, accountability, and innovation in government, manufacturing, identity, finance, telecommunication and AI industries with a focus on delivering exceptional outcomes and customer value.",
  "Passionate about mentoring talent, enhancing customer outcomes and leading by example to drive digital, agile and culture transformation while excelling at aligning technology strategy with business goals, removing delivery blockers, and enabling teams to execute with autonomy and clarity.",
  "Energised by complex challenges, senior stakeholder engagement, and environments where purpose-driven teams solve problems that matter."
];

export interface ExperienceData {
  role: string;
  period: string;
  company: string;
  description: string[];
}

export const experiences: ExperienceData[] = [
  {
    role: 'Head of Technology',
    period: '2024 – Now',
    company: 'TRU Recognition',
    description: [
      'A visionary and results-driven technology leader with a proven track record in defining and executing technical roadmaps that align with business goals to drive scalability, security, and long-term sustainability.',
      'Deep expertise across cloud infrastructure, AI/ML, DevOps, API, and application integration domains.',
      'Leads high-performing engineering and infrastructure teams across Platform, Product Engineering, DevOps, and AI/ML, cultivating a culture of innovation, accountability, and continuous improvement.',
      'Passionate about talent development, mentorship, and building scalable, empowered organisations equipped for future challenges.',
      'Drives modern cloud-native engineering practices, including CI/CD automation, secure and reliable infrastructure design, AI/ML model deployment, performance optimisation, and cost-efficient operations.',
      'Balances technical innovation with effective management of technical debt to ensure long-term maintainability and reliability.',
      'Provides strategic oversight of engineering and infrastructure programs — including scope, time, cost, people, and vendor management — aligning execution with enterprise priorities to maximise technology ROI.',
      'Partners closely with Product and Executive Leadership to synchronise delivery roadmaps, release cycles, and operational workflows.',
      'Champion of operational excellence, leveraging automation, observability, and modern tooling to ensure service health, system reliability, and responsive incident management.',
      'Actively shapes and communicates strategy, values, and priorities to secure buy-in across varied stakeholders and create clear, actionable technology roadmaps.',
      'Engages across the enterprise and broader technology community to share operational frameworks, embrace emerging technologies, and foster knowledge exchange that supports business growth and engineering maturity.'
    ]
  },
  {
    role: 'Lead Architect',
    period: '2023 – 2024',
    company: 'Papercut',
    description: [
      'A people-first, outcome-oriented technology leader with a strong focus on continuously optimising cloud product and architecture practices to support the delivery of high-quality, scalable, and reliable SaaS solutions.',
      'Deep experience in shaping strategic direction, influencing product engineering excellence, and aligning technical initiatives with business growth goals.',
      'Actively partners with Strategy and Architecture teams to transform technology infrastructure in line with enterprise priorities, delivering tangible business value.',
      'Provides clear leadership across solution delivery and lifecycle management, overseeing scope, time, cost, people, technology, and vendor relationships to ensure architectural consistency and pragmatic outcomes.',
      'Drives continuous improvement of customer and user experience by refining cloud architecture strategy across people development, operational processes, and platform health.',
      'Leads and develops high-performing architecture teams, embedding a DevOps mindset and fostering a culture of innovation, accountability, and technical excellence.',
      'Champions alignment between architecture and business priorities through effective governance, resource planning, and roadmap execution.',
      'Communicates organisational vision, values, and strategic objectives with clarity and influence, ensuring stakeholder engagement and cross -functional collaboration.'
    ]
  },
  {
    role: 'Senior Engineering Manager',
    period: '2022 – 2023',
    company: 'Latitude Financial Services',
    description: [
      'A people, delivery, and technology leader whose role is to implement and continuously improve Integration engineering practices across the Enterprise ensuring the quality of APIs/App Integration software delivery across planning, execution, and support.',
      'Develops and manages a high-performing team of 30-40 engineers and architects to build, evolve and maintain APIs/App Integration technology assets.',
      'Actively collaborates with peers and the Strategy and Architecture team to continue transform Enterprise technology in alignment with Enterprise business growth aspirations.',
      'Works towards attracting and maintaining the most talented engineering workforce, by creating an empowered, responsible, and outcome driven engineering culture, that contributes back to the industry and Enterprise technology community.',
      'Support the continuous improvement of the organisations customer experience by defining, executing, and evolving APIs/App Integration engineering strategy across people development, processes improvement and asset health.',
      'Lead, inspire, manage, and invest in the development and growth of the engineering practices and team members, at the core of the DevOps for APIs/App Integration technology assets.',
      'Provide overall leadership and governance in shaping (scope, time, cost, people, solutions, and vendors) and executing on solutions and lifecycle management for new and existing projects to pragmatically address business problems and aiming to maintain consistency with domain and architecture strategy.',
      'Effectively embraces and communicates organisation ambition, core values, strategic direction and key priorities and create strategies and roadmaps that are, well socialised, endorsed and use targeted communications that are appropriate to the varied stakeholders.',
      'Leads and maintain a governance and reporting structure that aligns initiatives with business priorities while balancing resource constraints to optimise business and technology investments.'
    ]
  },
  {
    role: 'Solution Architect',
    period: '2019 – 2022',
    company: 'Australia Post',
    description: [
      'Helped form the future direction, strategy, and key initiatives of Identity Services',
      'Helped manage relationships with the Senior Leadership and Delivery teams across the organisation',
      'Managed and liaised with partners including AWS, Salesforce, and others, leveraging their capabilities to rapidly innovate the services for our customers and staff members.',
      'Key contributor to Identity Services cultural transformation in the Architecture space',
      'Provided high quality strategic and architectural direction to teams of Identity Services accountable for the delivery of projects, software maintenance and support for Identity Services, Digital iD & TrustCheck platforms.',
      'Provided technical vision and direction to the Identity Service teams.',
      'Provided mentorship and coaching to department and delivery team members.',
      'Built a strong relationship with business and IT stakeholders to implement projects.',
      'Business Units inside Australia Post include (Identity Services, Digital iD & TrustCheck)',
      'Developed Governance Artefacts (ABB’s, SBB’s, Patterns, Principles, Reusable Solutions, SAD’s)',
      'Defined Solution Architecture for common platform capabilities within Portfolio Solutions & Engineering (Complaint Cloud Environment & Developer Portal)',
      'Delivery Solution Architectures that adhere to compliance regulations including ISM and PCI -DSS and providing the support for Audit’s including documentation such as the AADD and interviews'
    ]
  },
  {
    role: 'Engineering Lead',
    period: '2017 – 2019',
    company: 'Australia Post / Sensis',
    description: [
      'Helped form the future direction, technical strategy and key initiatives of Identity Services',
      'Lead the end-to-end delivery in 1 department, multiple squads (~18 people) covering Identity & Security',
      'Lead the development and growth of our staff, team structures and implemented methodologies, practices, technologies and platforms.',
      'Key contributor to Identity Services cultural transformation in the Engineering space.',
      'Provided technical vision and direction to the Identity Services department.',
      'Ensured the technical capabilities of the development teams were grown to sufficiently deliver on target programs of work.',
      'Lead IT application delivery capabilities that ensured flexibility, rapid application development practices and shortened time to market.',
      'Responsible for all stages of the software development lifecycle including all required signoffs and approvals.',
      'Lead with Servant Leadership while removing blockers and establishing enablers.',
      'Provided mentorship and coaching to department and delivery team members.',
      'Managed the core development team and external partners/contractors, which involved business consultation, estimation, planning, end to end accountability for project outcomes and management of the technical team to support and deliver solutions successfully.',
      'Built a strong relationship with business and IT stakeholders to implement projects.',
    ]
  },
  {
    role: 'Software Engineer',
    period: '2005 – 2017',
    company: 'Australia Post, Sensis, UXC, O-I, Telstra, Accenture',
    description: [
      'Can provide additional information on request.'
    ]
  },
];