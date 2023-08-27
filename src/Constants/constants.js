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
            'Minh là Hùng, sinh năm 2002. mình là sinh viên năm cuối trường đại học Khoa học tự nhiên. Hiện mình đang là backend-engineer.',
            'Mục tiêu: Trở thành một solution architect trong vòng 7 năm tới. Về quê xây được căn nhà và nhìn những đứa con của mình lớn lên môi ngày. ',
            'Ưu điểm: Xử lí vấn đề tốt, thích cái gì thì học tới cùng. Chịu khó học hỏi những thú mình thích. ',
            'Nhược điểm: Còn lười biếng, trì hoãn, nhiều lúc không làm chủ được bản thân và hay sa vào những cuộc chơi không đáng có.',
        ],
    },
    {
        id: 'ttan',
        title: 'Trần Trọng Tấn',
        icon: ttan,
        description: [
            'Mình là Tấn,  21 tuổi. Mình đang là sinh viên năm cuối của trường.',
            'Mục tiêu: Tốt nghiệp đúng hạn, đạt được những kiến thức mà bản thân đã đặt ra. Có thể ứng dụng được các kiến thức AI trong chuyên ngành vào các sản phẩm phần mềm trong tương lai.',
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
            'Xin chào mọi người, mình là Tùng, 21 tuổi, hiện là sinh viên năm cuối trường Tự Nhiên. Về ngoại hình, mình nói thật là không quá nổi bật. Da ngăm đen, gương mặt bụi bặm là đặc điểm nhận dạng chính của mình. Sở thích của mình là xem phim, đi du lịch, nấu ăn,cầu lông,...',
            'Mục tiêu: Phát triển những kỹ năng cần thiết để đáp ứng được những nhu cầu của thị trường việc làm',
            'Ưu điểm: Nói về điểm mạnh của mình thì... ừm...điểm mạnh duy nhất của mình là biết cách giết thời gian bằng cách xem phim, chơi game hoặc nằm ngủ :))',
            'Nhược điểm: Làm việc theo động lực, chưa quản lỹ quỹ thời gian tốt, dễ bị overthinking,',
            'Đây là một giới thiệu khá thật về bản thân mình. Hy vọng rằng sau khi nghe mình giới thiệu, các bạn vẫn muốn kết bạn với một "cục táo" như mình. Chào mọi người!'
        ],
    },
    {
        id: 'chi',
        title: 'Hồ Thị Kim Chi ',
        icon: chi,
        description: [
            'Xin chào, mình là Chi, sinh viên năm cuối trường Đại học Khoa học Tự nhiên, ĐHQG-HCM. Mình thích màu hồng, ghét màu đen. Trừ những món ăn mình không thích ra thì món nào mình cũng thích.',
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
            'Xin chào mọi người, mình là Khánh và mình đến từ Đồng Nai. Hiện tại mình là sinh viên K19 trường mình với MSSV là 19120542. Mình theo học chuyên ngành Công nghệ tri thức tại trường mình, tuy vậy mình đã cảm thấy không very hợp with nó, nên mình đã chuyển sang hướng khác.',
            'Mục tiêu: Ổn định công việc hiện tại và phát triển bản thân hơn cho kế hoạch tương lai.',
            'Ưu điểm: Adaptability, Time management, Methodology & Logical Thinking and Work Ethic.',
            'Nhược điểm: Unmotivated, Lazy, Sometimes be under pressure.',
            'Có thể liên lạc mình @Mail: 19120542@student.hcmus.edu.vn',
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
