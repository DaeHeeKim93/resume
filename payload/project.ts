import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '맘앤톡 이벤트 신청 템플릿 구축',
      startedAt: '2019-05',
      endedAt: '2019-07',
      where: 'Visang Education',
      descriptions: [
        { content: 'Spring, Junit4, Mokito' },
        {
          content:
            '사용자 수의 증가에 따른 초과 수량 및 시간에 따른 상품 배정, 초과 수량 조절을 위한 템플릿 개발 프로젝트',
        },
        { content: '이벤트 번호와 시간 설정, 갯수 제한을 통한 이벤트 제한 템플릿 기능 개발' },
        {
          content:
            '@Transactional(isolation = Isolation.READ_UNCOMMITTED)을 사용하여 Dirty Read이지만,\n' +
            '많은 유저 동시 신청시 이전의 결과가 COMMIT 되지 않아도 합산되게 하여 초과 수량 신청 방지',
        },
        {
          content:
            'Junit4ClassRunner 및 standaloneSetup, @Spy 객체 등을 활용하여, 입력값은 이벤트 번호만 입력하면, 템플릿화 한 신청 양식을 통해 자동으로 신청까지 테스트할 수 있는 테스트 기능 개발',
        },
      ],
    },
    {
      title: '비바샘 모바일 이벤트 템플릿 구축',
      startedAt: '2019-04',
      endedAt: '2019-07',
      where: 'Visang Education',
      descriptions: [
        { content: 'Spring, React.JS' },
        { content: '기존 PC 이벤트를 Mobile에서도 신청할 수 있도록 이벤트 템플릿 기능 개발' },
        {
          content:
            'Axios를 이용하여 Spring, React 간의 요청사항을 처리하였고, 서버에서 필요한 값을 불러올때, 해당 값 검증 후 진행을 하여야 해서 async - await를 사용',
        },
        {
          content:
            '추후에 발생되는 Store 객체 및 Axios를 이용한 API 등에 대해 어떤 기능일지 확인 및 적용이 필요하여,해당 부분에 대해 작성 및 수정이 가능한 내부 URL Page 구축',
        },
      ],
    },
    {
      title: '수기계좌 정산 기능 구축',
      startedAt: '2018-03',
      endedAt: '2018-06',
      where: 'Visang Education',
      descriptions: [
        { content: 'Classic ASP, Jquery, Javascript' },
        {
          content:
            '기존에 Excel로 관리되었던 수기 정산을 Admin System을 통한 등록 및 자동 정산 계산 기능 개발',
        },
        { content: '예외 상품 및 상품 종류에 따른 정산이 바로 계산 될 수 있도록 개발' },
        { content: 'Excel로 일일이 계산하던 방식에서 Admin을 통한 자동 계산 및 쉬운 수정 가능' },
      ],
    },
    {
      title: 'KG INICIS 모바일 결제 기능 구축',
      startedAt: '2018-03',
      endedAt: '2018-06',
      where: 'Visang Education',
      descriptions: [
        { content: 'Classic ASP, Jquery, Javascript' },
        { content: 'KG INICIS를 이용한 모바일 결제 기능 개발' },
        { content: '가상계좌, 계좌이체, 신용카드 모바일 결제' },
        { content: '기존에 PC로만 결제 가능하던 것을 모바일로도 결제 할 수 있도록 함' },
      ],
    },
  ],
};

export default project;
