const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Example Typescript',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/elarsaks/Desktop/front-end-portfolio/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Example Typescript',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/elarsaks/Desktop/front-end-portfolio',
          templates:
            '/home/elarsaks/Desktop/front-end-portfolio/node_modules/docz-core/dist/templates',
          docz: '/home/elarsaks/Desktop/front-end-portfolio/.docz',
          cache: '/home/elarsaks/Desktop/front-end-portfolio/.docz/.cache',
          app: '/home/elarsaks/Desktop/front-end-portfolio/.docz/app',
          appPackageJson:
            '/home/elarsaks/Desktop/front-end-portfolio/package.json',
          appTsConfig:
            '/home/elarsaks/Desktop/front-end-portfolio/tsconfig.json',
          gatsbyConfig:
            '/home/elarsaks/Desktop/front-end-portfolio/gatsby-config.js',
          gatsbyBrowser:
            '/home/elarsaks/Desktop/front-end-portfolio/gatsby-browser.js',
          gatsbyNode:
            '/home/elarsaks/Desktop/front-end-portfolio/gatsby-node.js',
          gatsbySSR: '/home/elarsaks/Desktop/front-end-portfolio/gatsby-ssr.js',
          importsJs:
            '/home/elarsaks/Desktop/front-end-portfolio/.docz/app/imports.js',
          rootJs:
            '/home/elarsaks/Desktop/front-end-portfolio/.docz/app/root.jsx',
          indexJs:
            '/home/elarsaks/Desktop/front-end-portfolio/.docz/app/index.jsx',
          indexHtml:
            '/home/elarsaks/Desktop/front-end-portfolio/.docz/app/index.html',
          db: '/home/elarsaks/Desktop/front-end-portfolio/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
