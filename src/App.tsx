import React from 'react';
// import { NesInput } from './Input';
// import { NesBadge } from './Badge';
import { NesTextarea } from './Textarea';
const App: React.FC = () => {
  const handleChange = (e: any) => {
    console.log('onChange', e.target.value);
  };

  return (
    <div className="App">
      <NesTextarea placeholder={'tell me more'} onChange={handleChange} />
      {/* <NesInput
        darkMode={true}
        isInline={true}
        fieldType={'success'}
        label={'NesInput Test'}
        placeHolder={'put something here'}
        onChange={() => handleChange}
      /> */}
      {/* <NesBadge badgeType={['primary']} contents={['nes-components']} /> */}
    </div>
  );
};

export default App;
