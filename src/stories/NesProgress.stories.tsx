import React from 'react';
import { storiesOf } from '@storybook/react';
import { NesProgress } from '../Progress';

storiesOf('nes-components/NesProgress', module)
  .addDecorator(story => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vh',
      }}
    >
      {story()}
    </div>
  ))
  .addParameters({
    props: {
      propTablesExclude: [{ NesProgress }],
    },
  })
  .add('default', () => <NesProgress value={50} max={100} />)
  .add('primary', () => (
    <NesProgress barType={'primary'} value={75} max={100} />
  ))
  .add('success', () => (
    <NesProgress barType={'success'} value={10} max={100} />
  ))
  .add('warning', () => (
    <NesProgress barType={'warning'} value={25} max={100} />
  ))
  .add('error', () => <NesProgress barType={'error'} value={60} max={100} />)
  .add('pattern', () => (
    <NesProgress barType={'pattern'} value={100} max={100} />
  ));
