# storybook-sample-configuration

Storybook React with Jest. PostCSS support with Webpack3. Examples for material-UI

Example configuration for storybook with "basic" addons:
* Options   (own title, link and panel to the right)
* Knobs     (live changeable properties)
* Actions   (watch emitted actions)
* Usage     (see React code for Component)
* Storyshots  (Use stories as Jest Snapshot-test)
* Storyshots-puppeteer   (Visual snapshots to compare regressions)
* Info      (great as a documentation, but not compatible for testings. Renders inside the view -.-)

Started with standard quick-setup `npx -p @storybook/cli sb init` from https://storybook.js.org/basics/quick-start-guide/.
Configs where extended and moved to match jest structure.

## Testing
Stroybook **must** be running for visual testing, therefore they are not feasible in a CI with this setup.
e.g. for Jenkins, only use normal snapshots: `CI=true /usr/local/bin/npm test --env=jsdom`
