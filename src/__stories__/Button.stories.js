import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, withKnobs } from '@storybook/addon-knobs'

import { translate } from '../components/Translate'
import { FlatButton } from 'material-ui'
import { BackgroundContainer } from 'src/theme/withBackground'


const background = (story) => <div className="sb-background"><BackgroundContainer className="login-form">{ story() }</BackgroundContainer></div>

const props = () => ({
  disabled: boolean('Disabled (disabled)', false),
  onClick: action('onClick')
})

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('.btn-outline', () => <FlatButton label={translate('common.save')}
                                         type="submit"
                                         className="btn-outline"
                                         {...props()} />)

  .addDecorator(background)
  .addDecorator(withKnobs)
  .add('.btn-outline.inverse', () => <FlatButton label={translate('login.label')}
                                                 type="submit"
                                                 className="btn-outline inverse"
                                                 {...props()} />)
