import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Scouter',
      descriptions: [
        { content: 'Application Performance Monitoring for Open Source' },
        { content: 'Document Contributor' },
        {
          content: 'https://github.com/scouter-project/scouter',
          href: 'https://github.com/scouter-project/scouter',
        },
      ],
    },
  ],
};

export default openSource;
