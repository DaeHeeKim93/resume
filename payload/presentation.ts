import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '백엔드 개발자가 허우적대는 리액트 이야기',
      subTitle: '제1회 기만콘',
      at: '2019-07',
      descriptions: [
        {
          content: '백엔드 개발자가 처음 리액트를 접할때의 경험 이야기',
        },
        {
          content: 'Github.io:',
          postHref:
            'https://fairbrite.github.io/2019/DevStarLeague/20190720/presentation/02_react_begineer.pdf/',
        },
      ],
    },
    {
      title: 'Azure를 이용한 간단한 블로그 만들기의 여정',
      subTitle: 'Azure BootCamp 2019',
      at: '2019-04',
      descriptions: [
        {
          content: 'Azure와 NET Core를 활용하여 개인 블로그를 만들었던 이야기',
        },
        {
          content: 'Onedrive Live:',
          postHref:
            'https://onedrive.live.com/view.aspx?resid=318484C5AAD6B73D!677774&ithint=file%2cpptx&authkey=!ABsa0_95PM9a2Z4',
        },
      ],
    },
  ],
};

export default presentation;
