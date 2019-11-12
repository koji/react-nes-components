import React from 'react';
import { storiesOf } from '@storybook/react';
import { NesRadio } from '../Radio';

storiesOf('nes-components/NesRadio', module)
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
      propTablesExclude: [{ NesRadio }],
    },
  })
  .add('normal', () => (
    <NesRadio items={['developer', 'designer', 'manager']} />
  ))
  .add('darkMode', () => (
    <div style={{ backgroundColor: '#212529' }}>
      <NesRadio darkMode={true} items={['developer', 'designer', 'manager']} />
    </div>
  ));
