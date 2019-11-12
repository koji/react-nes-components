import React from 'react';
import { storiesOf } from '@storybook/react';
import { NesTextarea } from '../Textarea';

storiesOf('nes-components/NesTextarea', module)
  .addDecorator(story => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {story()}
    </div>
  ))
  .addParameters({
    props: {
      propTablesExclude: [{ NesTextarea }],
    },
  })
  .add('textarea', () => (
    <NesTextarea content={'This is textarea sample!!!'} />
  ));
