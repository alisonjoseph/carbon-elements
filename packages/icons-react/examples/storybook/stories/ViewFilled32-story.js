import React from 'react';
import { storiesOf } from '@storybook/react';
import ViewFilled32 from '../../../lib/view--filled/32';

storiesOf('ViewFilled32', module)
  .add('default', () => <ViewFilled32 />)
  .add('with accessibility label', () => (
    <ViewFilled32 aria-label="Accessibility label" />
  ))
  .add('with title', () => (
    <ViewFilled32 focusable>
      <title>Icon title</title>
    </ViewFilled32>
  ));
