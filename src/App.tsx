import React from 'react';
// import { NesInput } from './Input';
import { NesBadge } from './Badge';
const App: React.FC = () => {
  const handleChange = (e: any, value: string) => {
    console.log('onChange', value);
  };

  return (
    <div className="App">
      {/* <NesInput
        darkMode={true}
        isInline={true}
        fieldType={'success'}
        label={'NesInput Test'}
        placeHolder={'put something here'}
        onChange={() => handleChange}
      /> */}
      <NesBadge badgeType={['primary']} contents={['nes-components']} />
    </div>
  );
};

export default App;
