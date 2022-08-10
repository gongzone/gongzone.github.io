import type { Actions } from 'gatsby';

export const onCreateBabelConfig = ({ actions }: { actions: Actions }) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      reactRuntime: 'automatic',
    },
  });
};
