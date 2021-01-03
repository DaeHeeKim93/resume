import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '많은 사람들이 제 서비스를 이용하는 순간에 잠시나마 행복이 있었으면 합니다.',
    '좋은 서비스를 항상 만드는 사람이 되도록 노력하고 계속 공부하고자 하는 개발자입니다.',
    '언제나 최선을 다하기 위해 노력하고 있습니다.'
  ],
  sign: 'DaeHee Kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
