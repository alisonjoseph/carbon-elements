import React from 'react';
import { storiesOf } from '@storybook/react';
import ArrowsVertical32 from '../../../lib/arrows--vertical/32';

storiesOf('ArrowsVertical32', module)
  .add('default', () => <ArrowsVertical32 />)
  .add('with accessibility label', () => (
    <ArrowsVertical32 aria-label="Accessibility label" />
  ))
  .add('with title', () => (
    <ArrowsVertical32 focusable>
      <title>Icon title</title>
    </ArrowsVertical32>
  ));
