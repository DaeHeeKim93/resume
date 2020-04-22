import { faEnvelope, faPhone, faRssSquare } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김대희',
    small: '(Kim Dae Hee)',
  },
  contact: [
    {
      title: 'anyozcall@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/DaeHeeKim93',
      link: 'https://github.com/DaeHeeKim93',
      icon: faGithub,
    },
    {
      title: 'https://www.linkedin.com/in/daehee-kim-930902',
      link: 'https://www.linkedin.com/in/daehee-kim-930902',
      icon: faLinkedin,
    },
    {
      title: 'https://www.popit.kr/author/DaeHee Kim',
      link: 'https://www.popit.kr/author/DaeHee Kim',
      icon: faRssSquare,
    },
  ],
  notice: {
    title: '이메일로 연락 주시면 빠르게 답변드립니다.',
    icon: faBell,
  },
};

export default profile;
