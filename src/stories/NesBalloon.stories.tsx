import React from 'react';
import { storiesOf } from '@storybook/react';
import { NesBalloon } from '../Balloon';

storiesOf('nes-components/NesBalloon', module)
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
      propTablesExclude: [{ NesBalloon }],
    },
  })
  .add('Balloon_left', () => (
    <NesBalloon isLeft={true} content={'Hello! This is NesBalloon!'} />
  ))
  .add('Balloon_right', () => (
    <NesBalloon isLeft={false} content={'Hello! This is NesBalloon!'} />
  ));
