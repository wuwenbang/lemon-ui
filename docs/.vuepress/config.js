module.exports = {
    title: 'Lemon UI',
    description: 'Just playing around',

    themeConfig: {
        logo: 'assets/lemon.png',
        sidebar: [
            {
                title: '快速上手',
                children: ['/install/', '/startup/']
            },
            {
                title: '组件',
                children: ['/button/']
            }
        ],
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ]
    }
}