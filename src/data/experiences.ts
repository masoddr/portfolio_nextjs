import { ExperienceOverview } from '@/lib/experiences'

import logoCoup from '@/images/logos/coup.png'
import logoTimebomb from '@/images/logos/timebomb.png'
import logoLaforet from '@/images/logos/laforet.svg'

export const experiences: ExperienceOverview[] = [
  // Professional Experience Projects
  {
    slug: 'orus-space-systems-engineer',
    title: 'ORUS - Ingénieur Systèmes Spatiaux',
    description:
      'Ingénieur en systèmes spatiaux, développement de simulateurs d\'observation de la Terre avec modélisation physique et géométrique des chaînes image.',
    author: 'Massyl Ouaddour',
    date: '2025-09-01',
    tags: ['Python', 'NumPy', 'Pandas', 'FastAPI', 'Flask', 'Xarray', 'Dask', 'Linux', 'Git'],
    logo: logoLaforet,
    translations: {
      fr: {
        title: 'ORUS - Ingénieur Systèmes Spatiaux',
        description:
          'Ingénieur en systèmes spatiaux, développement de simulateurs d\'observation de la Terre avec modélisation physique et géométrique des chaînes image.',
      },
      en: {
        title: 'ORUS - Space Systems Engineer',
        description:
          'Space systems engineer, developing Earth observation simulators with physical and geometric modeling of imaging chains.',
      },
    },
    caseStudy: {
      exploration:
        'As a Space Systems Engineer at ORUS, I work on developing end-to-end observation simulators for Earth observation systems, with a strong focus on physical and geometric modeling of imaging chains.',
      solution:
        'Development of end-to-end simulation modules in Python (NumPy, Pandas), design and deployment of backend services (FastAPI, Flask), modeling of satellite orbits, attitudes and observation geometries, calculation of line-of-sight, ground projections and instrumental parameters.',
      architecture:
        'Handling of large scientific datasets (NumPy, Xarray, Dask), code structuring, performance optimization and calculation reliability. Working in Linux environments and collaborative Git workflows.',
      results:
        'Successfully contributed to the development of Earth observation simulators, improving the accuracy and performance of physical and geometric modeling systems.',
      sections: [
        {
          title: 'Key Responsibilities',
          items: [
            {
              icon: 'Grid2X2Icon',
              text: 'Development of end-to-end simulation modules in Python (NumPy, Pandas)',
            },
            {
              icon: 'ServerIcon',
              text: 'Design and deployment of backend services (FastAPI, Flask)',
            },
            {
              icon: 'SatelliteIcon',
              text: 'Modeling of satellite orbits, attitudes and observation geometries',
            },
            {
              icon: 'CalculatorIcon',
              text: 'Calculation of line-of-sight, ground projections and instrumental parameters',
            },
          ],
        },
      ],
    },
  },
  {
    slug: 'neverhack-cnes-satellite-constellation-simulator',
    title: 'CNES - Simulateur de Constellations Satellitaires',
    description:
      'Développement d\'un simulateur de constellations satellitaires avec un fort accent sur la qualité logicielle et la performance des calculs scientifiques.',
    author: 'Massyl Ouaddour',
    date: '2024-12-01',
    tags: [
      'Python',
      'NumPy',
      'Pandas',
      'FastAPI',
      'Flask',
      'Xarray',
      'Dask',
      'PostgreSQL',
      'Django',
      'Git',
      'GitLab',
      'Jenkins',
      'Sonarqube',
      'JIRA',
      'Linux',
    ],
    logo: logoLaforet,
    translations: {
      fr: {
        title: 'CNES - Simulateur de Constellations Satellitaires',
        description:
          'Développement d\'un simulateur de constellations satellitaires avec un fort accent sur la qualité logicielle et la performance des calculs scientifiques.',
      },
      en: {
        title: 'CNES - Satellite Constellation Simulator',
        description:
          'Development of a satellite constellation simulator with a strong focus on software quality and scientific computing performance.',
      },
    },
    caseStudy: {
      exploration:
        'Development of a satellite constellation simulator requiring high-quality software and high-performance scientific calculations.',
      solution:
        'Design of calculation pipelines in Python (NumPy), data processing (Pandas), design and deployment of backend services (FastAPI, Flask), structuring of complex data with Xarray (dimensions, metadata, traceability), parallelization and scaling of processing via Dask.',
      architecture:
        'Performance optimization on large calculation grids, modular, maintainable code oriented towards scientific simulation. Working at the interface between Python software engineering and spatial system modeling.',
      results:
        'Successfully delivered a high-performance satellite constellation simulator with optimized scientific computing capabilities.',
      sections: [
        {
          title: 'Technical Achievements',
          items: [
            {
              icon: 'Grid2X2Icon',
              text: 'Design of calculation pipelines in Python (NumPy)',
            },
            {
              icon: 'DatabaseIcon',
              text: 'Structuring of complex data with Xarray (dimensions, metadata, traceability)',
            },
            {
              icon: 'ZapIcon',
              text: 'Parallelization and scaling of processing via Dask',
            },
            {
              icon: 'GaugeIcon',
              text: 'Performance optimization on large calculation grids',
            },
          ],
        },
      ],
    },
  },
  {
    slug: 'neverhack-airbus-quantum-communications-simulator',
    title: 'Airbus Defence & Space - Simulateur de Communications Quantiques',
    description:
      'Développement d\'un simulateur complet de liaison quantique satellite-sol, avec génération de clés et visualisation temps réel.',
    author: 'Massyl Ouaddour',
    date: '2023-08-01',
    tags: [
      'Python',
      'PyQt',
      'NumPy',
      'Pandas',
      'Docker',
      'Jenkins',
      'Git',
      'GitLab',
      'JIRA',
      'Linux',
      'CI/CD',
    ],
    logo: logoLaforet,
    translations: {
      fr: {
        title: 'Airbus Defence & Space - Simulateur de Communications Quantiques',
        description:
          'Développement d\'un simulateur complet de liaison quantique satellite-sol, avec génération de clés et visualisation temps réel.',
      },
      en: {
        title: 'Airbus Defence & Space - Quantum Communications Simulator',
        description:
          'Development of a complete satellite-to-ground quantum link simulator, with key generation and real-time visualization.',
      },
    },
    caseStudy: {
      exploration:
        'Development of a complete satellite-to-ground quantum link simulator with key generation and real-time visualization for technical demonstrations and reusable scenarios.',
      solution:
        'Design of a PyQt GUI with real-time display and dynamic parameters, management of multiple hardware configurations (Tx / Rx of different sizes), precise implementation of timing and duty cycle logic.',
      architecture:
        'Maintainability-oriented architecture: documented classes, extensible code, implementation of unit tests, Jenkins CI and complete dockerization. Scientific Python environment: NumPy, Pandas, Git, CI/CD.',
      results:
        'The simulator is now used as an interactive tool for technical demonstrations and reusable scenarios, enabling precise simulation of quantum communications.',
      sections: [
        {
          title: 'Key Features',
          items: [
            {
              icon: 'MonitorIcon',
              text: 'PyQt GUI with real-time display and dynamic parameters',
            },
            {
              icon: 'SettingsIcon',
              text: 'Management of multiple hardware configurations (Tx / Rx of different sizes)',
            },
            {
              icon: 'ClockIcon',
              text: 'Precise implementation of timing and duty cycle logic',
            },
            {
              icon: 'TestTubeIcon',
              text: 'Unit tests, Jenkins CI and complete dockerization',
            },
          ],
        },
      ],
    },
  },
  {
    slug: 'neverhack-cnes-satcom-testing',
    title: 'CNES - Tests de Solutions de Communications par Satellites',
    description:
      'Support technique, tests terrain et analyse de performance pour plusieurs solutions télécom dans le cadre d\'activités de validation et d\'innovation.',
    author: 'Massyl Ouaddour',
    date: '2022-11-01',
    tags: ['Python', 'Bash', 'SatCom', 'Testing', 'QoS', 'Linux'],
    logo: logoLaforet,
    translations: {
      fr: {
        title: 'CNES - Tests de Solutions de Communications par Satellites',
        description:
          'Support technique, tests terrain et analyse de performance pour plusieurs solutions télécom dans le cadre d\'activités de validation et d\'innovation.',
      },
      en: {
        title: 'CNES - Satellite Communication Solutions Testing',
        description:
          'Technical support, field testing and performance analysis for several telecom solutions in the context of validation and innovation activities.',
      },
    },
    caseStudy: {
      exploration:
        'In the context of validation and innovation activities around satellite communications, I provided technical support, field testing and performance analysis for several telecom solutions.',
      solution:
        'Performance measurements on satellite Internet offers (fixed, MSS, IoT) deployed in France and French Guiana, field testing of OTM antennas, fixed stations, gateways and embedded solutions (including drones), writing of test plans, technical procedures and QoS analysis reports.',
      architecture:
        'Implementation of telecom equipment in the field (white zones, crisis demonstrators), Bash & Python scripts for traffic analysis, metrology and KPI monitoring, monitoring and evaluation of multimedia tools (videoconf/audio/video) on SatCom architectures.',
      results:
        'Operational expertise on the implementation, analysis and improvement of innovative telecom solutions in a critical and distributed environment.',
      sections: [
        {
          title: 'Activities',
          items: [
            {
              icon: 'SignalIcon',
              text: 'Performance measurements on satellite Internet offers (fixed, MSS, IoT)',
            },
            {
              icon: 'AntennaIcon',
              text: 'Field testing of OTM antennas, fixed stations, gateways and embedded solutions',
            },
            {
              icon: 'FileTextIcon',
              text: 'Writing of test plans, technical procedures and QoS analysis reports',
            },
            {
              icon: 'CodeIcon',
              text: 'Bash & Python scripts for traffic analysis, metrology and KPI monitoring',
            },
          ],
        },
      ],
    },
  },
  {
    slug: 'neverhack-dga-cem-testing-tool',
    title: 'DGA - Outil de Tests CEM',
    description:
      'Développement logiciel pour un outil utilisé pour des tests CEM (Compatibilité Électromagnétique) et développement de pilotes pour instruments.',
    author: 'Massyl Ouaddour',
    date: '2022-02-01',
    tags: ['Java', 'C++', 'PostgreSQL', 'Git', 'Linux'],
    logo: logoLaforet,
    translations: {
      fr: {
        title: 'DGA - Outil de Tests CEM',
        description:
          'Développement logiciel pour un outil utilisé pour des tests CEM (Compatibilité Électromagnétique) et développement de pilotes pour instruments.',
      },
      en: {
        title: 'DGA - EMC Testing Tool',
        description:
          'Software development for a tool used for EMC (Electromagnetic Compatibility) testing and development of instrument drivers.',
      },
    },
    caseStudy: {
      exploration:
        'Development of software for EMC testing tools and instrument driver development for the French Defense Procurement Agency (DGA).',
      solution:
        'EMC testing and processing software development: scientific calculation functions (mathematics, electromagnetism), development of instrument drivers, maintenance and support (MCO).',
      architecture:
        'Stack: Java, C++, Git, PostgreSQL, Linux. Development of robust software solutions for electromagnetic compatibility testing.',
      results:
        'Successfully delivered software tools for EMC testing with reliable instrument drivers and scientific calculation capabilities.',
      sections: [
        {
          title: 'Development Areas',
          items: [
            {
              icon: 'CalculatorIcon',
              text: 'Scientific calculation functions (mathematics, electromagnetism)',
            },
            {
              icon: 'PlugIcon',
              text: 'Development of instrument drivers',
            },
            {
              icon: 'WrenchIcon',
              text: 'Maintenance and support (MCO)',
            },
          ],
        },
      ],
    },
  },
  {
    slug: 'cnes-guide-gnss-simulation',
    title: 'CNES / GUIDE – Simulation & R&D GNSS',
    description:
      'Participation à plusieurs projets de simulation satellite, de navigation GNSS et de calcul scientifique.',
    author: 'Massyl Ouaddour',
    date: '2021-03-01',
    tags: ['Python', 'C++', 'Qt', 'Bash', 'Linux', 'VBA', 'Scilab', 'matplotlib'],
    logo: logoLaforet,
    translations: {
      fr: {
        title: 'CNES / GUIDE – Simulation & R&D GNSS',
        description:
          'Participation à plusieurs projets de simulation satellite, de navigation GNSS et de calcul scientifique.',
      },
      en: {
        title: 'CNES / GUIDE – GNSS Simulation & R&D',
        description:
          'Participation in several satellite simulation, GNSS navigation and scientific computing projects.',
      },
    },
    caseStudy: {
      exploration:
        'Participation in several satellite simulation, GNSS navigation and scientific computing projects at CNES.',
      solution:
        'Orbit simulation and satellite trajectory prediction (Runge-Kutta), generation of synthetic physical measurements (C/N₀, link budget, GPS signals), GUI redesign (C++/Qt) and API integration for GNSS signal replay.',
      architecture:
        'Python refactoring: docstrings, typing, improved readability and collaboration, curve visualization with matplotlib, data extraction (CSV), technical documentation of a scientific calculation engine (optics, physics). Stack: Python, Bash, C++/Qt, Linux, VBA, Scilab.',
      results:
        'Successfully contributed to GNSS simulation projects with improved code quality and documentation.',
      sections: [
        {
          title: 'Project Contributions',
          items: [
            {
              icon: 'SatelliteIcon',
              text: 'Orbit simulation and satellite trajectory prediction (Runge-Kutta)',
            },
            {
              icon: 'SignalIcon',
              text: 'Generation of synthetic physical measurements (C/N₀, link budget, GPS signals)',
            },
            {
              icon: 'MonitorIcon',
              text: 'GUI redesign (C++/Qt) and API integration for GNSS signal replay',
            },
            {
              icon: 'CodeIcon',
              text: 'Python refactoring: docstrings, typing, improved readability and collaboration',
            },
          ],
        },
      ],
    },
  },
]
