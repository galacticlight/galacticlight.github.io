export interface Project {
  n: string;
  title: string;
  label?: string;
  pitch: string;
  proves?: string;
  tech: string[];
  note?: string;
  links: { href: string; text: string }[];
  image?: string;
  svg?: 'joinery' | 'ledgerlight' | 'drone' | 'homelab';
  alt: string;
}

export const projects: Project[] = [
  {
    n: '01',
    title: 'Ordis',
    pitch:
      'A real-time desktop AI companion, an original character that lives in an always-on-top overlay with a Three.js avatar. Chat is local-first, memory is kept on disk, and timers, reminders and on-device speech work without a network.',
    proves:
      'Shipping a native desktop AI product, not a chat wrapper. An optional LLM connects through an OpenAI-compatible “Harbor” (Grok preset), keys stay in OS secure storage, and CI is tested.',
    tech: ['TypeScript', 'Electron', 'Vite', 'Three.js', 'Vitest', 'ONNX TTS'],
    links: [{ href: 'https://github.com/galacticlight/ordis', text: 'Source on GitHub' }],
    image: '/img/ordis.webp',
    alt: 'The Ordis companion on a dark background: a translucent gold-framed cube holding two glass-like spheres inside orbiting gold rings.',
  },
  {
    n: '02',
    title: 'SKYHUD',
    pitch:
      'A night-sky dashboard for stargazers that answers one question: is tonight worth going out, and what is up there? An observing score, a live sky dome, the Moon, planets, ISS passes and space weather, all computed in your browser.',
    proves:
      'Data-heavy product thinking with restraint. The astronomy runs on-device and is checked against JPL Horizons, with no backend, no accounts, no analytics and no third-party scripts.',
    tech: ['JavaScript', 'Canvas', 'Astronomy Engine', 'SGP4', 'Service worker', 'GitHub Actions'],
    links: [
      { href: 'https://galacticlight.github.io/SKYHUD/', text: 'Open the live demo' },
      { href: 'https://github.com/galacticlight/SKYHUD', text: 'Source on GitHub' },
    ],
    image: '/img/skyhud.webp',
    alt: 'A circular star chart of the night sky on a dark background, with constellation lines, labelled planets and meteor-shower radiants.',
  },
  {
    n: '03',
    title: 'The Joinery Journey',
    pitch:
      'A public learning notebook for Japanese joinery, begun from zero: roadmap, budget, tools, a joints glossary and a working journal. A data-driven Astro site with hand-drawn SVG charts and automated Pages deploys.',
    proves: 'Frontend craft and product taste.',
    tech: ['Astro', 'TypeScript', 'SVG', 'GitHub Pages'],
    links: [
      { href: 'https://galacticlight.github.io/japanese-joinery-journey/', text: 'Visit the site' },
      { href: 'https://github.com/galacticlight/japanese-joinery-journey', text: 'Source on GitHub' },
    ],
    svg: 'joinery',
    alt: 'Line drawing of a simple interlocking wooden joint above a measuring rule.',
  },
  {
    n: '04',
    title: 'Ledgerlight',
    label: 'Local tool',
    pitch:
      'A personal budgeting app built on a local database. Your financial data never leaves the machine: no cloud, no accounts, no tracking.',
    proves: 'Privacy-first design: useful software that asks for nothing and keeps everything at home.',
    tech: ['Local database', 'Desktop app'],
    note: 'Runs locally. Private by design.',
    links: [],
    svg: 'ledgerlight',
    alt: 'Line drawing of a budgeting app window with a list of rows and a small bar chart, with no real figures.',
  },
  {
    n: '05',
    title: 'drone-enviro-monitor',
    label: 'In Progress',
    pitch:
      'A homegrown drone environmental monitor: a Raspberry Pi air-quality payload that sends telemetry to a local server and turns flight paths into pollution heatmaps.',
    proves: 'Hardware-to-data thinking, from sensor to server to map.',
    tech: ['Raspberry Pi', 'Python', 'FastAPI / Flask', 'SQLite'],
    links: [{ href: 'https://github.com/galacticlight/drone-enviro-monitor', text: 'Plans on GitHub' }],
    svg: 'drone',
    alt: 'Line drawing of a quadcopter with a small sensor payload above a dotted flight path.',
  },
  {
    n: '06',
    title: 'Home Lab',
    label: 'In Progress',
    pitch:
      'A fully local, open-source home lab for sharpening Linux, Docker, Kubernetes, database, CI/CD and observability skills. It runs on spare Raspberry Pi and Debian hardware with nothing purchased, and GitHub is the source of truth. Drone and robotics integration comes next.',
    proves: 'Operating real infrastructure end to end, on whatever is already on the shelf.',
    tech: ['Linux', 'Docker', 'Kubernetes', 'Postgres', 'CI/CD', 'Observability'],
    links: [],
    svg: 'homelab',
    alt: 'Line drawing of a Debian server connected by lines to three small nodes.',
  },
];
