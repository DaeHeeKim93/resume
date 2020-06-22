import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-End',
  items: [
    {
      title: 'Spring',
      level: 3,
    },
    {
      title: 'Flask',
      level: 1,
    },
    {
      title: 'Classic ASP',
      level: 3,
    },
    {
      title: 'PHP',
      level: 2,
    },
    {
      title: 'ASP.NET',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MSSQL',
      level: 3,
    },
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'MariaDB',
      level: 3,
    },
    {
      title: 'PostgreSQL',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-End',
  items: [
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'HTML',
      level: 2,
    },
    {
      title: 'Jquery',
      level: 2,
    },
    {
      title: 'Vue.JS',
      level: 1,
    },
    {
      title: 'Javascript',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'IDE + Tools',
  items: [
    {
      title: 'IntelliJ',
    },
    {
      title: 'Visual Studio',
    },
    {
      title: 'WebStorm',
    },
    {
      title: 'DataGrip',
    },
    {
      title: 'Scouter',
    },
    {
      title: 'Ubuntu',
    },
    {
      title: 'Whatap',
    },
    {
      title: 'SVN / Git',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
