import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Alert from '../components/Alert'

storiesOf('Alert', module)
  .add('default', () => <Alert content="Text" />)

  .add('warning', () => <Alert content="Longer text" type="warning" />)

  .add('info', () => <Alert content="Another text" type="info" />)

  .add('with action', () => {
    return  <Alert content="Text"
                   type="info"
                   onClick={action('clicked')}
                   style={{ cursor: 'pointer' }} />
  })
