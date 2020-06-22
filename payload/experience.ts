import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'Visang Education (비상교육)',
      position: 'Back-End, Front-End Developer',
      startedAt: '2017-12',
      descriptions: [
        '비상교육 LMS 사이트 개발 및 유지보수',
        '비상교육 Scouter 도입 및 기타 환경 설정 작업',
        'ISMS 대응 및 후속 조치',
        'TOPIK 모의고사 기능, KG INICIS 모바일 결제 개발',
        'CS CTI API 기능, Google Chart B2B 통계 기능 개발',
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
