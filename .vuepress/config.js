
module.exports = {
    // theme: 'vuepress-theme-xx',
    title: 'Guus met VuePress',
    description: 'Lekker aanklooien',
    themeConfig: {
        displayAllHeaders: true, // Default: false
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Pagina 2', link: '/pagina2/' },
            { text: 'External', link: 'https://google.com' }
        ],
        logo: '/images/movir.jpg',
        sidebar: [
            '/',
            '/pagina2',
            ['/pagina3', 'Ja ja pagina 3 en dit is een heel erg lang menu item ja ja ja'],
            {
                title: 'Group 1',   // required
                path: '/',      // optional, which should be a absolute path.
                collapsable: true, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                    '/',
                    '/pagina2',
                    ['/pagina3', 'Ja ja pagina 3'],
                ]
            },
            {
                title: 'Group 2',
                children: [ '/pagina4']
            }
        ],
        smoothScroll: true
    }
}
