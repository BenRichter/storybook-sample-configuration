"scripts": {
  "test": "node scripts/test.js --env=jsdom",
  "test:image": "IMG=true node scripts/test.js --env=jsdom",
  "storybook": "start-storybook -p 6006 -c config/storybook",
},  
"devDependencies": {
  "@storybook/addon-actions": "^4.1.11",
  "@storybook/addon-info": "^4.1.11",
  "@storybook/addon-knobs": "^4.1.11",
  "@storybook/addon-options": "^4.1.11",
  "@storybook/addon-storyshots": "^4.1.11",
  "@storybook/addon-storyshots-puppeteer": "^4.1.11",
  "@storybook/addons": "^4.1.11",
  "@storybook/react": "^4.1.11",
  "storybook-addon-react-docgen": "^1.0.4",
  "storybook-react-router": "^1.0.2",
  "storybook-usage": "^4.0.7",
}
