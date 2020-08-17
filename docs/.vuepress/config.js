module.exports = {
    base: "/lemon-ui/",
    title: 'Lemon UI',
    description: 'Just playing around',
    themeConfig: {
        head: [
            ['link', { rel: 'shortcut icon', type: "image/x-icon", href: 'assets/favicon.ico' }]
        ],
        logo: 'assets/lemon.png',
        sidebar: [
            {
                title: '开始',
                children: ['/introduce/', '/startup/'],
                collapsable: false,
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse',
                ],
                collapsable: false,
            }
        ],
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/components/button' },
            { text: 'github', link: 'https://github.com/wuwenbang/lemon-ui' },
            { text: 'gitee', link: 'https://gitee.com/wuwenbang/lemon-ui' },
        ]
    },

    markdown: {
        extractHeaders: ['h2']
    }

}