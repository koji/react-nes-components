import React from 'react';
import { storiesOf } from '@storybook/react';
import { NesTextarea } from '../Textarea';

const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log('onChange', e.target.value);
};

storiesOf('nes-components/NesTextarea', module)
  .addDecorator(story => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {story()}
    </div>
  ))
  .addParameters({
    props: {
      propTablesExclude: [{ NesTextarea }],
    },
  })
  .add('textarea', () => (
    <NesTextarea
      rows={10}
      cols={20}
      placeholder={'tell me more'}
      onChange={handleChange}
    />
  ));
