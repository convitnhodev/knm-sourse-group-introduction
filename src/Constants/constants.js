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

        'Chào mừng bạn đến với nhóm môn học về kỹ năng mềm! Trong khung chương trình này, chúng ta sẽ khám phá và phát triển những khả năng quan trọng không thể thiếu trong cuộc sống và sự nghiệp',

        'Nhóm môn này không chỉ tập trung vào việc trang bị kiến thức, mà còn hướng đến việc xây dựng khả năng giao tiếp hiệu quả, làm việc nhóm, quản lý thời gian và giải quyết vấn đề một cách linh hoạt',

        'Hãy cùng nhau bắt đầu hành trình khám phá và phát triển bản thân để trở thành một cá nhân tự tin và thành công trong mọi tình huống!',
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
    image: [memojiHello, memojiHand, memojiOk],
};

const members = [
    {
        id: 'vhung1',
        title: 'Thái Nguyễn Việt Hùng',
        icon: htmlIcon,
        description: [
            'Mục tiêu: Trở thành một solution architect trong vòng 7 năm tới, lấy được vợ đẹp con ngoan.',
            'Ưu điểm: Xử lí vấn đề tốt, thích cái gì thì học tới cùng, không có khái niệm bỏ cuộc. ',
            'Nhược điểm: Còn lười biếng, trì hoãn, và hay nhảy việc...',
        ],
    },
    {
        id: 'vhung2',
        title: 'Trần Trọng Tấn',
        icon: htmlIcon,
        description: [
            'Mục tiêu: Tốt nghiệp đúng hạn, đạt được mục tiêu về kiến thức mà bản thân đã đặt ra.',
            'Ưu điểm: Luôn tò mò thích khám phá kiến thức mới, luôn cố gắng hoàn thành bằng được công việc được giao. Thẳng thắn thật thà trong công việc.',
            'Nhược điểm: Còn lười biếng, trì hoãn...',
        ],
    },
    {
        id: 'vhung3',
        title: 'Huu Tai',
        icon: htmlIcon,
        description: [
            'Mục tiêu: Phát triển những kỹ năng cần thiết để phục vụ cho môi trường làm việc trong tương lại',
            'Ưu điểm: Tư duy phản biện, xử lý vấn đề.',
            'Nhược điểm:  kỹ năng giao tiếp.',
        ],
    },
    {
        id: 'vhung4',
        title: 'Trần Thanh Tùng',
        icon: htmlIcon,
        description: [
            'Mục tiêu: Phát triển những kỹ năng cần thiết để đáp ứng được những nhu cầu của thị trường việc làm',
            'Ưu điểm: Dễ thích ứng, khả năng tìm kiếm thông tin nhanh, Ứng biến tốt',
            'Nhược điểm: Làm việc theo động lực, chưa quản lỹ quỹ thời gian tốt, dễ bị overthinking,',
        ],
    },
    {
        id: 'vhung5',
        title: 'Chi',
        icon: htmlIcon,
        description: [
            'Mục tiêu:  Cải thiện các kỹ năng quan trọng như giao tiếp, trình bày và tư duy..',
            'Ưu điểm: Có trách nhiệm, hòa đồng.',
            'Nhược điểm: Dễ bị mất động lực, thường hay trì trệ thời gian làm việc.',
        ],
    },
    {
        id: 'vhung6',
        title: 'Khanh',
        icon: htmlIcon,
        description: [
            'Mục tiêu: Ổn định công việc hiện tại và phát triển bản thân hơn cho kế hoạch tương lai.',
            'Ưu điểm: Adaptability, Time management, Methodology & Logical Thinking and Work Ethic.',
            'Nhược điểm: Unmotivated, Lazy, Sometimes be under pressure.',
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
