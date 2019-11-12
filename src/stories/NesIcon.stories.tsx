import React from 'react';
import { storiesOf } from '@storybook/react';
import { NesIcon } from '../Icon';

storiesOf('nes-components/NesIcon', module)
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
      propTablesExclude: [{ NesIcon }],
    },
  })
  .add('close', () => <NesIcon iconType={'close'} iconSize={'large'} />)
  .add('trophy', () => <NesIcon iconType={'trophy'} iconSize={'large'} />)
  .add('coin', () => <NesIcon iconType={'coin'} iconSize={'large'} />);
