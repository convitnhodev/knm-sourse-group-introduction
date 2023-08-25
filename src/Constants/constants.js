import { library } from '@fortawesome/fontawesome-svg-core';
import { faX, faBars, faWindowRestore, faBagShopping, faDiceD6 } from '@fortawesome/free-solid-svg-icons';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

import { vhung, nhom6, ttan, chi, tai, tung, khanh } from '../assets';

const media = {
    vhung,
};

const icons = {
    faBars,
    faX,
};

const introduction = {
    text: [
        'Xin chào các bạn, chúng mình là MAD SUMMER',

        'Chào mừng bạn đến với nhóm môn học về kỹ năng mềm! Trong khung chương trình này, chúng ta sẽ khám phá và phát triển những khả năng quan trọng không thể thiếu trong cuộc sống và sự nghiệp',

        'Nhóm môn này không chỉ tập trung vào việc trang bị kiến thức, mà còn hướng đến việc xây dựng khả năng giao tiếp hiệu quả, làm việc nhóm, quản lý thời gian và giải quyết vấn đề một cách linh hoạt',

        'Hãy cùng nhau bắt đầu hành trình khám phá và phát triển bản thân để trở thành một cá nhân tự tin và thành công trong mọi tình huống!',
    ],
};

const memoji = {
    // image: [memojiHello, memojiHand, memojiOk],
    image: [nhom6],
};

const members = [
    {
        id: 'vhung',
        title: 'Thái Nguyễn Việt Hùng',
        icon: vhung,
        description: [
            'Mục tiêu: Trở thành một solution architect trong vòng 7 năm tới, lấy được vợ đẹp con ngoan.',
            'Ưu điểm: Xử lí vấn đề tốt, thích cái gì thì học tới cùng, không có khái niệm bỏ cuộc. ',
            'Nhược điểm: Còn lười biếng, trì hoãn, và hay nhảy việc...',
        ],
    },
    {
        id: 'ttan',
        title: 'Trần Trọng Tấn',
        icon: ttan,
        description: [
            'Mục tiêu: Tốt nghiệp đúng hạn, đạt được mục tiêu về kiến thức mà bản thân đã đặt ra.',
            'Ưu điểm: Luôn tò mò thích khám phá kiến thức mới, luôn cố gắng hoàn thành bằng được công việc được giao. Thẳng thắn thật thà trong công việc.',
            'Nhược điểm: Còn lười biếng, trì hoãn...',
        ],
    },
    {
        id: 'htai',
        title: 'Nguyễn Hữu Tài',
        icon: tai,
        description: [
            'Mục tiêu: Phát triển những kỹ năng cần thiết để phục vụ cho môi trường làm việc trong tương lại',
            'Ưu điểm: Tư duy phản biện, xử lý vấn đề.',
            'Nhược điểm:  kỹ năng giao tiếp.',
        ],
    },
    {
        id: 'ttung',
        title: 'Trần Thanh Tùng',
        icon: tung,
        description: [
            'Mục tiêu: Phát triển những kỹ năng cần thiết để đáp ứng được những nhu cầu của thị trường việc làm',
            'Ưu điểm: Dễ thích ứng, khả năng tìm kiếm thông tin nhanh, Ứng biến tốt',
            'Nhược điểm: Làm việc theo động lực, chưa quản lỹ quỹ thời gian tốt, dễ bị overthinking,',
        ],
    },
    {
        id: 'chi',
        title: 'Hồ Thị Kim Chi ',
        icon: chi,
        description: [
            'Mục tiêu:  Cải thiện các kỹ năng quan trọng như giao tiếp, trình bày và tư duy..',
            'Ưu điểm: Có trách nhiệm, hòa đồng.',
            'Nhược điểm: Dễ bị mất động lực, thường hay trì trệ thời gian làm việc.',
        ],
    },
    {
        id: 'khanh',
        title: 'Trần Cẩm Khánh ',
        icon: khanh,
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

export { media, introduction, memoji, members, markerSvg, globeData, icons };
