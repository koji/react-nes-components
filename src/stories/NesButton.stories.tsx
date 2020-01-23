import React from 'react';
import { storiesOf } from '@storybook/react';
import { NesButton } from '../Button';
// import { action } from "@storybook/addon-actions";

const handleClick = (msg: string) => {
  console.log(`clicked ${msg}`);
};

storiesOf('nes-components/NesButton', module)
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
      propTablesExclude: [{ NesButton }],
    },
  })
  .add('default', () => (
    <NesButton onClick={() => handleClick('default')}>default</NesButton>
  ))
  .add('primary', () => (
    <NesButton buttonType={'primary'} onClick={() => handleClick('primary')}>
      primary
    </NesButton>
  ))
  .add('success', () => (
    <NesButton buttonType={'success'} onClick={() => handleClick('success')}>
      success
    </NesButton>
  ))
  .add('warning', () => (
    <NesButton buttonType={'warning'} onClick={() => handleClick('warning')}>
      warning
    </NesButton>
  ))
  .add('error', () => (
    <NesButton buttonType={'error'} onClick={() => handleClick('error')}>
      error
    </NesButton>
  ))
  .add('disabled', () => (
    <NesButton
      buttonType={'disabled'}
      onClick={() => handleClick('will not be clickable')}
    >
      disabled
    </NesButton>
  ));
