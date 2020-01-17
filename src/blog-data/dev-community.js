export default function devCommunityData() {
  return {
    main: {
      title: 'Keeping up with the latest in your Dev Community',
      link: '/blog/keeping-up-with-dev-community',
      image: '/images/blog/keeping-up-with-the-latest.jpeg',
      description: [
        'Keeping up with the latest in your development community will help you grow as a developer. From finding better employment opportunities to gaining insight into some of your common problems that others in the community have solved.',
      ],
    },
    subSections: [
      {
        title: 'Why should I keep up with the latest?',
        paragraphs: [
          'Keeping up the latest in your development community will help your grow as a developer. Without a community we become ridged on how we do things. Keeping up with the latest will expose you to the current best practice which are continually evolving. Here’s a list of some of the benefits. ',
        ],
        isNumbered: false,
        list: [
          {
            title: '',
            isLinks: false,
            items: [
              'Finding better employment opportunities',
              'Increasing your base salary',
              'Increase your chance of a promotion',
              'Finding help on future project',
              'Write better code that incorporates current best practices',
              'Insight into common problems that you come across that others in the dev community have solved',
            ],
          },
        ],
      },
      {
        title: 'Where can I find my dev community?',
        paragraphs: [
          'I’ll give you a list of some sites and people to follow but this may change over time. Best thing you can do is to find contributors to your favorite open source projects and follow them. Or do some digging and find some of biggest names in your dev community and follow them on social media. ',
          'Also find blogs that specialize in your area of development and pick articles to read that spark your interest. If you struggle with finding time then try podcast. You can listen to experts in your dev community talk about the latest trends and topics. Best part of podcast, is that you can listen while your on your way to work, working out, cleaning or eating.',
        ],
        isNumbered: false,
        list: [
          {
            title: 'Twitter',
            isLinks: true,
            items: [
              'https://twitter.com/wesbos',
              'https://twitter.com/addyosmani',
              'https://twitter.com/youyuxi',
              'https://twitter.com/dan_abramov ',
            ],
          },
          {
            title: 'Blogs',
            isLinks: true,
            items: [
              'https://www.smashingmagazine.com/',
              'https://scotch.io/',
              'https://www.sitepoint.com/',
            ],
          },
          {
            title: 'Podcast',
            isLinks: true,
            items: [
              'https://syntax.fm/',
              'http://www.fullstackradio.com/',
              'https://changelog.com/podcast ',
            ],
          },
          {
            title: 'Reddit',
            isLinks: true,
            items: [
              'https://www.reddit.com/r/programming/ ',
              'https://www.reddit.com/r/Frontend/ ',
              'hhttps://www.reddit.com/r/reactjs/',
              'https://www.reddit.com/r/PHP/',
            ],
          },
        ],
      },
    ],
  };
}
