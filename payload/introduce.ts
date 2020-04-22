import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '언제나 꾸준히 노력하면 보답받는 날이 옵니다.',
    '잘하는 개발자는 아니어도 꾸준히 오래 개발하는 개발자였으면 합니다.',
  ],
  sign: 'DaeHee Kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
