const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/elarsaks/Desktop/front-end-portfolio/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/home/elarsaks/Desktop/front-end-portfolio/README.md"))),
  "component---src-components-alert-mdx": hot(preferDefault(require("/home/elarsaks/Desktop/front-end-portfolio/src/components/Alert.mdx"))),
  "component---src-components-button-mdx": hot(preferDefault(require("/home/elarsaks/Desktop/front-end-portfolio/src/components/Button.mdx"))),
  "component---src-index-mdx": hot(preferDefault(require("/home/elarsaks/Desktop/front-end-portfolio/src/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/elarsaks/Desktop/front-end-portfolio/.docz/src/pages/404.js")))
}

