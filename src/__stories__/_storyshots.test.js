import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

registerRequireContextHook();

if (!process.env.IMG) {
  // Use stories for jest snapshot comparison
  initStoryshots({
    configPath: 'config/storybook/config.js',
    storyKindRegex: /^pages_./, // skip page files, won't succeed
    test: multiSnapshotWithOptions({}),
  })

} else {
  // Use stories for image snapshot comparison
  // > Storybook must be running!
  if (process.env.IMG) {
    initStoryshots({
      configPath: 'config/storybook/config.js',
      suite: '',
      test: imageSnapshot()
    })
  }
}

// Fix: prevent jest error: "Your test suite must contain at least one test."
test.skip('skip', () => {})
