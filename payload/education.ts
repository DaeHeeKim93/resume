import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '서경대학교',
      subTitle: '컴퓨터 공학과 ( 3.83/4.5 )',
      startedAt: '2012-03',
      endedAt: '2018-02',
    },
    {
      title: '대성고등학교',
      subTitle: '졸업 ( 문과 )',
      startedAt: '2009-03',
      endedAt: '2012-02',
    },
  ],
};

export default education;
