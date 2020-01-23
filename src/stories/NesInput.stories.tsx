import React from 'react';
import { storiesOf } from '@storybook/react';
import { NesInput } from '../Input';

const handleChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  value: string | number
) => {
  console.log('onChange', value);
};

storiesOf('nes-components/NesInput', module)
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
      propTablesExclude: [{ NesInput }],
    },
  })
  .add('Input', () => (
    <NesInput
      darkMode={true}
      isInline={true}
      fieldType={'success'}
      label={'NesInput Test'}
      placeHolder={'put something here'}
      onChange={e => handleChange(e, e.target.value)}
    />
  ));
