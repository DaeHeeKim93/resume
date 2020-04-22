import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'Visang Education (비상교육)',
      position: 'Back-End, Front-End Developer',
      startedAt: '2017-12',
      descriptions: [
        '비상교육 LMS 사이트 개발',
        '비상교육 LMS 사이트 개발 및 유지보수',
        'KGInicis 모바일 결제, Google Charts를 이용한 통계 기능 개발',
        'CS API 개발 및 유지보수',
        'ISMS 대응 및 후속 조치',
        '레거시 서비스에 Junit4 + Mokito를 이용한 SingleTon Controller Test 도입',
        '해당 서비스 모니터링 도입 및 장애 개선 ( Scouter, Whatap )',
      ],
      skillKeywords: [
        'Spring',
        'React.js',
        'Classic ASP',
        'ASP.NET',
        'Jquery',
        'Mybatis',
        'MSSQL',
        'MySQL',
        'MariaDB',
      ],
    },
  ],
};

export default experience;
