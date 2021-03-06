import React from 'react';
import { storiesOf } from '@storybook/react';
import { NesArt } from '../Icon';

storiesOf('nes-components/NesArt', module)
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
      propTablesExclude: [{ NesArt }],
    },
  })
  .add('nes-logo', () => <NesArt iconType={'nes-logo'} />)
  .add('nes-jp-logo', () => <NesArt iconType={'nes-jp-logo'} />)
  .add('snes-logo', () => <NesArt iconType={'snes-logo'} />)
  .add('snes-jp-logo', () => <NesArt iconType={'snes-jp-logo'} />)
  .add('nes-octocat', () => (
    <NesArt iconType={'nes-octocat'} isAnimated={true} />
  ))
  .add('nes-smartphone', () => <NesArt iconType={'nes-smartphone'} />)
  .add('nes-phone', () => <NesArt iconType={'nes-phone'} />);
