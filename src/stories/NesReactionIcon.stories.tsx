import React from 'react';
import { storiesOf } from '@storybook/react';
import { NesReactionIcon } from '../Icon';

storiesOf('nes-components/NesReactionIcon', module)
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
      propTablesExclude: [{ NesReactionIcon }],
    },
  })
  .add('heart', () => <NesReactionIcon iconType={'heart'} iconSize={'large'} />)
  .add('heart_empty', () => (
    <NesReactionIcon
      iconType={'heart'}
      iconSize={'large'}
      iconReactionType={'empty'}
    />
  ))
  .add('star', () => <NesReactionIcon iconType={'star'} iconSize={'large'} />)
  .add('star_empty', () => (
    <NesReactionIcon
      iconType={'star'}
      iconSize={'large'}
      iconReactionType={'empty'}
    />
  ))
  .add('star_half', () => (
    <NesReactionIcon
      iconType={'star'}
      iconSize={'large'}
      iconReactionType={'half'}
    />
  ))
  .add('star_transparent', () => (
    <NesReactionIcon
      iconType={'star'}
      iconSize={'large'}
      iconReactionType={'transparent'}
    />
  ))
  .add('like', () => <NesReactionIcon iconType={'like'} iconSize={'large'} />)
  .add('like_empty', () => (
    <NesReactionIcon
      iconType={'like'}
      iconSize={'large'}
      iconReactionType={'empty'}
    />
  ));
