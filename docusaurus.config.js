module.exports = {
  "title": "Masterworks Online Help",
  "tagline": "The tagline of my site",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "your-org",
  "projectName": "docusaurus",
  "themeConfig": {
    "navbar": {
      "title": "Masterworks Online Help",
      "logo": {
        "alt": "Masterworks Online Help",
        "src": "img/MWCloudLogo.png"
      },
      "items": []
    },
    "footer": {
      "style": "dark",
      "links": [],
      "copyright": "Copyright © ${new Date().getFullYear()} Aurigo Software Technologies Inc."
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": require.resolve('./sidebars.js')
        },
        "theme": {
          "customCss": require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  "plugins": []
};