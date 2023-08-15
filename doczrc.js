import { deep } from '@theme-ui/presets';

export default {
  base: "/exotic-menu/",
  typescript: true,
  files: ['**/*.mdx'],
  ignore: ['README.md'],
  themeConfig: {
    ...deep,
    initialColorModeName: 'dark',
    useColorSchemeMediaQuery: false,
  },
};
