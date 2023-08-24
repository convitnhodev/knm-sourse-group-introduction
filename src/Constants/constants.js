import { library } from '@fortawesome/fontawesome-svg-core';
import { faX, faBars, faWindowRestore, faBagShopping, faDiceD6 } from '@fortawesome/free-solid-svg-icons';
import { faReact, faGithub, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

import {
    codecademy,
    htmlIcon,
    cssIcon,
    jsIcon,
    reactIcon,
    threeIcon,
    tailwindIcon,
    reduxIcon,
    gitIcon,
    githubIcon,
    gsapIcon,
    shopifyIcon,
    webflowIcon,
    framerIcon,
    figmaIcon,
    jammmingProject,
    teslaProject,
    venomsoulProject,
    memojiHand,
    memojiHello,
    memojiOk,
    nhom6,
    htmlCertificate,
    cssCertificate,
    jsCertificate,
    reactCertificate,
    webflowCertificate,
} from '../assets';

const media = {
    codecademy,
    htmlIcon,
    cssIcon,
    jsIcon,
    reactIcon,
    threeIcon,
    tailwindIcon,
    reduxIcon,
    gitIcon,
    githubIcon,
    gsapIcon,
    shopifyIcon,
    webflowIcon,
    framerIcon,
    figmaIcon,
    jammmingProject,
    teslaProject,
    venomsoulProject,
    memojiHand,
    memojiHello,
    memojiOk,
    htmlCertificate,
    cssCertificate,
    jsCertificate,
    reactCertificate,
    webflowCertificate,
};

const icons = {
    faBars,
    faX,
    faWindowRestore,
    faBagShopping,
    faDiceD6,
    faReact,
    faGithub,
    faYoutube,
    faTiktok,
};

const introduction = {
    text: [
        "Hi there, I'm glad to have you here!",

        'My name is Valeriu and I am a front-end developer based in Italy. My passion for web development started in April 2022 when I began building Shopify stores.',

        'Since then, I have been constantly advancing and expanding my knowledge in this field. In October 2022, I felt the urge to dive deeper into web development which led me to learn how to code in html, css, js and reactjs. With each project, I strive to create a unique and effective solution while integrating the latest web technologies.',

        'I am always excited to collaborate with individuals and teams who share my passion for creating exceptional web experiences. Thank you for taking the time to visit my portfolio!',
    ],
};

const journeys = [
    {
        title: 'Web Foundations',
        company_name: 'Codecademy',
        icon: codecademy,
        iconBg: '#204056',
        date: '5 Dec 2022 - 14 Dec 2022',
        points: ['Fundamentals of HTML', 'Fundamentals of CSS', 'Developing Websites Locally', 'Deploying Websites'],
    },
    {
        title: 'Improved Styling with CSS',
        company_name: 'Codecademy',
        icon: codecademy,
        iconBg: '#204056',
        date: '15 Dec 2022 - 29 Dec 2022',
        points: ['Fundamentals of Web Design', 'Making a Website Responsive', 'CSS Transitions and Animations'],
    },
    {
        title: 'Building Interactive Websites',
        company_name: 'Codecademy',
        icon: codecademy,
        iconBg: '#204056',
        date: '30 Dec 2022 -  9 Feb 2023',
        points: ['JavaScript Syntax', 'Building Interactive Websites', 'Making a Website Accessible', 'Git and Github'],
    },
    {
        title: 'Front-End Development',
        company_name: 'Codecademy',
        icon: codecademy,
        iconBg: '#204056',
        date: '10 Feb - Present',
        points: ['JavaScript Syntax', 'JavaScript Testing', 'Async JavaScript', 'Web Apps', 'React Framework'],
    },
];

const projects = [
    {
        name: 'Venomsoul E-Commerce',
        description: '',
        image: venomsoulProject,
        source_code_link: 'https://github.com/valeriusec',
        demo_link: 'https://infopilot.netlify.app/',
    },
    {
        name: 'Tesla Website',
        description: '',
        image: teslaProject,
        source_code_link: 'https://github.com/valeriusec/tesla-website',
        demo_link: 'https://infopilot.netlify.app/',
    },
    {
        name: 'Jammming App',
        description:
            "Jammming allows you to search for your favorite songs and create custom playlists. Once you've created your playlist, you can export it directly to your Spotify account.",
        image: jammmingProject,
        source_code_link: 'https://github.com/valeriusec/jammming-app',
        demo_link: 'https://jammming-b7d.pages.dev/',
    },
];

const certificates = {
    image: [htmlCertificate, cssCertificate, jsCertificate, reactCertificate, webflowCertificate],
};

const memoji = {
    // image: [memojiHello, memojiHand, memojiOk],
    image: [nhom6],
};

const members = [
    {
        id: 'vhung1',
        title: 'Thái Nguyễn Việt Hùng',
        icon: htmlIcon,
        description: [
            'Mục tiêu: Tốt nghiệp đúng hạn, đạt được mục tiêu về kiến thức mà bản thân đã đặt ra.',
            'Ưu điểm: Luôn tò mò thích khám phá kiến thức mới, luôn cố gắng hoàn thành bằng được công việc được giao. Thẳng thắn thật thà trong công việc.',
            'Nhược điểm: Còn lười biếng, trì hoãn...',
        ],
    },
    {
        id: 'vhung2',
        title: 'Thái Nguyễn Việt Hùng',
        icon: htmlIcon,
        description: [
            'Mục tiêu: Tốt nghiệp đúng hạn, đạt được mục tiêu về kiến thức mà bản thân đã đặt ra.',
            'Ưu điểm: Luôn tò mò thích khám phá kiến thức mới, luôn cố gắng hoàn thành bằng được công việc được giao. Thẳng thắn thật thà trong công việc.',
            'Nhược điểm: Còn lười biếng, trì hoãn...',
        ],
    },
    {
        id: 'vhung3',
        title: 'Thái Nguyễn Việt Hùng',
        icon: htmlIcon,
        description: [
            'Mục tiêu: Tốt nghiệp đúng hạn, đạt được mục tiêu về kiến thức mà bản thân đã đặt ra.',
            'Ưu điểm: Luôn tò mò thích khám phá kiến thức mới, luôn cố gắng hoàn thành bằng được công việc được giao. Thẳng thắn thật thà trong công việc.',
            'Nhược điểm: Còn lười biếng, trì hoãn...',
        ],
    },
    {
        id: 'vhung4',
        title: 'Thái Nguyễn Việt Hùng',
        icon: htmlIcon,
        description: [
            'Mục tiêu: Tốt nghiệp đúng hạn, đạt được mục tiêu về kiến thức mà bản thân đã đặt ra.',
            'Ưu điểm: Luôn tò mò thích khám phá kiến thức mới, luôn cố gắng hoàn thành bằng được công việc được giao. Thẳng thắn thật thà trong công việc.',
            'Nhược điểm: Còn lười biếng, trì hoãn...',
        ],
    },
    {
        id: 'vhung5',
        title: 'Thái Nguyễn Việt Hùng',
        icon: htmlIcon,
        description: [
            'Mục tiêu: Tốt nghiệp đúng hạn, đạt được mục tiêu về kiến thức mà bản thân đã đặt ra.',
            'Ưu điểm: Luôn tò mò thích khám phá kiến thức mới, luôn cố gắng hoàn thành bằng được công việc được giao. Thẳng thắn thật thà trong công việc.',
            'Nhược điểm: Còn lười biếng, trì hoãn...',
        ],
    },
    {
        id: 'vhung6',
        title: 'Thái Nguyễn Việt Hùng',
        icon: htmlIcon,
        description: [
            'Mục tiêu: Tốt nghiệp đúng hạn, đạt được mục tiêu về kiến thức mà bản thân đã đặt ra.',
            'Ưu điểm: Luôn tò mò thích khám phá kiến thức mới, luôn cố gắng hoàn thành bằng được công việc được giao. Thẳng thắn thật thà trong công việc.',
            'Nhược điểm: Còn lười biếng, trì hoãn...',
        ],
    },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

const N = 1;
const globeData = [...Array(N).keys()].map(() => ({
    lat: 11.7,
    lng: 105.6,
    size: 20,
    color: 'red',
}));

export { media, introduction, journeys, projects, certificates, memoji, members, markerSvg, globeData, icons };
