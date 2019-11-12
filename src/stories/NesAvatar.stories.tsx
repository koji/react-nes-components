import React from 'react';
import { storiesOf } from '@storybook/react';
import { NesAvatar } from '../Avatar';

storiesOf('nes-components/NesAvatar', module)
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
      propTablesExclude: [{ NesAvatar }],
    },
  })
  .add('Avatar', () => (
    <NesAvatar
      iconSize={'large'}
      isRounded={true}
      imgSrc={'https://avatars1.githubusercontent.com/u/474225?s=460&v=4'}
    />
  ));
