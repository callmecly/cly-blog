module.exports = {
  title: '陈良源-cly',
  description: 'Just playing around',
  base: '/cly-blog/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Js', link: '/js/' },
      { text: 'Node', link: '/node/' },
      { text: 'Java', link: '/java/' },
    ],
    sidebar: {
      '/js/': getJsSidebar('指南', '深入'),
      '/node/': getNodeSidebar('指南', '深入')
    }
  }
}

function getJsSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        '',
      ]
    }
  ]
}

function getNodeSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        '',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        '',
      ]
    }
  ]
}