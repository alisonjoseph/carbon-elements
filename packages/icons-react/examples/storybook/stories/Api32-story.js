import React from 'react';
import { storiesOf } from '@storybook/react';
import Api32 from '../../../lib/api/32';

storiesOf('Api32', module)
  .add('default', () => <Api32 />)
  .add('with accessibility label', () => (
    <Api32 aria-label="Accessibility label" />
  ))
  .add('with title', () => (
    <Api32 focusable>
      <title>Icon title</title>
    </Api32>
  ));
