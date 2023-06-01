import { rest } from 'msw';

const openedIssuePageData = {
  count: {
    label: 4,
    milestone: 2,
    opened: 2,
    closed: 2,
  },
  issues: [
    {
      id: 1,
      title: '[FE] 이슈',
      createdDateTime: '2023-05-10T10:10:00',
      assignees: ['포코', '다온'],
      labels: [
        {
          title: 'FE12',
          bgColorCode: '#655CC7',
        },
        {
          title: 'bug',
          bgColorCode: '#14D6B6',
        },
      ],
      milestone: '테스크01',
      author: '포코',
      authorUrl: '포코_Url',
    },
    {
      id: 3,
      title: '[iOS] 이슈',
      createdDateTime: '2023-05-10T20:20:00',
      assignees: ['해나', '하림'],
      labels: [
        {
          title: 'iOS',
          bgColorCode: '#A3D485',
        },
      ],
      milestone: '테스크02',
      author: '하림',
      authorUrl: '하림_Url',
    },
  ],
};

const closedIssuePageData = {
  count: {
    label: 4,
    milestone: 2,
    opened: 2,
    closed: 2,
  },
  issues: [
    {
      id: 2,
      title: '[BE] 이슈',
      createdDateTime: '2023-05-10T14:35:00',
      assignees: ['듀이', '코어', '만쥬'],
      labels: [
        {
          title: 'BE',
          bgColorCode: '#EC8D8D',
        },
        {
          title: 'bug',
          bgColorCode: '#14D6B6',
        },
      ],
      milestone: '테스크01',
      author: '만쥬',
      authorUrl: '만쥬_Url',
    },
    {
      id: 4,
      title: '[BE] 테스트',
      createdDateTime: '2023-05-10T22:22:00',
      assignees: [],
      labels: [],
      milestone: '',
      author: '만쥬',
      authorUrl: '만쥬_Url',
    },
  ],
};

const assigneesData = {
  assignees: [
    { id: 1, name: '다온', imgUrl: 'https://avatars.githubusercontent.com/u/115215178?s=40&v=4' },
    { id: 2, name: '포코', imgUrl: 'https://avatars.githubusercontent.com/u/101160636?s=40&v=4' },
    { id: 3, name: '듀이', imgUrl: 'https://avatars.githubusercontent.com/u/115435482?s=40&v=4' },
    { id: 4, name: '만쥬', imgUrl: 'https://avatars.githubusercontent.com/u/20828490?s=40&v=4' },
    { id: 5, name: '코어', imgUrl: 'https://avatars.githubusercontent.com/u/85631282?s=40&v=4' },
    { id: 6, name: '해나', imgUrl: 'https://avatars.githubusercontent.com/u/97685264?s=40&v=4' },
    { id: 7, name: '하림', imgUrl: 'https://avatars.githubusercontent.com/u/90844696?s=40&v=4' },
  ],
};

export const handlers = [
  rest.get('/api/issues?status=open', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(openedIssuePageData));
  }),

  rest.get('/api/issues?status=closed', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(closedIssuePageData));
  }),

  rest.get('/api/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get('/api/assignees', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(assigneesData));
  }),
];
