import React from 'react';
import { storiesOf } from '@storybook/react';
import { NesContainer } from '../Container';

storiesOf('nes-components/NesContainer', module)
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
      propTablesExclude: [{ NesContainer }],
    },
  })
  .add('Container', () => (
    <NesContainer content={'This is nes-components container'} />
  ))
  .add('Container_centered', () => (
    <NesContainer
      containerTitle={'nes-components'}
      isCentered={true}
      content={'This is nes-components container'}
    />
  ))
  .add('Container_dark', () => (
    <NesContainer
      containerTitle={'nes-components'}
      isCentered={false}
      isRounded={true}
      darkMode={true}
      content={'This is nes-components container'}
    />
  ))
  .add('Container with title', () => (
    <NesContainer
      containerTitle={'nes-components'}
      isCentered={true}
      isRounded={true}
      content={'This is nes-components container'}
    />
  ));
