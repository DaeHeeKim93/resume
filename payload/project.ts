import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '비상교육 전체 Nexus 3 도입 및 유지보수  ',
      startedAt: '2020-06',
      where: 'Visang Education',
      descriptions: [
        { content: 'CentOS 7' },
        { content: 'Nexus 3 SonaType 도입 및 기타 환경 설정 작업' },
        { content: '전사 Nexus 문서화 및 Custom Library 규칙 설정' },
      ],
    },
    {
      title: '비상교육 전체 Scouter 도입 및 유지보수 ',
      startedAt: '2019-09',
      where: 'Visang Education',
      descriptions: [
        { content: 'Java 8, CentOS 7' },
        { content: 'Scouter 도입 및 기타 환경 설정 작업' },
        { content: '전사 Scouter 문서화 및 계정 표준화 등의 작업 수행' },
        { content: 'Telegram Plugin, Email Plugin, Scouter Paper의 Plugin 도입' },
      ],
    },
    {
      title: 'TOPIK 온라인 단어카드 서비스 도입 및 개발 ',
      startedAt: '2020-07',
      endedAt: '2020-09',
      where: 'Visang Education',
      descriptions: [
        { content: 'ASP 3, IIS, MSSQL, JQuery' },
        { content: '코로나19 환경으로 인한 비대면 수업에 활용하는 TOPIK 단어카드 서비스 개발' },
        { content: '해당 서비스의 B2B, B2C 분류 및 관리자 기능 개발' },
      ],
    },
    {
      title: 'TOPIK 모의고사 서비스 도입 및 개발 ',
      startedAt: '2020-05',
      endedAt: '2020-06',
      where: 'Visang Education',
      descriptions: [
        { content: 'ASP 3, IIS, MSSQL, JQuery' },
        { content: 'TOPIK 시험과 유사한 모의고사 상품 시스템 개발' },
        { content: 'TOPIK 시험(듣기/쓰기/읽기) 시스템 및 성적표, 첨삭 기능 개발 ' },
        { content: 'B2C 이외에도 B2B에서 성적표 및 관리자 시스템에서 첨삭 가능 할 수 있도록 수정' },
      ],
    },
    {
      title: 'Momntalk 이벤트 신청 및 관리 시스템 템플릿 개발 ',
      startedAt: '2019-05',
      endedAt: '2019-07',
      where: 'Visang Education',
      descriptions: [
        { content: 'Spring 3.2 , MariaDB, JQuery' },
        { content: '브랜드 사이트의 이벤트 신청 및 전체적인 시스템 템플릿 구축 및 개발' },
        {
          content:
            '전체적인 신청 유형 ( 4가지 이상 ) 을 1가지 시스템으로 통합 및 커스텀하게 신청 가능하도록 수정',
        },
        { content: '시간대에 따른 제한 수량, 확률 조정 및 기존 이벤트와 비교할 수 있도록 개발' },
      ],
    },
    {
      title: 'Vivasam 모바일 이벤트 기능 도입 및 개발  ',
      startedAt: '2019-04',
      endedAt: '2019-07',
      where: 'Visang Education',
      descriptions: [
        { content: 'Spring 3.2 , JQuery ( PC ) / Spring 4.3, React 16.5 ( Mobile ) ' },
        { content: '기존 PC에서만 지원되던 이벤트를 모바일에서 참여 가능하도록 신규 기능 개발' },
        { content: '모바일 사용자 기능 및 관리자에서 공개/비공개 및 제어 가능하도록 개발' },
      ],
    },
    {
      title: '계좌이체 수기정산 시스템 도입 및 개발 ',
      startedAt: '2018-03',
      endedAt: '2018-06',
      where: 'Visang Education',
      descriptions: [
        { content: 'Classic ASP, Jquery, Javascript' },
        {
          content:
            '기존 Excel File로 수동 관리된 부분을 관리자 시스템에서 등록 및 결재, 자동 정산 계산으로 기능 개선',
        },
        { content: '예외 상품 및 상품 종류에 따른 정산이 바로 계산 될 수 있도록 개발' },
      ],
    },
    {
      title: 'KG INICIS 모바일 결제 기능 개발 ',
      startedAt: '2018-01',
      endedAt: '2018-03',
      where: 'Visang Education',
      descriptions: [
        { content: 'Classic ASP, Jquery, Javascript' },
        {
          content:
            'MasterTopik 시스템의 모바일 신용카드, 가상계좌, 계좌이체가 가능하도록 신규 기능 개발',
        },
        { content: '기존의 PC 결재 오류 및 모바일 결재에 대해 개선 및 개발' },
      ],
    },
  ],
};

export default project;
