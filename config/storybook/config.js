import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import StoryRouter from 'storybook-react-router';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { Usage } from 'storybook-usage'

import { MuiThemeProvider } from 'material-ui'
import muiTheme from 'src/theme/muiTheme';
import 'src/AppBase.pcss'
import './style.pcss'

/* (currently not compatible with storyshots because inline)
import { withInfo } from '@storybook/addon-info';
// Show extra information
// https://github.com/storybooks/storybook/tree/master/addons/info
addDecorator(withInfo({
  header: false,
  inline: true,
  source: true,
  maxPropsIntoLine: 1
}));
 */

addDecorator(
  withOptions({
    name: 'myProject',
    url: 'https://PROJECT.io',
    addonPanelInRight: true,
    sortStoriesByKind: false // sort asc
  })
);

// Register Props panel
addDecorator(withPropsTable);

// Register Usage panel
addDecorator(Usage);

// Allow Components with routing
addDecorator(StoryRouter());

// Use material-ui Theme
addDecorator(story => <MuiThemeProvider muiTheme={muiTheme}>{story()}</MuiThemeProvider>);

// automatically import all files ending in *.stories.js
const req = require.context('../../src/__stories__', true, /.stories.js$/);
/* const req = require.context('../src/components', true, /\.stories\.js$/);  // Or add stories beside components */

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
