/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [  "../src/pages/**/*.stories.mdx",
  "../src/stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ], core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/Desing-System/'
    }

    return config
  }
};
export default config;
