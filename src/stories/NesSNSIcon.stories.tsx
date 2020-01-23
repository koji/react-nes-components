import React from 'react';
import { storiesOf } from '@storybook/react';
import { NesSNSIcon } from '../Icon';

storiesOf('nes-components/NesSNSIcon', module)
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
      propTablesExclude: [{ NesSNSIcon }],
    },
  })
  .add('twitter', () => <NesSNSIcon iconType={'twitter'} iconSize={'medium'} />)
  .add('facebook', () => (
    <NesSNSIcon iconType={'facebook'} iconSize={'medium'} />
  ))
  .add('instagram', () => (
    <NesSNSIcon iconType={'instagram'} iconSize={'medium'} />
  ))
  .add('github', () => <NesSNSIcon iconType={'github'} iconSize={'medium'} />)
  .add('google', () => <NesSNSIcon iconType={'google'} iconSize={'medium'} />)
  .add('gmail', () => <NesSNSIcon iconType={'gmail'} iconSize={'medium'} />)
  .add('medium', () => <NesSNSIcon iconType={'medium'} iconSize={'medium'} />)
  .add('linkedin', () => (
    <NesSNSIcon iconType={'linkedin'} iconSize={'medium'} />
  ))
  .add('twitch', () => <NesSNSIcon iconType={'twitch'} iconSize={'medium'} />)
  .add('youtube', () => <NesSNSIcon iconType={'youtube'} iconSize={'medium'} />)
  .add('reddit', () => <NesSNSIcon iconType={'reddit'} iconSize={'medium'} />)
  .add('whatsapp', () => (
    <NesSNSIcon iconType={'whatsapp'} iconSize={'medium'} />
  ));
