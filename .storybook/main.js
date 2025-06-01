module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials', // Includes actions, backgrounds, controls, docs, viewport, toolbars
    '@storybook/addon-interactions', // For play functions
    '@storybook/addon-console',
    '@storybook/addon-storysource',
    // 'storybook-addon-jsx', // Commenting out for now, will check compatibility later if needed
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag', // Enable autodocs for tagged components
  },
  staticDirs: ['../public'], // Replicates -s public, assuming nes.css is imported or handled by vite-plugin-static-copy
};
