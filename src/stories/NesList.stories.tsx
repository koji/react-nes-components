import React from 'react';
import { storiesOf } from '@storybook/react';
import WebFont from 'webfontloader';
import { NesList } from '../List';

WebFont.load({
  google: {
    families: ['Press+Start+2P'],
  },
});

const contents = ['hell', 'nes', 'components', 'storybook'];

storiesOf('nes-components/NesList', module)
  .addDecorator(story => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '30px',
      }}
    >
      {story()}
    </div>
  ))
  .addParameters({
    props: {
      propTablesExclude: [{ NesList }],
    },
  })
  .add('circle', () => <NesList items={contents} isDisc={false} />)
  .add('disc', () => <NesList items={contents} isDisc={true} />);
