export function getScreenY(id: string) {
  const node = document.getElementById(id)?.getBoundingClientRect() as DOMRect;
  // return node;
  const y = node.y - window.innerHeight;
  return Math.abs(y > 100 ? 0 : y) / node.height; // > 0
}

export function useScroll() {
  return {
    y: Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100),
  };
}

export function onResize(fn: () => void) {
  document.addEventListener('resize', fn);
}

export const projects = [

  { title: 'Simple TIC-TAC-TOE Game',
    img_hd: '/assets/tic-tac-toe.gif',
    descr: 'This is a fully responsive simple tic-tac-toe game written in vanilla HTML, CSS, and JavaScript.',
    uri: 'https://resume-comnsense.netlify.app/',
    source: 'https://github.com/comnsense/lame-games/tree/main/Tic-Tac-Toe-Game-main',
  },
  {title: 'Rock Paper & Scissor',
    img_hd: '/assets/rps.gif',
    img_2k: '/assets/rps.gif' ,
    descr: ' HTML, CSS, and JavaScript',
    uri: 'https://comnsense.github.io/portfolio-old/lame-games/rock-paper-scissors-master/index.html',
    source: 'https://github.com/comnsense/lame-games/tree/main/rock-paper-scissors-master',
  },
  {title: 'CV',
    img_sd: 'assets/resume-p.webp',
    img_hd: '/assets/resume-p.webp',
    img_2k: '/assets/resume-p.webp',
    descr: ' ',
    uri: 'https://resume-comnsense.netlify.app/',
    source: 'https://github.com/comnsense/resume.',
  },
  {title: 'Portfolio 2022',
    img_sd: 'assets/portfoliopng.webp',
    img_hd: '/assets/portfoliopng.webp',
    img_2k: '/assets/portfoliopng.webp',
    descr: 'Resume',
    uri: 'https://comnsense.github.io/portfolio-old/index.html',
    source: 'https://github.com/comnsense/portfolio-old/tree/58cca1b2f1a30453c4c2e5d7755357c370929f73',
  },
  {title: 'Mumblr',
    img_sd: '/assets/mumblr-p.webp',
    img_hd: '/assets/mumblr-p.webp',
    img_2k: '/assets/mumblr-p.webp',
    descr: 'A minimalist Tumblr Theme',
    uri: 'Mumblrtum.tumblr.com',
    source: 'https://github.com/comnsense/mumblrtum',
  },
  {
    title: 'AWS-Notes',
    img_sd: '/assets/amazon-.webp',
    img_hd: '/assets/amazon-.webp',
    img_2k: '/assets/amazon-.webp',
    descr: 'AWS Lambda Samples using NodeJS.',
    source: 'https://github.com/comnsense/AWS-Node',
  },
  {
    title: 'Responsive Snake',
    img_sd: '/assets/pp/ResponsiveSnake.webp',
    img_hd: '/assets/pp/ResponsiveSnake.webp',
    img_2k: '/assets/pp/ResponsiveSnake.webp' ,
    descr: 'AnotherGame',
    uri: 'https://comnsense.github.io/portfolio-old/lame-games/ResponsiveSnake-master/index.html',
    source: 'https://github.com/comnsense/lame-games/tree/main/ResponsiveSnake-master',
  },
  {
    title: 'black-and-white',
    img_sd: '/assets/bw-p.png',
    img_hd: '/assets/bw-p.png',
    img_2k: '/assets/bw-p.png' ,
    descr: 'This is a fully responsive simple tic-tac-toe game written in vanilla HTML, CSS, and JavaScript.',
    uri: 'https://comnsense.github.io/lame-games/blkandwht/index.html',
    source: 'https://github.com/comnsense/lame-games/tree/main/blkandwht',
  },
  {
    title: 'Simple TIC-TAC-TOE Game',
    img_sd: '/assets/tic-tac-toe.gif',
    img_hd: '/assets/tic-tac-toe.gif',
    img_2k: '/assets/tic-tac-toe.webp',
    descr: 'This is a fully responsive simple tic-tac-toe game written in vanilla HTML, CSS, and JavaScript.',
    uri: 'https://resume-comnsense.netlify.app/',
    source: 'https://comnsense.github.io/portfolio-old/lame-games/tic-tac-toe',
  },
];

export const focus = [


  {
    src: '/assets/nodejs.svg',
    title: 'Node.js',
    tooltip: 'JavaScript runtime environment',
  },

  {
    src: '/assets/ts.svg',
    title: 'Typescript',
    tooltip: 'JavaScript with syntax for types',
  },

  {
    src: '/assets/react.svg',
    title: 'React.js',
    tooltip: 'JS ibrary for building user interfaces',
  },
  {
    src: '/assets/tailwind.svg',
    title: 'Tailwindcss',
    tooltip: 'Utility-first CSS framework',
  },
  {
    src: '/assets/astro.svg',
    title: 'Astro',
    tooltip: 'Static framework with Island Architecture',
  },
  {
    src: '/assets/nextjs.svg',
    title: 'Next.js',
    tooltip: 'Full stack React framework',
  },

];
export const familiar = [
   {
    src: '/assets/firebase.svg',
    title: 'Firebase',
    tooltip: 'Backend-as-a-service platform',
  },

  {
    src: '/assets/figma.svg',
    title: 'Figma',
    tooltip: 'Web-based designing tool',
  },
  ,
  {
    src: '/assets/prisma.svg',
    title: 'Prisma',
    tooltip: 'Next-generation Node.js ORM',
  },

];
