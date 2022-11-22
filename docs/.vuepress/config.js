const children = [
    '',
    'use',
    'video',
    'manual',
    'question',
]

const list = [
    // {
    //     text: "测试跟踪",
    //     link: "/testTrack/"
    // },
    // {
    //     text: "接口测试",
    //     link: "/apiTest/"
    // },
    // {
    //     text: "性能测试",
    //     link: "/performanceTest/"
    // },
    // {
    //     text: 'UI测试',
    //     link: '/uiTest/'
    // },
    // {
    //     text: '系统设置',
    //     link: "/setUp/"
    // }
]


module.exports = {
    // title: "",
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }]
    ],
    base: '/',
    prot: "8080",
    dest: "./dist",
    themeConfig: {
        logo: '/icon.png',
        smoothScroll: true,
        sidebarDepth: 2,
        nav: [
            // { text: '首页', link: '/' },
            ...list,
            { text: 'UI指令', link: '/uiApi/' },
            // { text: '更新日志', link: '/log/' },
            { text: '联系我们', link: '/contact/' },
        ],
        sidebar: {
            ...list.reduce((prev, cur) => {
                prev[cur.link] = [{
                    title: cur.text,
                    collapsable: false,
                    children
                }]
                return prev
            }, {}),
            '/uiApi/': [
                '',
            ],
            '/log/': [
                ''
            ],
            '/contact/': [
                ''
            ],
        }
    },
    sass: { indentedSyntax: true },
    plugins: ['@vuepress/back-to-top'],
    markDown: {}
}