import React from 'react';
import { storiesOf } from '@storybook/react';
import LogoYoutube32 from '../../../lib/logo--youtube/32';

storiesOf('LogoYoutube32', module)
  .add('default', () => <LogoYoutube32 />)
  .add('with accessibility label', () => (
    <LogoYoutube32 aria-label="Accessibility label" />
  ))
  .add('with title', () => (
    <LogoYoutube32 focusable>
      <title>Icon title</title>
    </LogoYoutube32>
  ));
