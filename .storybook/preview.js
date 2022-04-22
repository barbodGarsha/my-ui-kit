export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: '',
      order: ['My UI Kit', ['Inputs', ['RadioButton', ['Primary', 'Secondary', 'Large', 'Small', '*'], 'Button', ['Primary', 'Secondary', 'Large', 'Small', '*'] ,'*'], '*'], '*']
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
